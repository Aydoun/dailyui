import React from 'react';
import SpinnerSVG from 'res/spinner.svg';

export const Spinner: React.FC = () => {
    return (
        <div>
            <img alt="spinner" src={SpinnerSVG} />
        </div >
    )
}