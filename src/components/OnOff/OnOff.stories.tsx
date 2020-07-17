import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';

import {OnOff} from "./OnOff";


export default {
    title: 'OnOff stories',
    component: OnOff,
};

export const  EmptyOff = () => <OnOff mode={true} onClick={action('on or off click')}  />;
export const  EmptyOn = () => <OnOff mode={false} onClick={action('on or off click')}  />;
export const ModeChanging = () => {
    const [value,setValue] = useState<boolean>(true);
    return <OnOff mode={value} onClick={setValue}  />;
}

