import React, {useState} from 'react';
import {UCRating} from "./UCRaiting";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Uncontroled Raiting stories',
    component: UCRating,
};
let callback = action("Rating change")
export const EmptyUCRaiting = () => <UCRating defaultValue={0} onChange={callback}/>;
export const Raiting1 = () => <UCRating defaultValue={1} onChange={callback}/>;
export const Raiting2 = () => <UCRating defaultValue={2} onChange={callback}/>;
export const Raiting3 = () => <UCRating defaultValue={3} onChange={callback}/>;
export const Raiting4 = () => <UCRating defaultValue={4} onChange={callback}/>;
export const Raiting5 = () => <UCRating defaultValue={5} onChange={callback}/>;
