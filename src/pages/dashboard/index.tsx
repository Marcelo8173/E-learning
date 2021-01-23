import React from'react';
import Header from '../../components/header';
import NavBar from '../../components/navbar';
import {AiOutlineSearch} from 'react-icons/ai';
import Background from '../../components/Background';
import {Container,InputContainer,TitleContainer,CardContainer} from './style';

const Dashboard: React.FC = () => {
    return(
        <Container>
            <Header/>
            <div className="Nav">
                <NavBar />
                <InputContainer>
                    <div>
                        <AiOutlineSearch color="#C4C4D1" size={20}/>
                        <input placeholder="Busque um curso" type="text"/>    
                    </div>
                </InputContainer>
            </div>
            <main>
                <Background>
                    <TitleContainer>
                        <h2>Categorias</h2>
                        <span>43 cursos</span>
                    </TitleContainer>
                    <CardContainer>
                        
                    </CardContainer>
                </Background>
            </main>
        </Container>
    )
}

export default Dashboard;