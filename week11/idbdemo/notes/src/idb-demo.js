jQuery(document).ready(function($){

	console.log('DOM Ready');

    let db;
    let openRequest = indexedDB.open('notes', 1);

    openRequest.onupgradeneeded = function(e){
        console.log('Upgrading DB...');
        let thisDB = e.target.result;
		if (!thisDB.objectStoreNames.contains('notestore')) {
			thisDB.createObjectStore('notestore', { autoIncrement: true });
		}
    };

    openRequest.onsuccess = function(e){
        console.log('DB Open Success!');
        db = e.target.result;

        $('#addbtn').click(function(e) {
            let text = prompt('Enter the text for the note.');
            console.log(text);
            if (text) {
                addNote(text);
            } else {
                alert('Note text must not be blank.');
            }
        });

        renderNotes();
    }

    openRequest.onerror = function(e){
        console.log('Error');
        // Handle errors
    };

    // render notes function
    function renderNotes(){
    	$('#note-grid').empty();

    	//Count Objects
		let transaction = db.transaction(['notestore'], 'readonly');
		let store = transaction.objectStore('notestore');
		let countRequest = store.count();
		countRequest.onsuccess = function(e){
			console.log(countRequest.result);
            let count = Number(countRequest.result);
            if (count > 0) {
            	let objectStore = db.transaction(['notestore'], 'readonly').objectStore('notestore');
            	objectStore.openCursor().onsuccess = function(e){
            		let cursor = e.target.result;
					if (cursor) {
						let key = cursor.key;
						let $wrapper = $('<div data-key="' + key + '" class="note">');
						let $contents = $('<p>' + cursor.value + '</p>');
						let $actions = $('<div class="note-actions">');
						let $deleteBtn = $('<button class="delete-note btn btn-sm btn-secondary">delete</button>');
						$deleteBtn.click(function(e){
                            console.log('Delete ' + cursor.key);
                            deleteNote(key);
                        });
						let $editBtn = $('<button class="edit-note btn btn-sm btn-secondary">edit</button>');
						$editBtn.click(function(e){
                            console.log('Edit ' + cursor.key);
                            editNote(key);
                        });
						$actions.append($editBtn);
                        $actions.append($deleteBtn);
						$wrapper.append($contents);
                        $wrapper.append($actions);
                        $('#note-grid').append($wrapper);
                        cursor.continue();
					} else {
						//no more entries
					}
            	};
            } else {
            	$('#note-grid').empty();
            }
		};
    }

    // add note function
    function addNote(text) {
    	console.log('Add: ' + text);
    	let transaction = db.transaction(['notestore'],'readwrite');
		let store = transaction.objectStore('notestore');
		let addRequest = store.add(text);
		addRequest.onerror = function(e) {
			console.log("Error", e.target.error.name);
	        //some type of error handler
	    }
	    addRequest.onsuccess = function(e) {
	    	console.log("added note");
	    	renderNotes();
	    }
    }

    // delete note by key
	function deleteNote(k) {
		console.log('delete pushed');
		let transaction = db.transaction(['notestore'], 'readwrite');
		let store = transaction.objectStore('notestore');
		let request = store.delete(k);
		request.onsuccess = function(e){
			renderNotes();
		};
	}

	// edit note by key
    function editNote(k) {
    	console.log('edit pushed');
    	let transaction = db.transaction(['notestore'], 'readwrite');
        let store = transaction.objectStore('notestore');
        let request = store.get(k);
        request.onsuccess = function(e) {
        	let newtext = prompt('Enter the text you would like to update.', request.result);
        	let updateRequest = store.put(newtext, k);
        	updateRequest.onsuccess = function(e){
        		renderNotes();
        	};
        };
        request.onerror = function(e) {
            // Handle errors!
        };
    }







}); //end dom ready







