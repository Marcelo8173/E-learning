import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { useParams } from 'react-router-dom';
import InternalCards from '../../components/InternalCard';
// import api from '../../services/api';
// import { ICousrses } from '../dashboard';
import Header from '../../components/header';
import Background from '../../components/Background';
import { TitleContainer } from '../dashboard/style';

interface IParams{
    id: string;
}

// interface ILesson{
//     description: string;
//     duration: string;
//     id: string;
//     name: string;
// }

const Courses: React.FC = () => {
    const {id} = useParams<IParams>();

    // const [course,setCourse] = useState<ICousrses>();
    // const [lesson, setLesson] = useState<ILesson[]>([]);

    // useEffect(() => {
    //     api.get(`/courses/${id}`).then(response => {
    //         setCourse(response.data[0]);
    //     });
    //     api.get(`/lesson/${id}`).then(response => {
    //         setLesson(response.data)
    //     })
    // }, [id]);

    return (
        <Container>
            <Header />
            <main>
                <Background>
                    <TitleContainer>
                        <h2>Matematica</h2>
                        <span>43 cursos</span>
                    </TitleContainer>
                    <InternalCards />
                    <InternalCards />
                    <InternalCards />
                    <InternalCards />

                </Background>
            </main>
        </Container>
    );
}

export default Courses;