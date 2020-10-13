import React, {useCallback, useEffect, useMemo, useState} from "react";

export default {
    title: 'Use Effect demo'
}


export const SimpleExample = () => {

    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);
    console.log("SimpleExample")

    useEffect(() => {
        console.log("UseEffect every render")
        document.title = counter.toString();

    })

    useEffect(() => {
        console.log("UseEffect onl first render (ComponentDidMount)")
        document.title = counter.toString();

    }, [])

    useEffect(() => {
        console.log("UseEffect when counter change")
        document.title = counter.toString();

    }, [counter])


    return <>
        Hello,
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        {fake}
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        {counter}
    </>
}

export const SetIntervalExample = () => {

    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);
    console.log("SetTimeoutExample")

    useEffect(() => {
       const intervalId = setInterval(() => {
            console.log("tick: " + counter)
            setCounter((state)=>state+1)
        }, 3000)
        return ()=>{
           clearInterval(intervalId);
        }

    }, [])


    return <>
        Hello,
        {/*<button onClick={() => setFake(fake+1)}>fake+</button>*/}
        {fake}:fake
        {/*<button onClick={() => setCounter(counter+1)}>counter+</button>*/}
        {counter}:counter
    </>
}


export const RessetEffectExample = () => {

    const [counter, setCounter] = useState(1);
    console.log("Component rendered")

    useEffect(() => {
        console.log("Effect occurred " + counter)

        return ()=>{
            console.log("Reset effect " + counter)
        }
    }, [counter])

const increase = ()=>{setCounter(counter+1)};
    return <>
        Hello, counter: {counter} <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState("");
    console.log("Component rendered with " + text)

    useEffect(() => {
        console.log("Effect occurred " + text)
        const handler = (e:KeyboardEvent)=>{
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener("keypress",handler);
        return ()=>{
            window.removeEventListener("keypress",handler)
        }
    }, [text])

    const increase = ()=>{setText(text+1)};
    return <>
       Typed text: {text}
    </>
}

export const SetTimeoutExample2 = () => {

    const [text, setText] = useState("");
    console.log("Component rendered with " + text)

    useEffect(() => {
        console.log("Effect occurred " + text)
       setTimeout(()=>{
           console.log("settimeout worked")},2000)
        return ()=>{
        }
    }, [text])

    const increase = ()=>{setText(text+1)};
    return <>
        Typed text: {text}
    </>
}