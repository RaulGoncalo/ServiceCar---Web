import React, { useState, useContext } from 'react';
import {
    Container,
    Overlap,
    InfoArea,
    Title,
    TextInfo,
    Form,
    ButtonLogin,
    AreaButton,
    ButtonBack,
    BackIcon,
    ButtonForgetPassword
} from './styles';

import { Input } from '../../components/Input';
import { Loader } from '../../components/Loader';
import SvgLogin from '../../assets/svgLogin.svg';
import {cnpjMask, validatePassword } from '../../functions';
import { useNavigate } from 'react-router-dom';
import Api from '../../Api.js';
import { AuthContext } from '../../contexts/auth';

export function Logon() {
    const navigate = useNavigate();

    const {login } = useContext(AuthContext);
    const [cnpj, setCNPJ] = useState('');
    const [password, setPassword] = useState('');

    const [cnpjError, setCNPJError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    
    const [loading, setLoading] = useState(false)


    const handleLogin = async (e) => {
        setLoading(true)
        e.preventDefault();

        if(cnpj != "" && cnpj != null && password != "" && password != null){
                 if(validatePassword(password)){
                     
                     let res = await Api.login(cnpj, password)

                     if(res.status == 200){
                        setLoading(false)
                        login(res.data)
                     }else{
                        setLoading(false)
                        alert("Erro: CNPJ ou senha invalidos");
                     }
                 }else{
                     setPasswordError("Lembre! A senha deve ter 8 digitos contendo: uma letra maiuscula, uma minuscula, um numero e um caracter especial ")
                 }
        }else{
            if(cnpj == "" || cnpj == null)
                setCNPJError("Digite seu e-mail")
            if(password == "" || cnpj == null)
                 setPasswordError("Digite sua senha")
        }
     }

    return (
        <Container>
            <Overlap>
                <InfoArea>

                    <Title>Login</Title>

                    <TextInfo>Faça seu login e entre na plataforma para criar e anunciar seus serviços!</TextInfo>

                    <img
                        src={SvgLogin}
                        alt="SvgLogin"
                        width="200"
                        height="160"
                    />

                    <ButtonBack onClick={()=> {navigate('/')}}>
                        <BackIcon/>
                        Voltar
                    </ButtonBack>

                </InfoArea>

                {
                    loading ?
                    <Loader/>
                    :
                    <Form onSubmit={handleLogin}>
                        <Input
                            placeholder="CNPJ"
                            value={cnpj}
                            onChange={e => {
                                setCNPJ(cnpjMask(e.target.value))
                                setCNPJError(null)
                            }}
                            errorMessage={cnpjError}
                            maxLength = {"18"}
                            type={"numer"}
                        />

                        <Input
                            placeholder="Senha"
                            type={"password"}
                            value={password}
                            onChange={e => {
                                setPassword(e.target.value)
                                setPasswordError(null)
                            }}
                            maxLength={"8"}
                            errorMessage={passwordError}
                        />

                        <AreaButton>
                            <ButtonLogin className="button" type="submit">Entrar</ButtonLogin>
                        </AreaButton>

                        <ButtonForgetPassword onClick={()=> {navigate('/resetPassword')}}>
                            Esqueceu a senha?
                        </ButtonForgetPassword>

                    
                    </Form>
                }

            </Overlap>

        </Container>
    );
}