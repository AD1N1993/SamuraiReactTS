import React, {useState} from "react";


type PropsType = {
    mode: boolean
    onClick: (mode: boolean)=> void
 }



export function OnOff(props: PropsType) {
     const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid #000000",
        display: "inline-block",
        padding: "2px",
        backgroundColor: !props.mode ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid #00 0000",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.mode ? "red" : "white"
    };
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        border: "1px solid #000000",
        display: "inline-block",
        marginLeft: "15px",
        backgroundColor: !props.mode ? "green" : "red"
    };
    return (
        <div>
            <div style={onStyle} onClick={()=> {props.onClick(false)}}>On</div>
            <div style={offStyle} onClick={()=>{props.onClick(true)} }>Off</div>
            <div style={indicatorStyle}> </div>
        </div>
    );
}