import React from 'react';

const Input = (name, state, onChange, name) => {
        return(
            <div className="input">
                <input value={state} onChange={onChange} name={name}/>
                <label>{name}</label>
            </div>
        )
};

export default Input;