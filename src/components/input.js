import React from 'react';

const Input = ({title, state, name}, onChange, index) => {
        return(
            <div className="input" key={name}>
                <label className="input-number" htmlFor={name}>{index + 1}</label>
                <input value={state} onChange={onChange} name={name} id={name}/>
                <label className="input-title" htmlFor={name}>{title}</label>
            </div>
        )
};

export default Input;