import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';

import {UnControlledOnOff} from "./UnControlledOnOff";

let callback = action("accordion mode change event fired")
export default {
    title: 'UC OnOff stories',
    component: UnControlledOnOff,
};

export const  OffMode = () => <UnControlledOnOff  defaultOn={false}  onChange={callback} />;
export const  OnMode = () => <UnControlledOnOff  defaultOn={true} onChange={callback}/>;
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>


