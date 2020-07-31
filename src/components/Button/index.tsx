import React, { MouseEvent } from 'react';
import { Spinner } from 'components/Spinner';
import styled from 'styled-components';

interface ButtonProps {
    color?: string;
    text?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    loading?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
    background: ${props => props.color || 'white'};
    padding: 8px 10px;
    border: 1px solid #00000008;
    border-radius: 6px;
    box-shadow: 1px 2px 4px #00000008;
    color: ${props => props.color ? 'white' : 'black'};
    font-weight: 700;
    cursor: pointer;
    outline: none;
    width: 120px;
    height: 36px;
`;

export const Button: React.FC<ButtonProps> = ({ color, text, onClick, loading }) => {
    return <StyledButton color={color} onClick={onClick} loading={loading} >
        <span>{loading ? <Spinner /> : text}</span>
    </StyledButton>
}
