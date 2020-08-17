import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion1} from "./Accordion";


export default {
    title: 'Accardion stories',
    component: Accordion1,
};

let callback = action("accordion mode change event fired")
let ABonClick = action("someItem was clicked")

export const Accordion1Collapsed = () =>
    <Accordion1
        accordionTitle={"Users"}
        collapsed={true}
        onClick={callback}
        items={[{title: 'Dimych', value: 1}, {title: 'Yury', value: 2}, {title: 'Kate', value: 3}]}
        ABonClick={ABonClick}
    />;
export const Accordion1UnCollapsed = () =>
    <Accordion1
        accordionTitle={"Users"}
        collapsed={false}
        onClick={callback}
        items={[{title: 'Dimych', value: 1}, {title: 'Yury', value: 2}, {title: 'Kate', value: 3}]}
        ABonClick={ABonClick}
    />;

export const ActionClickTitle = () => {
    const [modeAcc, setModeAcc] = useState<boolean>(true);
    return <Accordion1
        accordionTitle={"Users"}
        collapsed={modeAcc}
        onClick={() => setModeAcc(!modeAcc)}
        items={[{title: 'Dimych', value: 1}, {title: 'Yury', value: 2}, {title: 'Kate', value: 3}]}
        ABonClick={(id) => {
            alert(`users with ID: ${id} should be happy`)
        }}

    />;
}

