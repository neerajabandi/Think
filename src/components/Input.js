import React from 'react';

export const Input =({type,onChange,value,label})=>{
    return(
        <div>
            <div className="label">{label}</div>
            <div>
                <input type={type} className="input" value={value} onChange={onChange} />
            </div>
        </div>
    )
}