import React, {useState, useContext, useEffect} from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    ButtonAdd,
    ButtonLogout,
    LogoutIcon,
} from './styles';
import {Card} from '../../components/Card.js';
import {Loader} from '../../components/Loader.js';
import {Plus} from '@styled-icons/feather';
import {Modal} from '../../components/Modal.js';
import { AuthContext } from '../../contexts/auth';
import Api from '../../Api';

export function Home () {
    
    const {logout } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [services, setServices] = useState([])
    const [serviceToBeEdited , setServiceToBeEdited] = useState();

    
    useEffect(()=>{
        functionGetServices();
        setServiceToBeEdited('');
    }, [])

    const functionGetServices = async () => {
        setLoading(true);

        const res = await Api.getServices();
        setServices(res.servicos);

        setLoading(false);
    }


    const handleDeleteCard = async (idCar) => {
        setLoading(true)
        const token = localStorage.getItem('token');

        const res = await Api.deleteService(idCar, token)
        
        if(res == 204){
            setLoading(false)
            alert("Servico deletado")
            functionGetServices();
        }else{
            alert("Problema ao deletar")
            functionGetServices();
        }
    }

    
    if (loading){
        return <Loader/>
    }

    return(

        <Container>
            <Header>
                <Title>
                    Home
                </Title>

                <ButtonLogout onClick={logout}>
                    <LogoutIcon/>
                </ButtonLogout>

            </Header>

            <ButtonAdd onClick={() => {setIsModalVisible(true)}}>
                <Plus size = {32} color = "#fff" strokeWidth= {2}/>               
            </ButtonAdd>
                
            <Content>
                

                {
                    services ? 
                        services.map((service, index ) => {
                            return <Card 
                                {... service} 
                                key = {index} 
                                handleEditCard = {(e) => {setServiceToBeEdited(e); setIsModalVisible(true)}}
                                handleDeleteCard = {handleDeleteCard}/>
                        
                        })
                    :
                    <Title>Crie seu primeiro seriço</Title> 
                }
            </Content>

            {
                isModalVisible 
                ? 
                <Modal 
                    onClose = {() => setIsModalVisible(false)} 
                    refresh = {functionGetServices} 
                    serviceSelected = {serviceToBeEdited}
                /> 
                : 
                null
            }
            
        </Container>
    );
}
