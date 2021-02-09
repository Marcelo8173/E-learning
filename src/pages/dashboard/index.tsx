import React, { useEffect, useState, Fragment, useCallback } from'react';
import Header from '../../components/header';
import { VscLoading } from 'react-icons/vsc';
import NavBar from '../../components/navbar';
import {AiOutlineSearch} from 'react-icons/ai';
import Background from '../../components/Background';
import { Container, InputContainer, TitleContainer,LoadContainer } from './style';
import Cards from '../../components/Cards';
import api from '../../services/api';
import { useTabs } from '../../hooks/tabsContext';
import { useHistory } from 'react-router-dom';

export interface ICouseData{
    id?: string | undefined;
    name: string;
    image: string;    
}

export interface ICousrses{
    coursesData: ICouseData[];
    countCourses: string;
}

const Dashboard: React.FC = () => {

    const { tabSelected } = useTabs();
    const history = useHistory();
    const [courses, setCourses] = useState<ICousrses>();
    const [search, setSearch] = useState('');
    const [load, setLoad] = useState(false);

    useEffect(() => {
        tabSelected.id === 1 &&
            api.get(`/courses`, {
                params: {
                    search: search 
                }
            }).then(response => {
                setCourses(response.data);
                setLoad(true);
        })
    },[tabSelected,search]);

    const handleToCoursePage = useCallback((id:string | undefined) => {
        history.push(`/courses/${id}`)
    }, [history]);

    return(
        <Container>
            <Header/>
            <div className="Nav">
                <NavBar />
                <InputContainer>
                    <div>
                        <AiOutlineSearch color="#C4C4D1" size={20} />
                        <form  action="">
                            <input onChange={e => setSearch(e.target.value)} placeholder="Busque um curso" type="text"/>    
                        </form>
                    </div>
                </InputContainer>
            </div>
            {!load ?
                <>
                    <LoadContainer>
                        <VscLoading color="#FFFF" size={60}/>
                    </LoadContainer>
                </>
                :
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
                                    <button onClick={() => handleToCoursePage(item.id)}>
                                        <Cards
                                            name={item.name}
                                            image={item.image}
                                        />
                                    </button>
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
            }
        </Container>
    )
}

export default Dashboard;