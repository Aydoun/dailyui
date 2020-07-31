import React from 'react';
import { Button } from './';

export default { title: 'Button' };

export const blueButton = () => (
    <Button
        color="#71aaff"
        text="Hello Button"
        onClick={() => console.log('Button Clicked')} />
)

export const loadingButton = () => (
    <Button
        text="Loading Button"
        loading
        color="#71aaff"
        onClick={() => console.log('Button Clicked')} />
)