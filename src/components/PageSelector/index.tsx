import React from 'react';
import { useHistory } from 'react-router-dom';

export const PageSelector: React.FC = () => {
    const history = useHistory();
    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        history.push(e.target.value)
    };

    return (
        <select onChange={onSelectChange}>
            <option value="/">Home</option>
            <option value="/signup">Signup</option>
        </select>
    )
} 
