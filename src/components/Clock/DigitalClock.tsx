import React from "react";
import {ClockViewTypeProps} from "./Clock";
import {get2digitalstring} from "./get2digitalstring";

export const DigitalClock: React.FC<ClockViewTypeProps> = (props) => {
    return <div>
        <span>hours:{get2digitalstring(props.date.getHours())}</span>
        <span>minute:{get2digitalstring(props.date.getMinutes())}</span>
        <span> seconds:{get2digitalstring(props.date.getSeconds())}</span>
    </div>
}