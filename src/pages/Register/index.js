import React, { useState } from 'react';
import {
    Container,
    Overlap,
    InfoArea,
    Title,
    TextInfo,
    Form,
    BackIcon,
    ButtonRegister,
    AreaButton,
    InputSelect,
    Option,
    ButtonBack,
} from './styles';

import { Input } from '../../components/Input';
import { Loader } from '../../components/Loader';
import SvgRegister from '../../assets/svgRegister.svg';
import { phoneMask, validateEmail, validatePassword, cnpjMask } from '../../functions';
import Api from '../../Api.js';
import { useNavigate } from 'react-router-dom';

export function Register() {
    const navigate = useNavigate();


    const [name, setName] = useState('');
    const [cnpj, setCNPJ] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [street, setStreet] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');


    const [nameError, setNameError] = useState('');
    const [cnpjError, setCNPJError] = useState('');
    const [specialtyError, setSpecialtyError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [cityError, setCityError] = useState('');
    const [districtError, setDistrictError] = useState('');
    const [streetError, setStreetError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');


    const [loading, setLoading] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault();
        const data = {
            name,
            cnpj,
            specialty,
            phone,
            email,
            city,
            district,
            street,
            password,
            passwordConfirm,
        };

        if (
            data.name !== "" &&
            data.cnpj !== "" &&
            data.specialty !== "" &&
            data.phone !== "" &&
            data.email !== "" &&
            data.city !== "" &&
            data.district !== "" &&
            data.street !== "" &&
            data.password !== "" &&
            data.passwordConfirm !== ""
        ) {
            if(validateEmail(data.email)){
                if(validatePassword(data.password) && data.password.length === 8){
                    if(data.password === data.passwordConfirm){
                        const res = await Api.register(data)
                        
                        if(res.status === 201){
                            alert("Empresa criada. Faça seu login")
                            navigate('/logon')
                        }else if (res.status === 400){
                            alert("CNPJ, E-mail ou senha invalidos")
                        }else if(res.status === 204){
                            alert("CNPJ já cadastrado")
                        }else{
                            alert("Erro ao cadastrar")
                            navigate('/')
                        }
                    }else{
                        setPasswordConfirmError("Senhas diferentes")
                    }
                }else{
                    setPasswordError("A senha deve conter pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial")
                }
            }else(
                setEmailError("E-mail inválido")
            )
        }else{
            if (nameError === "")
                setNameError("Preenche o campo a cima")
            if (cnpjError === "")
                setCNPJError("Preenche o campo a cima")
            if (specialtyError === "")
                setSpecialtyError("Preenche o campo a cima")
            if (phoneError === "")
                setPhoneError("Preenche o campo a cima")
            if (emailError === "")
                setEmailError("Preenche o campo a cima")
            if (cityError === "")
                setCityError("Preenche o campo a cima")
            if (districtError === "")
                setDistrictError("Preenche o campo a cima")
            if (streetError === "")
                setStreetError("Preenche o campo a cima")
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

                    <Title>Cadastro</Title>

                    <TextInfo>Faça seu cadastro e entre na plataforma para criar e anunciar seus serviços!</TextInfo>

                    <img
                        src={SvgRegister}
                        alt="SvgRegister"
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
                    <Form onSubmit={handleRegister}>
                            <Input
                                placeholder="Razão social"
                                value={name}
                                onChange={e => {
                                    setName(e.target.value)
                                    setNameError(null)
                                }}
                                maxLength={"100"}
                                errorMessage={nameError}
                                type = {"text"}
                            />
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
                                placeholder="Telefone"
                                value={phone}
                                onChange={e => {
                                    setPhone(phoneMask(e.target.value))
                                    setPhoneError(null)
                                }}
                                maxLength={"16"}
                                errorMessage={phoneError}
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

                            <InputSelect
                                name="Specialty"
                                value={specialty}
                                onChange={e =>
                                    setSpecialty(e.target.value)
                                }

                            >
                                <Option value="Outros">Outros</Option>
                                <Option value="Elétrica">Elétrica</Option>
                                <Option value="Funilaria">Funilaria</Option>
                                <Option value="Limpeza">Limpeza</Option>
                                <Option value="Pintura">Pintura</Option>
                                <Option value="Mecânica">Mecânica</Option>
                            </InputSelect>

                            <Input
                                placeholder="Cidade"
                                value={city}
                                onChange={e => {
                                    setCity(e.target.value)
                                    setCityError(null)
                                }}
                                maxLength={"100"}
                                errorMessage={cityError}
                                type = {"text"}
                            />
                            <Input
                                placeholder="Bairro"
                                value={district}
                                onChange={e => {
                                    setDistrict(e.target.value)
                                    setDistrictError(null)
                                }}
                                maxLength={"100"}
                                errorMessage={districtError}
                                type = {"text"}
                            />
                            <Input
                                placeholder="Rua"
                                value={street}
                                onChange={e => {
                                    setStreet(e.target.value)
                                    setStreetError(null)
                                }}
                                maxLength={"100"}
                                errorMessage={streetError}
                                
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

                            <AreaButton >
                                <ButtonRegister className="button" type="submit">Cadastrar</ButtonRegister>
                            </AreaButton>
                    </Form>
                }
            </Overlap>

        </Container>
    );
}