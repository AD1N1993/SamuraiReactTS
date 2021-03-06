import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'Use Memo'
}

export const DificultCountingExample = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++;
                const fakeResult = Math.random()
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={event => setA(+event.currentTarget.value)}/>
        <input value={b} onChange={event => setB(+event.currentTarget.value)}/>
        <hr/>
        <div>
            Result for A: {resultA}
        </div>
        <div>
            Result for B: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("usersSecret")
    return <div>
        {
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }
    </div>
}

const Users = React.memo(UsersSecret);


export const HelpsMemo = () => {
    console.log("HelpsToReactMemo");
    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState<Array<string>>(["Dimych", "Yury", "Valery"]);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1);
    }, [users])
    const addUser = () => {
        const newUser = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUser);
    }
    return (
        <>  <Users users={newArray}/>
            <button onClick={addUser}>add</button>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            {counter}

        </>
    )
}


export const LikeUseCallback = () => {
    console.log("LikeUseCallback");
    const [counter, setCounter] = useState<number>(0);
    const [books, setBooks] = useState<Array<string>>(["HTML", "CSS", "JS"]);


    const memozideAddBook = useMemo(() => {
        return () => {
            console.log(books);
            const newUser = [...books, 'Angular' + new Date().getTime()]
            setBooks(newUser);
        }
    }, [books]);
    const memozideAddBook2 = useCallback(() => {
        console.log(books);
        const newUser = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUser);
    }, [books]);

    return (
        <>  <Book addBook={memozideAddBook2}/>

            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            {counter}

        </>
    )
}

type BookSecretTypeProps = {
    addBook: () => void
}
const BooksSecret = (props: BookSecretTypeProps) => {
    console.log("BooksSecret")
    return <div>
        <button onClick={props.addBook}>add</button>

    </div>
}

const Book = React.memo(BooksSecret);