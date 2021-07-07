import React, { Component } from 'react';

export default class DropDown extends Component {

    renderOptions = (e, i) => {
        return (
            <option key={i} value={e.value}>{e.label}</option>
        )
    }

    render() {
        const { options, label, helperText,selected } = this.props;
        return (
            <div className="dropdown-container">
                <div>
                    {label}
                </div>
                <select className="dropdown" defaultValue={selected} onChange={this.props.onChange}>
                    {options.map((e, i) => this.renderOptions(e, i))}
                </select>
                {helperText ? <div className="helperText">{helperText}</div> : null}
            </div>
        )
    }
}