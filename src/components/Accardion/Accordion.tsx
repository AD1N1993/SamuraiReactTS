import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    accordionTitle: string
    collapsed: boolean
    onClick: () => void
    items: ItemType[]
    ABonClick: (value: any) => void
}

export function Accordion1(props: AccordionPropsType) {
    console.log('Accordion rendered')
    return (
        <div>
            <AccordionTitle
                mainTitle={props.accordionTitle}
                onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.ABonClick}/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    mainTitle: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')
    return <h3 onClick={() => props.onClick()}>{props.mainTitle}</h3>
}

type AccordionBodyTypeProps = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyTypeProps) {
    console.log('AccordionBody rendered')
    return (
        <ul>
            {props.items.map((i, index) => <li
                onClick={() => {
                    props.onClick(i.value)
                }} key={index}>{i.title}</li>)}
        </ul>
    );
}

