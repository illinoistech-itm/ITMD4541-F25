import { useState } from "react";

export function ControlledComponent(props) {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <h1>{props.headline}: {text}</h1>
            <input type="text" value={text} onChange={handleChange} />
        </div>
    );
}