import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion1} from "./Accordion";


export default {
    title: 'Accardion stories',
    component: Accordion1,
};

let callback = action("accordion mode change event fired")

export const Accordion1Collapsed = () =>
    <Accordion1
        accordionTitle={"StoryACC"}
        collapsed={true}
        onClick={callback}

    />;
export const Accordion1UnCollapsed = () =>
    <Accordion1
        accordionTitle={"StoryACC"}
        collapsed={false}
        onClick={callback}

    />;

export const ActionClickTitle = () => {
    const [modeAcc, setModeAcc] = useState<boolean>(true);
    return    <Accordion1
        accordionTitle={"StoryACC"}
        collapsed={modeAcc}
        onClick={()=>setModeAcc(!modeAcc)}

    />;
}

