import React, { useState } from 'react';

const TextInput = () => {
    const [text, settext] = useState('');
    const onTextChange = (event) => {
        settext(event.target.value)
    };

    return(
        <input
            onChange={(event:ChangeEvent<HTMLInputElement>) => onTextChange(event)}
            text={'text'}
            value={text}
        />
    ); 
}

export default TextInput;

