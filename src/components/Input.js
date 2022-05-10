import React, {useState} from 'react';
import styled from 'styled-components';


export function Input({
    placeholder,
    value,
    onChange,
    maxLength,
    type,
    errorMessage,
    mask,
    
}) {
    
    return(    
        <Container>
            <TextInput
                placeholder={placeholder}
                type = {type}
                maxLength = {maxLength}
                value = {value}
                onChange = {onChange}
                mask = {mask}
            />

            <TextErro>{errorMessage}</TextErro>
        </Container>  
    );
}

const Container = styled.div`
    width: 100%;
`;

const TextInput = styled.input`
    
    width: 100%;
    height: 60px;

    border: none;

    color: #fff;

    border-bottom: 1px solid #fff;
    border-radius: 4px;
    
    margin-top: 8px;
    
    
    font: 400 14px Roboto, sans-serif;
    outline: none;
    
    ::-webkit-input-placeholder {
        color: #fff;
    }
    
`;

const TextErro = styled.p`
    width: 100%;
    font-size: 12px;
    color: #ff0043;
    margin-left: 8px;
`;