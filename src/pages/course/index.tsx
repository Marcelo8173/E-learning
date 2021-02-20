import React, { useEffect, useState, Fragment } from 'react';
import { Container } from './styles';
import { useParams } from 'react-router-dom';
import InternalCards from '../../components/InternalCard';
import api from '../../services/api';
import Header from '../../components/header';
import Background from '../../components/Background';
import { TitleContainer, LoadContainer } from '../dashboard/style';
import { VscLoading } from 'react-icons/vsc';

interface IParams{
    id: string;
}

interface Icourse{
    name: string;
    lessonsqtd: string;
}

export interface ILesson{
    description: string;
    duration: string;
    id: string;
    name: string;
}

const Courses: React.FC = () => {
    const {id} = useParams<IParams>();

    const [course, setCourse] = useState<Icourse>();
    const [lesson, setLesson] = useState<ILesson[]>([]);
    const [load, setLoad] = useState(false);


    useEffect(() => { 
        Promise.all([
            api.get(`/courses/${id}`),
            api.get(`/lesson/${id}`)
        ]).then(values => {
            const data = {
                lessonsqtd: values[0]?.data.count[0].lessonsqtd,
                name: values[0]?.data.course[0].name
            }
            setCourse(data);
            setLesson(values[1].data)
        })
        setLoad(true);
    }, [id]);

    return (
        <Container>
            <Header />
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
                            <h2>{course?.name}</h2>
                            <span>{course?.lessonsqtd} cursos</span>
                        </TitleContainer>
                        {lesson.map(item => (
                            <Fragment key={item.id}>
                                <InternalCards
                                    description={item.description}
                                    duration={item.duration}
                                    name={item.name}
                                    id={item.id}
                                />
                            </Fragment>
                        ))}
                    </Background>
                </main>
            }
        </Container>
    );
}

export default Courses;