import React, {useState} from "react";

type AccordionPropsType = {
    accordionTitle: string
}

function UncotrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setUA] = useState(true);
    console.log('Accordion rendered')
    return (
        <div>
            <button onClick={()=> {setUA(false)}}>Open</button>
            <button onClick={()=> {setUA(true)}}>Close</button>
            <AccordionTitle mainTitle={props.accordionTitle}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    mainTitle: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')
    return <h3>{props.mainTitle}</h3>
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