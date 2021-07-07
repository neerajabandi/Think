import React from 'react';

export const RadioButton = ({ options, header, name, onChange, selected }) => {
    return (
        <div className="radio-btn-group">
            <div className="label">{header}</div>
            <div className="radio-group">
                {
                    options.map((e, i) => <ButtonOptions key={i} selected={selected} value={e.value} label={e.label} name={name} onChange={onChange} />)
                }
            </div>

        </div>
    )
}

const ButtonOptions = ({ value, label, name, onChange, selected }) => {
    return (
        <div className="radioBtn">
            <input type="radio" className="radioInput" checked={selected === value ? 'checked' : null} name={name} onChange={onChange} value={value} /><span className="btn-label">{label}</span>
        </div>
    )
}