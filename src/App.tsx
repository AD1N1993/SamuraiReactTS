import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accardion/Accordion";
import {RaitingValueType, Rating} from "./components/Raiting/Raiting";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import UncotrolledAccordion from "./components/UncontrolledAccardion/UCAccordion";
import {UCRating} from "./components/UncotrolledRaiting/UCRaiting";
import {OnOff} from "./components/OnOff/OnOff";
const App = (props: any) => {
    console.log('App rendering')

    let [raitingValue, setRaiting] = useState<RaitingValueType>(0)
    let [accordion, setAccordion] = useState<boolean>(true);
    let [on, setOn] = useState<boolean>(false);

    return (
        <div className={"wrapper"}>
            <UnControlledOnOff onChange={setOn}/>  {on.toString()}
            <UncotrolledAccordion accordionTitle={'UncotrolledAccordionOne'}/>
            <UCRating/>
            <div>____________________________</div>
            <Rating
                value={raitingValue}
                onClick={setRaiting}
            />
            <Accordion
                accordionTitle={"Controlled Accordion"}
                collapsed={accordion}
                onClick = {()=> {setAccordion(!accordion)} }/>
                
            {/*<OnOff*/}
            {/*    mode={on}*/}
            {/*    onClick ={setOn}/>*/}
            
           <UncotrolledAccordion accordionTitle={"--BlaBla--"}   />
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


export default App;
