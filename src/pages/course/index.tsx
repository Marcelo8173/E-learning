import React, { useEffect, useState, Fragment } from 'react';
import { Container } from './styles';
import { useParams } from 'react-router-dom';
import InternalCards from '../../components/InternalCard';
import api from '../../services/api';
import Header from '../../components/header';
import Background from '../../components/Background';
import { TitleContainer } from '../dashboard/style';

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

    useEffect(() => {
        api.get(`/courses/${id}`).then(response => {
            const data = {
                lessonsqtd: response.data.count[0].lessonsqtd,
                name: response.data.course[0].name
            }
            setCourse(data);
        });
        api.get(`/lesson/${id}`).then(response => {
            setLesson(response.data)
        })
    }, [id]);

    return (
        <Container>
            <Header />
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
        </Container>
    );
}

export default Courses;