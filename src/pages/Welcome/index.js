import React, {} from 'react';
import { 
    Container,
    ContainerTitle,
    Title,
    ContainerWelcome,
    TitleWelcome,
    SubTitle,
    ButtomLogon,
    ButtomRegister,
    TextButtomLogon,
    TextButtomRegister,
} from './styles';
import {LogIn} from '@styled-icons/feather';
import {UserPlus} from '@styled-icons/feather';
import imageCar from '../../assets/svgWelcome.svg';
import { useNavigate } from 'react-router-dom';

export function Welcome(){
    const navigate = useNavigate();

    return(
        <Container>
            <ContainerTitle>
                <Title>Service Car</Title>

                <img 
                    src = {imageCar} 
                    alt = "imageCar" 
                    width="400" 
                    height="360"
                />
            </ContainerTitle>

            <ContainerWelcome>            
                <TitleWelcome>Bem vindo</TitleWelcome>
                <SubTitle>Entre ou crie uma conta para divulgar seus serviços</SubTitle>

                <ButtomLogon onClick={() => navigate('/logon')}>
                    <TextButtomLogon>
                        Login
                    </TextButtomLogon>
                    <LogIn size = {22} color = "#000" strokeWidth= {2}/>
                </ButtomLogon>


                <ButtomRegister onClick={() => navigate('/register')}>
                    <TextButtomRegister >
                        Cadastra-se
                    </TextButtomRegister>
                    <UserPlus size = {22} color = "#fff" strokeWidth= {2}/>
                </ButtomRegister>
            </ContainerWelcome>
        </Container>
    );
}