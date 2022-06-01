import React from 'react';
import styled from 'styled-components';
import {DollarSign} from '@styled-icons/feather';
import {Calendar} from '@styled-icons/feather';
import {Edit} from '@styled-icons/feather';
import {Trash} from '@styled-icons/feather';

export function Card (props) {
    
    const serviceAtual = {
        idServico : props.idservico,
        service: props.service,
        descService: props.descservice,
        fromDay: props.fromday,
        toDay: props.today,
        fromHour: props.fromhour,
        toHour: props.tohour,
        price: props.price,
        timeService: props.timeservice,      
    }
    
    const convertDay = (dayNumber) =>{
        if(dayNumber == '1'){
            return "Segunda"
        }else if (dayNumber == '2'){
            return "Terça"
        }else if (dayNumber == '3'){
            return "Quarta"
        }else if (dayNumber == '4'){
            return "Quinta"
        }else if (dayNumber == '5'){
            return "Sexta"
        }else{
            return "Sabádo"
        }
    }

    
   

    return(
        <BodyCard>
            <AreaHeader>
                <NameService>
                    {props.service}
                </NameService>

                <DollarSign size = {22} color = "#ff0043" strokeWidth= {2}/>
                <TextValue>{props.price}</TextValue>
            </AreaHeader>

            <Divider/>

            <AreaDesc>
                {props.descservice}
            </AreaDesc>

            <Divider/>

            <AreaDate>
                <Calendar size = {22} color = "#ff0043" strokeWidth= {2}/>
                <TextDate>
                    {convertDay(props.fromday)} á {convertDay(props.today)} dás {props.fromhour} até ás {props.tohour}
                </TextDate>

            </AreaDate>

            <AreaButtons>
                <ButtonEdit onClick ={() => props.handleEditCard(serviceAtual)}>
                    <Edit size = {22} color = "#fff" strokeWidth= {2}/>
                </ButtonEdit>

                <ButtonDelete onClick ={() => props.handleDeleteCard(props.idservico)}>
                    <Trash size = {22} color = "#ff0043" strokeWidth= {2}/>
                </ButtonDelete>
            </AreaButtons>

        </BodyCard>
    );
}

const Divider = styled.div`
    background-color: #ff0043;
    width: 100%;
    margin: 8px 0px 8px 0px;
    height: 1px;
`;

const BodyCard = styled.div`
    background-color: #322B38;
    width: 100%;
    max-width: 280px;

    display: grid;
    justify-content: center;
    align-items: center;

    height: 100%;
    min-height: 200px;
    
    margin-bottom: 38px;
    padding: 10px;
    border-radius: 8px;
`;

const AreaHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const NameService = styled.p`
    font-size: 15px;
    color: #fff;
    font-weight: bold;

    width: 100%;
    margin-left: 8px;
`;

const TextValue = styled.p`
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    margin-right: 8px;
`;

const AreaDesc = styled.p`
    font-size: 14px;
    color: #fff;
    margin: 0px 0px 8px 8px;
    text-align: justify;
`;

const AreaDate = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const TextDate = styled.p`
    font-size: 14px;
    color: #fff;
    margin-left: 8px;
    text-align: justify;
`;

const AreaButtons = styled.div`
    margin: 8px;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    flex-direction: row;
    height: 100%;

`;

const ButtonDelete = styled.button`
    border-radius: 4px;
    margin-right: 8px;

    padding: 2px;
    
    transition: filter 0.2s;
    outline: 0;
    cursor: pointer;

    &:hover{
        opacity: 60%;
    }
`;

const ButtonEdit = styled.button`
    margin-right: 12px;
    border-radius: 4px;

    padding: 2px;

    transition: filter 0.2s;
    outline: 0;
    cursor: pointer;

    &:hover{
        opacity: 60%;
    }
`;