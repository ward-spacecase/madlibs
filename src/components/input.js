import React from 'react';

const Input = ({title, state, name}, onChange) => {
        return(
            <div className="input" key={name}>
                <input value={state} onChange={onChange} name={name}/>
                <label>{title}</label>
            </div>
        )
};

export default Input;