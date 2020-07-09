import React, {useState} from "react";

type AccordionPropsType = {
    accordionTitle: string
}

function UncotrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setUA] = useState(true);
    console.log('Accordion rendered')
    return (
        <div>
            <AccordionTitle mainTitle={props.accordionTitle} onClick={ ()=>{setUA(!collapsed) } }/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    mainTitle: string
    onClick: ()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')
    return <h3 onClick={ ()=>{ props.onClick() } }>{props.mainTitle}</h3>
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