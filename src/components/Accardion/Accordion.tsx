import React from "react";



type AccordionPropsType = {
    accordionTitle: string
    collapsed: boolean
    onClick: ()=> void
 }

export function Accordion1(props: AccordionPropsType) {
    console.log('Accordion rendered')
    return (
        <div>
            <AccordionTitle
                mainTitle={props.accordionTitle}
                onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    mainTitle: string
    onClick: ()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')
    return <h3 onClick={(e)=>props.onClick()}>{props.mainTitle}</h3>
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

