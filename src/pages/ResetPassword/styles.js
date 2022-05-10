import styled from 'styled-components';
import { ArrowLeft} from '@styled-icons/feather';

export const Container = styled.div`
    background-color: #1E1923;
    flex-direction: column;
    
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Overlap = styled.div`
    width: 100%;
    max-width: 800px;
    padding: 40px;

    background: #322B38;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const InfoArea = styled.div`
    width: 100%;
    max-width: 380px;
`;

export const Title = styled.h1`
    margin: 8px 0 20px;
    font-size: 32px;
    color: #fff;
`;


export const TextInfo = styled.p`
    font-size: 18px;
    color: #fff;
    line-height: 32px;
    margin: 8px 0 20px;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 300px;
    padding: 40px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

`;

export const ButtonLogin = styled.button`
    width: 100%;
    max-width: 300px;
    height: 60px;
    background: #ff0043;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;

    margin-top: 20px;

    cursor: pointer;
    font: 400 18px Roboto, sans-serif;

    &:hover{
        filter: brightness(70%);
    }
`;

export const AreaButton = styled.div`
    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;
`;

export const InputSelect = styled.select`
    
    width: 100%;
    max-width: 300px;
    height: 64px;
    color: #fff;

    border: none;   
    border: 2px solid #fff;
    border-radius: 4px;

    background-color: #322B38;
    
    padding: 0 20px;

    margin-top: 8px;
    
    font: 400 14px Roboto, sans-serif;

    outline: none;
`;
export const Option = styled.option`

    color: #fff;
    font: 400 14px Roboto, sans-serif;
`;

export const ButtonBack = styled.button`
    color: #fff;
    font-weight: 700;
    font-size: 16px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    width: 20%;
    

    margin-top: 40px;

    cursor: pointer;
    &:hover{
       opacity: 60%;
    }
`;

export const ButtonForgetPassword = styled.button`
    color: #fff;
    font-weight: 700;
    font-size: 16px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    width: 100%;
    

    margin-top: 8px;

    cursor: pointer;
    &:hover{
       opacity: 60%;
    }
`;

export const BackIcon = styled(ArrowLeft)`
    width: 24px;
    height: 24px;
    color: #ff0043;
`;

