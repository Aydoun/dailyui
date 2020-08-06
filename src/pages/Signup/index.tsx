import React from 'react';
import styled from 'styled-components/macro';
import { Input } from 'components/Input';
import { CenteredContainer } from 'components/shared';

const SignupContainer = styled.div`
    background: white;
    margin-top: 20px;
    padding: 20px 50px;
    border: 1px solid #bbbbbb;
    border-radius: 6px;
    width: 400px;
`;

const InputContainer = styled.div`
    margin: 20px 0;
`;

const FormTitle = styled.h3`
    text-align: center;
`;

export const Signup = () => {
    return (
        <CenteredContainer>
            <SignupContainer>
                <FormTitle>Register</FormTitle>
                <InputContainer>
                    <Input type="email" />
                </InputContainer>
                <InputContainer>
                    <Input type="password" />
                </InputContainer>
                <InputContainer>
                    <Input type="password" />
                </InputContainer>
            </SignupContainer>
        </CenteredContainer>
    );
}