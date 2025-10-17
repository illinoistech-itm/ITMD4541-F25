import * as mathMod from './math_module.js';

window.addEventListener('DOMContentLoaded', function(){

    console.log('-- DOMContentLoaded Run -- main.js --');
    console.log(mathMod);

    document.getElementById('btn').addEventListener('click', function(){
        console.log('button clicked');
        let sum = mathMod.sum(1,2,3,4,5,6,7,8,9);
        console.log('Sum from main.js: ' + sum);
        let c = new mathMod.Circle(20);
        console.log('Circle Area from main.js: ' + c.area);
        alert(`Sum: ${sum}, Circle Circumference: ${c.circumference}`);
    });

});

let obj = {name: 'Brian', email: 'bbailey4@iit.edu'};

export function msg() {
    alert('Hello ' + obj.name);
}

export default obj;