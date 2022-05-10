import styled from 'styled-components';

export const Container = styled.div`
    background-color: #1E1923;
    
    display: flex;

    width: 100%;
    height: 100%;
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 100%;

`;


export const Title = styled.p`
    max-width: 400px;
    margin-top: 50px;

    font-size: 72px;
    color: #fff;
    font-weight: 700;

`;

export const ContainerWelcome = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 80px;
    
    align-items: flex-start;
    justify-content: center;
    
    background-color: #221f29;

    display: flex;
    flex-direction: column;

    border-radius: 8px 0px 0px 8px;
`;
export const TitleWelcome = styled.p`
    max-width: min(400px, 50%);
    
    font-size: 32px;
    color: #fff;
    font-weight: 700;

    margin-top: 120px;
    margin-bottom: 32px;
`;

export const SubTitle = styled.p`
    max-width: min(400px, 50%);
    
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    margin-bottom: 24px;
`;

export const ButtomLogon = styled.button`
    width: min(400px, 50%);
    height: 60px;
    display: flex;

    background-color: #fff;

    justify-content: center;
    align-items: center;

    margin-bottom: 20px;
    border-radius: 8px;

    transition: filter 0.2s;
    outline: 0;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
`;
export const ButtomRegister = styled.button`
    width: min(400px, 50%);
    height: 60px;
    display: flex;

    background-color: #ff0043;

    justify-content: center;
    align-items: center;

    margin-bottom: 20px;

    border-radius: 8px;

    transition: filter 0.2s;
    outline: 0;
    cursor: pointer;

    &:hover{
        opacity: 0.6;
    }
`;

export const TextButtomLogon = styled.p`
    max-width: 100%;
    
    font-size: 18px;
    color: #000;
    font-weight: 700;

    margin-right: 16px;
`;
export const TextButtomRegister = styled.p`
    max-width: 100%;

    font-size: 18px;
    color: #FFF;
    font-weight: 700;

    margin-right: 16px;
`;
