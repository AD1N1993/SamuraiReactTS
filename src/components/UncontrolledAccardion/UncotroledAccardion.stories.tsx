import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import UncotrolledAccordion from "./UCAccordion";


export default {
    title: 'Uncotrolled Accardion stories',
    component: UncotrolledAccordion,
};

let callback = action("accordion mode change event fired")

export const AccardionCollapsedMode = () =>  <UncotrolledAccordion accordionTitle={"Collapsed Accardion"}/>;


