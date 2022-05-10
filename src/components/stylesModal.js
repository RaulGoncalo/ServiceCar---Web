import styled from 'styled-components'

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left : 0;

    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background-color: #322B38;
    width: 450px;
    
    border-radius: 8px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    padding: 20px 60px 20px 60px;
`;

export const Title = styled.p`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
`;

export const Content = styled.div`
    width: 100%;
    flex-direction: column;

    margin: 20px 0px 20px;
`;

export const ButtonSalvar = styled.button`
    background-color: #ff0043;

    width: 100%;
    height: 46px;
    
    border-radius: 8px;

    justify-content: center;
    align-items: center;


    transition: filter 0.2s;
    outline: 0;
    cursor: pointer;

    &:hover{
        opacity: 60%;
    }

    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;

export const TextDesc = styled.textarea`
    width: 100%;
    height: 56px;
    border: none;

    color: #fff;

    border-bottom: 1px solid #fff;
    border-radius: 4px;
    
    margin-top: 8px;
    padding-top: 16px;
    
    font: 400 14px Roboto, sans-serif;
    outline: none;
    
    ::-webkit-input-placeholder {
        color: #fff;
    }

    resize: vertical;
`;

export const AreaOfficeHour = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px 32px;

    justify-content: center;
    list-style: none;
`;

export const InputSelect = styled.select`
    
    width: 100%;
    height: 64px;
    color: #fff;

    border: none;   
    border-bottom: 1px solid #fff;
    border-radius: 4px;

    background-color: #322B38;

    margin-top: 8px;
    
    font: 400 14px Roboto, sans-serif;

    outline: none;
`;


export const Option = styled.option`

    color: #fff;
    font: 400 14px Roboto, sans-serif;
`;

export const TextErro = styled.p`
    width: 100%;
    font-size: 12px;
    color: #ff0043;
    margin-left: 8px;
`;