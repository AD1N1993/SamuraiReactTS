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

export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);
    console.log("SetTimeoutExample")

    useEffect(() => {
        setInterval(() => {
            console.log("tick: " + counter)
            setCounter((state)=>state+1)
        }, 3000)

    }, [])


    return <>
        Hello,
        {/*<button onClick={() => setFake(fake+1)}>fake+</button>*/}
        {fake}:fake
        {/*<button onClick={() => setCounter(counter+1)}>counter+</button>*/}
        {counter}:counter
    </>
}