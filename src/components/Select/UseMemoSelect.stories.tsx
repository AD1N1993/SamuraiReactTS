import React, {useMemo, useState} from "react";
import {Select} from "./Select";

export default {
    title: 'Select stories',
};
const SaveSelect = React.memo(Select);

export const SelectUseMemo = () => {
    console.log('SelectUseMemo')
    const [value, setValue] = useState(null);
    const [counter, setCounter] = useState<number>(0);
    const items = useMemo(() => {
        return [
            {id: 1, value: "1", title: "Minsk"},
            {id: 2, value: "2", title: "Moscow"},
            {id: 3, value: "3", title: "Kiev"},
        ]
    }, [])

    return (
        <>
            <SaveSelect onChange={setValue} items={items}  value={value}/>
            <button onClick={()=>{setCounter(counter+1)}}>+</button>{counter}
        </>
    )
}