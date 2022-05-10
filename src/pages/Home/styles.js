import styled from 'styled-components'
import {LogOut, Activity} from 'styled-icons/feather'

export const IconLoading = styled(Activity)`
    width: 42px;
    height: 42px;
    color: #fff;
`;

export const LogoutIcon = styled(LogOut)`
    width: 30px;
    height: 30px;
    color: #fff;
`;
export const ButtonLogout = styled.button`
    color: #fff;
    font-weight: 700;
    font-size: 16px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-right: 40px;

    cursor: pointer;
    &:hover{
       opacity: 60%;
    }
`;

export const Container = styled.div`
    background-color: #1E1923;
    width: 100%;
    height: 100%;
`;

export const Header = styled.header`
    background-color: #322B38;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    margin-bottom: 32px;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-gap: 24px;

    justify-content: center;
    list-style: none;

`;  

export const Title = styled.h1`
    margin: 10px 20px 20px;
    font-size: 32px;
    color: #fff;
`;

export const ButtonAdd = styled.button`
    background-color: #ff0043;

    width: 56px;
    height: 56px;
    bottom: 42px;
    right: 64px;


    border-radius: 30px;

    justify-content: center;
    align-items: center;


    transition: filter 0.2s;
    outline: 0;
    cursor: pointer;

    &:hover{
        opacity: 60%;
    }

    position: fixed;
    z-index: 1000;
`;