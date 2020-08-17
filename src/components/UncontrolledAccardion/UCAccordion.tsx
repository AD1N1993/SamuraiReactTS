import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionPropsType = {
    accordionTitle: string
}

function UncotrolledAccordion(props: AccordionPropsType) {


    let [state, dispatch] = useReducer(reducer,{collapsed: false});
    console.log('Accordion rendered')
    return (
        <div>

            <AccordionTitle mainTitle={props.accordionTitle} onClick={() => {
                dispatch({type: "TOGGLE-COLLAPSED"})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    mainTitle: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')
    return <h3 onClick={() => {
        props.onClick()
    }}>{props.mainTitle}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendered')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncotrolledAccordion;