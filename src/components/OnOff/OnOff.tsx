import React from "react";

type OnOffType= {
    mode: boolean
}

export function OnnOff(props:OnOffType) {
    return(
        <div>
            <div className="on">ON</div>
            <div className="off">OFF</div>
            <button className="btn"></button>
        </div>
    );
}