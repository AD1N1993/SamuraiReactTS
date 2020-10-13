import React, {useEffect, useState} from "react";
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";

export const Clock = (props: ClockTypeProps) => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {

        let timerID = setInterval(() => setDate(new Date()), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    }, []);

    let view;
    switch (props.mode) {
        case "analog":
            view = <AnalogClock date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClock date={date}/>

    }

    return (
        <>
            {view}
        </>
    );
}

type ClockTypeProps = {
    mode: "analog" | "digital"
}
export type ClockViewTypeProps = {
    date: Date
}