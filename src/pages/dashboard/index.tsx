import React, { useEffect, useState, Fragment } from'react';
import Header from '../../components/header';
import NavBar from '../../components/navbar';
import {AiOutlineSearch} from 'react-icons/ai';
import Background from '../../components/Background';
import { Container, InputContainer, TitleContainer } from './style';
import Cards from '../../components/Cards';
import api from '../../services/api';
import { useTabs } from '../../hooks/tabsContext';
import { Link } from 'react-router-dom';

export interface ICouseData{
    id?: string;
    name: string;
    image: string;    
}

export interface ICousrses{
    coursesData: ICouseData[];
    countCourses: string;
}

const Dashboard: React.FC = () => {
    const { tabSelected } = useTabs();
    const [courses,setCourses] = useState<ICousrses>();

    useEffect(() => {
        tabSelected.id === 1 &&
            api.get(`/courses`).then(response => {
            setCourses(response.data);
        })
    },[tabSelected]);


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
                        <span>{courses?.countCourses} cursos</span>
                    </TitleContainer>
                    {tabSelected.id === 1 ?
                        <div className="grid">
                            {courses?.coursesData.map(item => (
                                <Fragment key={item.id}>
                                    <Link to={`/courses/${item.id}`}>
                                        <Cards
                                            name={item.name}
                                            image={item.image}
                                        />
                                    </Link>
                                </Fragment>
                            ))} 
                        </div>
                        :
                        <div className="grid">
                            Olá
                        </div>
                    }
                </Background>
            </main>
        </Container>
    )
}

export default Dashboard;