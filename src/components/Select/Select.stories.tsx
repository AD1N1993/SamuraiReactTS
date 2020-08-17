import React, {useState} from 'react';


import {Select} from "./Select";


export default {
    title: 'Select stories',
    component: Select,
};


export const WhithValue = () => {

    const [value, setValue] = useState("2");

    const selectedValue = (value: string) => {
        setValue(value);
    }
    return (
        <>
            <Select value={value}
                    onChange={selectedValue}
                    items={
                        [
                            {id: 1, value: "1", title: "Minsk"},
                            {id: 2, value: "2", title: "Moscow"},
                            {id: 3, value: "3", title: "Kiev"},
                        ]
                    }/>

        </>
    )
}
export const WhithoutValue = () => {
    const [value, setValue] = useState(null);
    return (
        <>
            <Select
                value={value}
                onChange={setValue}
                items={
                    [
                        {id: 1, value: "1", title: "Minsk"},
                        {id: 2, value: "2", title: "Moscow"},
                        {id: 3, value: "3", title: "Kiev"},
                    ]
                }/>

        </>
    )
}