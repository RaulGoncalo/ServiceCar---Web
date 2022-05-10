import React, {useState} from 'react';
import {
    ModalContainer ,
    Container ,
    Title ,
    Content ,
    ButtonSalvar ,
    TextDesc ,
    AreaOfficeHour ,
    InputSelect ,
    Option ,
    TextErro ,
} from "./stylesModal.js";
import {moeda, formatHora} from '../functions';
import {Input} from './Input.js';
import Api from '../Api';


export function Modal ({ id = "modal", onClose = () => {}, refresh, serviceSelected}) {

    const [idService, setIdService] = useState(serviceSelected.idServico !== '' ? serviceSelected.idServico : '');
    const [service, setService] = useState(serviceSelected.service !== '' ? serviceSelected.service : service);
    const [desc, setDesc] = useState(serviceSelected.descService !== '' ? serviceSelected.descService : desc);
    const [fromDay, setFromDay] = useState(serviceSelected.fromDay !== '' ? serviceSelected.fromDay : fromDay);
    const [toDay, setToDay] = useState(serviceSelected.toDay !== '' ? serviceSelected.toDay : toDay);
    const [fromHour, setFromHour] = useState(serviceSelected.fromHour !== '' ? serviceSelected.fromHour : fromHour);
    const [toHour, setToHour] = useState(serviceSelected.toHour !== '' ? serviceSelected.toHour : toHour);
    const [time, setTime ] = useState(serviceSelected.timeService !== '' ? serviceSelected.timeService : time);
    const [price, setPrice] = useState(serviceSelected.price !== '' ? serviceSelected.price : price);


    const [serviceError, setServiceError] = useState('');
    const [descError, setDescError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [timeError, setTimeError] = useState('');

    

    const handleSalveService = async () =>{

        const data = {
            idService: idService,
            service: service,
            desc: desc,
            fromDay: fromDay,
            toDay: toDay,
            fromHour: fromHour,
            toHour: toHour,
            price: price,
            time: time
        }
        if (data.service != "" && data.desc != "" && data.price != "" && data.time != ""){
            if(data.fromDay != "0" && data.toDay != "0" && data. fromHour != "0" && toHour != "0"){

                const token = localStorage.getItem('token');

                console.log(data.idService)
                if(data.idService === '' || data.idService === undefined || data.idService === null){
                    const res = await Api.registerService(data, token);

                    if(res == 201){
                        alert("Serviço cadastrado")
    
                        onClose();
                        refresh();
                    }else{
                        alert("Problema ao cadastrar")
                    }

                }else{
                    const res = await Api.updateService(data, token);

                    if(res == 200){
                        alert("Serviço atualizado")
    
                        onClose();
                        refresh();
                    }else{
                        alert("Problema ao atualizar")
                    }
                }
            }else{  
                alert("Selecione os dias e horas")
            }
        }else{
            setServiceError("Digite o nome de um serviço")
            setDescError("Digite uma descrição do serviço")
           
            setPriceError("Digite um preço")
            setTimeError("Digite o tempo do serviço")

        }
    }


    const handleOutsideClick = (e) => {
        if(e.target.id === id ) onClose();
    }

    return(
        <ModalContainer id = {id} onClick={handleOutsideClick}>
            <Container>
                <Title>Novo Serviço</Title>

                <Content>
                    <Input
                        placeholder="Serviço"
                        value={service}
                        onChange={e => {
                            setService(e.target.value)
                            setServiceError(null)
                        }}
                        maxLength={"100"}
                        errorMessage={serviceError}
                    />

                    <TextDesc
                        placeholder="Descrição"
                        value={desc}
                        onChange={e => {
                            setDesc(e.target.value)
                            setDescError(null)
                        }}
                    />
                     <TextErro>{descError}</TextErro>

                    <AreaOfficeHour>
                        <InputSelect
                            name="fromDay"
                            value={fromDay}
                            onChange={e =>{
                                setFromDay(e.target.value)
                            }}

                        >
                            <Option value="0">De</Option>
                            <Option value="1">Segunda</Option>
                            <Option value="2">Terça</Option>
                            <Option value="3">Quarta</Option>
                            <Option value="4">Quinta</Option>
                            <Option value="5">Sexta</Option>
                            <Option value="6">Sábado</Option>
                        </InputSelect>

                        <InputSelect
                            name="toDay"
                            value={toDay}
                            onChange={e =>{
                                setToDay(e.target.value)
                            }}

                        >
                            <Option value="0">Até</Option>
                            <Option value="1">Segunda</Option>
                            <Option value="2">Terça</Option>
                            <Option value="3">Quarta</Option>
                            <Option value="4">Quinta</Option>
                            <Option value="5">Sexta</Option>
                            <Option value="6">Sábado</Option>
                        </InputSelect>

                        <InputSelect
                            name="fromHour"
                            value={fromHour}
                            onChange={e =>{
                                setFromHour(e.target.value)
                            }}

                        >
                            <Option value="0">Dás</Option>
                            <Option value="06:00">06:00</Option>
                            <Option value="07:00">07:00</Option>
                            <Option value="08:00">08:00</Option>
                            <Option value="09:00">09:00</Option>
                            <Option value="10:00">10:00</Option>
                            <Option value="11:00">11:00</Option>
                            <Option value="12:00">12:00</Option>
                            <Option value="13:00">13:00</Option>
                            <Option value="14:00">14:00</Option>
                            <Option value="15:00">15:00</Option>
                            <Option value="16:00">16:00</Option>
                            <Option value="17:00">17:00</Option>
                            <Option value="18:00">18:00</Option>
                        </InputSelect>

                        <InputSelect
                            name="toHour"
                            value={toHour}
                            onChange={e =>{
                                setToHour(e.target.value)
                            }}

                        >
                            <Option value="0">As</Option>
                            <Option value="06:00">06:00</Option>
                            <Option value="07:00">07:00</Option>
                            <Option value="08:00">08:00</Option>
                            <Option value="09:00">09:00</Option>
                            <Option value="10:00">10:00</Option>
                            <Option value="11:00">11:00</Option>
                            <Option value="12:00">12:00</Option>
                            <Option value="13:00">13:00</Option>
                            <Option value="14:00">14:00</Option>
                            <Option value="15:00">15:00</Option>
                            <Option value="16:00">16:00</Option>
                            <Option value="17:00">17:00</Option>
                            <Option value="18:00">18:00</Option>
                        </InputSelect>

                        <Input
                            placeholder="Tempo em horas do serviço"
                            value={time}
                            onChange={e => {
                                setTime(formatHora(e.target.value))
                                setTimeError(null)
                            }}
                            type={"numer"}
                            maxLength={"5"}
                            errorMessage = {timeError}
                        />

                        <Input
                            placeholder="R$"
                            value={price}
                            onChange={e => {
                                setPrice(moeda(e.target.value))
                                setPriceError(null)
                            }}                            
                            type={"numer"}
                            errorMessage = {priceError}
                        />

                   
                   </AreaOfficeHour>  
                    
                </Content>

                <ButtonSalvar onClick = {handleSalveService}>
                    Salvar
                </ButtonSalvar>
            </Container>
        </ModalContainer>
    );
}


