import React, {useState} from 'react';
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
} from './styles';

import { Input } from '../../components/Input';
import { Loader } from '../../components/Loader';
import SvgResetPassword from '../../assets/svgResetPassword.svg';
import {cnpjMask, validateEmail, validatePassword} from '../../functions';
import { useNavigate } from 'react-router-dom';
import Api from '../../Api';

export function ResetPassword() {
    const navigate = useNavigate();

    const [cnpj, setCNPJ] = useState('');
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [cnpjError, setCNPJError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [codeError, setCodeError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');

    const [valid, setValid] = useState(false);

    const [validResetPassword, setValidResetPassword] = useState(false);
    const [loading, setLoading] = useState(false)

    const heandleRequestCode = async (e) =>{
        e.preventDefault();
        setLoading(true)

        if (cnpj !== "" && email !== "") {

            if(validateEmail(email)){
               const res = await Api.requestCode(cnpj, email)

               if(res.status == 200){
                    setValid(true)
                    setLoading(false)
               }else{
                   
                   alert("Problemas com seus dados verifique")
               }
            }else(
                setEmailError("E-mail inválido")
            )
        }else{
            if (cnpjError === "")
                setCNPJError("Preenche o campo a cima")
            
            if (emailError === "")
                setEmailError("Preenche o campo a cima")
        }

    }

    const hendleSendCode = async (e) =>{
        e.preventDefault();
        setLoading(true)

        if (code !== "") {

            const res = await Api.validateCode(code)

            if(res.status == 200){
                setValidResetPassword(true)
                setLoading(false)
            }else{
                
                alert("Problemas com seus dados verifique")
            }
        }else{
            setCodeError("Preenche o campo a cima")
        }
    }

    const heandleSendNewPassword = async (e) =>{
        e.preventDefault();
        setLoading(true)

        if (password !== "" && passwordConfirm !== "") {
            if(validatePassword(password) && password.length == 8){
                if(password === passwordConfirm){
                    
                    const res = await Api.resetPassword(cnpj, password)
                    
                    console.log(res)
                    if(res.status == 201){
                        alert("Senha alterada com sucesso")
                        navigate('/logon')
                    }else{
                        alert("Erro ao salvar")
                        navigate('/logon')
                    }
                }else{
                    setPasswordConfirmError("Senhas diferentes")
                }
            }else{
                setPasswordError("A senha deve conter pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial")
            }
        }else{
            if (passwordError === "")
                setPasswordError("Preenche o campo a cima")
            if (passwordConfirmError === "")
                setPasswordConfirmError("Preenche o campo a cima")
        }
    }

    return (
        <Container>
            <Overlap>
                <InfoArea>

                    <Title>Recuperar senha</Title>

                    {
                        !validResetPassword?
                            !valid ?
                            <TextInfo>Insira o CNPJ e E-mail da empresa para recuperar a senha</TextInfo>
                            :
                            <TextInfo>Insira o código enviado no seu email</TextInfo>
                        :
                        <TextInfo>Crie sua nova senha e a confirme</TextInfo>
                    }

                    <img
                        src={SvgResetPassword}
                        alt="SvgResetPassword"
                        width="200"
                        height="160"
                    />

                    <ButtonBack onClick={()=> {navigate('/logon')}}>
                        <BackIcon/>
                        Voltar
                    </ButtonBack>

                </InfoArea>

            {
                !loading?
                    !validResetPassword?
                        !valid?
                            <Form onSubmit={heandleRequestCode}>
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
                                    placeholder="E-mail"
                                    value={email}
                                    type={"email"}
                                    onChange={e => {
                                        setEmail(e.target.value)
                                        setEmailError(null)
                                    }}
                                    maxLength={"100"}
                                    errorMessage={emailError}
                                />

                            
                                <AreaButton>
                                    <ButtonLogin className="button" type="submit">Enviar</ButtonLogin>
                                </AreaButton>
                            
                            </Form>
                        :
                            <Form onSubmit={hendleSendCode}>
                                <Input
                                    placeholder="Código"
                                    value={code}
                                    onChange={e => {
                                        setCode(e.target.value)
                                        setCodeError(null)
                                    }}
                                    errorMessage={codeError}
                                    maxLength = {"6"}
                                    type={"numer"}
                                />

                                <AreaButton>
                                    <ButtonLogin className="button" type="submit">Enviar</ButtonLogin>
                                </AreaButton>
                            
                            </Form>
                    :
                        <Form onSubmit={heandleSendNewPassword}>
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
                            <Input
                                placeholder="Confirmar senha"
                                type={"password"}
                                value={passwordConfirm}
                                onChange={e => {
                                    setPasswordConfirm(e.target.value)
                                    setPasswordConfirmError(null)
                                }}
                                maxLength={"8"}
                                errorMessage={passwordConfirmError}
                            />

                            <AreaButton>
                                <ButtonLogin className="button" type="submit">Salvar</ButtonLogin>
                            </AreaButton>
                        
                        </Form>
                :
                <Loader/>
            }
            
            </Overlap>

        </Container>
    );
}
