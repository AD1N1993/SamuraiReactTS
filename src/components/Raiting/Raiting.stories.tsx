import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {RaitingValueType, Rating} from './Raiting'

export default {
    title: 'Raiting stories',
    component: Rating,
};

export const  EmptyRaiting = () => <Rating value ={0} onClick={x => x} />;
export const  Rating1 = () => <Rating value ={1} onClick={x => x} />;
export const  Rating2 = () => <Rating value ={2} onClick={x => x} />;
export const  Rating3 = () => <Rating value ={3} onClick={x => x} />;
export const  Rating4 = () => <Rating value ={4} onClick={x => x} />;
export const  Rating5 = () => <Rating value ={5} onClick={x => x} />;
// export const changeRating = () => {
//     const [rating,setRaiting] = useState<RaitingValueType>(0);
//     return<Rating value ={rating} onClick={setRaiting} />;
// }

