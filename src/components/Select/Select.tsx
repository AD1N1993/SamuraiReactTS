import React, {useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.scss"


type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

type ItemType = {
    id: number
    title: string
    value: any
}


export function Select(props: SelectPropsType) {
    console.log('select')
    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    const selectedItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);

    useEffect(() => {
        setHoveredElementValue(props.value);
    }, [props.value]);

    const toogleItems = () => {
        setActive(!active);
    }
    const onItemClick = (value: any) => {
        props.onChange(value);
        toogleItems();
    }

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(!active);
        }

    }

    return (
        <div className={s.selectWrapper} tabIndex={0} onKeyDown={onKeyDown}>
            <span className={s.select} onClick={toogleItems}>
                {selectedItem && selectedItem.title}
            </span>
            {

                active &&
				<ul className={`${s.list} ${active ? s.active : ""}`}>
                    {
                        props.items.map(i =>
                            <li key={i.value}
                                onMouseEnter={() => {
                                    setHoveredElementValue(i.value)
                                }}
                                className={`${s.item} ${hoveredItem === i ? s.selectedItem : ""}`}
                                onClick={() => {
                                    onItemClick(i.value)
                                }}>
                                {i.title}
                            </li>)
                    }
				</ul>
            }
        </div>
    );
}