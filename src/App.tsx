import React from 'react';
import './App.css';
import Accordion from "./components/Accardion/Accordion";
import {Rating} from "./components/Raiting/Raiting";
import {OnOff} from "./components/OnOff/OnOff";
import UncotrolledAccordion from "./components/UncontrolledAccardion/UCAccordion";
import {UCRating} from "./components/UncotrolledRaiting/UCRaiting";

//function declaration

// function sum (a: number, b: number) {
//
//     alert(a + b);
// }
// sum (23,12);


const App = (props:any) => {
    console.log('App rendering')
    //  что-то полезное
    // ф-я обязана вернуть JSX
    return (
        <div>
            <Accordion accordionTitle={'AccordionTitleOne'} collapsed={true}/>
            <Accordion accordionTitle={'AccordionTitleTwo'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff />
            <OnOff />
            <UncotrolledAccordion accordionTitle={'UncotrolledAccaordionOne'} />
            <UncotrolledAccordion accordionTitle={'UncotrolledAccaordionTwo'} />
            <UCRating />
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
