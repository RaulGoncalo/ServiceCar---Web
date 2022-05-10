import React from 'react';
import styled from 'styled-components';
import {} from '../styles/loader.css'

export function Loader () {
    return(
        <LoadingIcon>
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <TextInfo>Carregando</TextInfo>
        </LoadingIcon>
    )
}

const LoadingIcon = styled.div`
    width: 100%;
    height: 100%;

    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextInfo = styled.p`
    font-size: 18px;
    color: #fff;
    line-height: 32px;
    margin: 8px 0 20px;
`;