import React, {useState} from "react";

type PropsType = {
    onChange: (on:boolean)=> void
    defaultOn?: boolean
 }



export function UnControlledOnOff(props: PropsType) {
    const onClicked = ()=>{
        setOn(true)
        props.onChange(true)
    }
    const offClicked = ()=>{
        setOn(false)
        props.onChange(false)
    }


    console.log("OnOff rendering")

    let [on, setOn] = useState(props.defaultOn?  props.defaultOn: false); //hook with initial value

    console.log("on: " + on)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid #000000",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid #00 0000",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: !on ? "red" : "white"
    };
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        border: "1px solid #000000",
        display: "inline-block",
        marginLeft: "15px",
        backgroundColor: on ? "green" : "red"
    };

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}> </div>
        </div>
    );
}