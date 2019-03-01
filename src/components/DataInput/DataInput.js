import React, { Component } from 'react';
import classes from './DataInput.css'


class DataInput extends Component  {
    constructor(props) {
        super(props);

        this.btnClass = classes.Show_button;
    }


    render () {
        if ( this.props.data.length < 1) {
            this.btnClass = [classes.Show_button, classes.Disable].join(' ');
        } else {
            this.btnClass = classes.Show_button;
        }

        return (
        <div className={classes.DataInput}>
            <label className={classes.Label} htmlFor={this.props.id}>
                {this.props.label}
                <input
                    className={classes.Input}
                    id={this.props.id}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.data}
                    placeholder={this.props.placeholder}
                />
            </label>

            <button
                className={this.btnClass}
                onClick={this.props.btnClicked}
            >
                {this.props.btnText}
            </button>
        </div>
        )
    }
}



export default DataInput;