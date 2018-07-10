import React from 'react';

const Input = ({title, state, name}, onChange, index) => {
        return(
            <div className="input" key={name}>
                <label className="input-number">{index + 1}</label>
                <input value={state} onChange={onChange} name={name}/>
                <label className="input-title">{title}</label>
            </div>
        )
};

export default Input;