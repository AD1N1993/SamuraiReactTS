import React, {useState} from "react";
// import s from "./OnOff.module.css";
//
//
// type OnOffType = {
//     mode: boolean
// }
//
// export function OnnOff(props: OnOffType) {
//
//     if (props.mode) {
//         return (
//             <div className={s.wrapper}>
//                 <div className={`${s.on} ${s.green}`}>ON</div>
//                 <div className={s.off}>OFF</div>
//                 <button className={`${s.btn} ${s.green}`}></button>
//             </div>
//         )
//     } else {
//         return (
//             <div className={s.wrapper}>
//                 <div className={s.on}>ON</div>
//                 <div className={`${s.off} ${s.red}`}>OFF</div>
//                 <button className={`${s.btn} ${s.red}`}></button>
//             </div>
//         )
//     }
// }


type PropsType = {
//     on: boolean
 }



export function OnOff(props: PropsType) {


    console.log("OnOff rendering")

    let [on, setOn] = useState(false); //hook with initial value

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
            <div style={onStyle} onClick={ ()=> {setOn(true)} }>On</div>
            <div style={offStyle} onClick={ ()=>{setOn(false)} }>Off</div>
            <div style={indicatorStyle}> </div>
        </div>
    );
}