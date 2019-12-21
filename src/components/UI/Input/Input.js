import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid) {
        inputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.change} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.change} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}>
                    onChange={props.change}
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}> onChange={props.change}
                            {option.displayValue}
                        </option>
                    ))}

                </select>
            );
            break;
        default: 
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
    
};

export default input;