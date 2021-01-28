import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { ICousrses } from '../dashboard';

const Courses: React.FC = () => {
    const id = useParams();

    const [course,setCourse] = useState<ICousrses>();

    useEffect(() => {
        api.get(`/courses/${id}`).then(response => {
            setCourse(response.data);
        });
    }, []);
    
    return (
        <Container>
            
        </Container>
    );
}

export default Courses;