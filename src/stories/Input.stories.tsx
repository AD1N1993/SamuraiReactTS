import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';


export default {
    title: 'input',

};

export const UncontrolledInput = () => <input type="text"/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue);
    }
    return <> <input value={value} onChange={onChange}/> - {value} </>
}
export const GetValueByButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value);
    }
    return <> <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actualValue:{value} </>
}

export const ControledInput = () => {
    const [parentValue, setValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    };

    return <input type="text" value={parentValue} onChange={onChange}/>
}
export const ControledCheckbox = () => {
    const [parentValue, setValue] = useState(true);
    debugger
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    };

    return <input type="checkbox" checked={parentValue} onChange={onChange}/>


}
export const ControledSelect = () => {
    const [parentValue, setValue] = useState<string | undefined>("2");
    debugger
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    };

    return <select value={parentValue} onChange={onChange}>
        <option value="1">Moscow</option>
        <option value="2">Minsk</option>
        <option value="3">Kiev</option>
    </select>


}

export const ControlledInputWithFixedValue = () => <input type="text" value={"ITK"}/>;

