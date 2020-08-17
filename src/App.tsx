import React, {useState} from 'react';
import './App.css';

import {RaitingValueType, Rating} from "./components/Raiting/Raiting";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import UncotrolledAccordion from "./components/UncontrolledAccardion/UCAccordion";
import {UCRating} from "./components/UncotrolledRaiting/UCRaiting";
import {Accordion1} from "./components/Accardion/Accordion";
import {Select} from "./components/Select/Select";

const App = (props: any) => {

    let [raitingValue, setRaiting] = useState<RaitingValueType>(0)
    let [accordion, setAccordion] = useState<boolean>(true);
    let [on, setOn] = useState<boolean>(false);
    const [value, setValue] = useState(null);
    return (
        <div className={"wrapper"}>
            <UnControlledOnOff onChange={setOn}/> {on.toString()}
            <UncotrolledAccordion accordionTitle={'UncotrolledAccordionOne'}/>
            <UCRating onChange={alert}/>
            <div>____________________________</div>
            <Rating
                value={raitingValue}
                onClick={setRaiting}
            />
            <Accordion1
                accordionTitle={"Controlled Accordion"}
                collapsed={accordion}
                onClick={() => {
                    setAccordion(!accordion)
                }}
                items={[{title: 'Dimych', value: 1}, {title: 'Yury', value: 2}, {title: 'Kate', value: 3}]}
                ABonClick={ABonClick}
            />

             <Select
                value={value}
                onChange={setValue}
                items={
                [
                    {id: 1, value: "1", title: "Minsk"},
                    {id: 2, value: "2", title: "Moscow"},
                    {id: 3, value: "3", title: "Kiev"},
                ]
            }/>

            {/*<OnOff*/}
            {/*    mode={on}*/}
            {/*    onClick ={setOn}/>*/}

            <UncotrolledAccordion accordionTitle={"--BlaBla--"}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendered')
    return <h1>{props.title}</h1>
}

let ABonClick = () => {
    alert("someItem was clicked")
};

const selectValue = (id: number) => {
    alert(`Happy age to ID:${id}`)
}

export default App;
