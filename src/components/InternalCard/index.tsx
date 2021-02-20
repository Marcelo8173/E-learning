import React from 'react';
import { FiClock } from 'react-icons/fi';
import { Container,ContentButton,SectionImg,Content } from './styles';
import { ILesson } from '../../pages/course';
import { useHistory } from 'react-router-dom';

const InternalCard: React.FC<ILesson> = ({ name, description, duration, id }) => {
    const history = useHistory();

    function handlePage(id: string) {
        history.push(`/`);
    }

    return (
        <Container>
            <ContentButton onClick={() => handlePage(id)}>
                <SectionImg>
                    <img src="https://www.publicidadenaweb.com/wp-content/uploads/2019/06/como-fazer-video-de-vendas.jpg" alt="" />
                </SectionImg>
                <div>
                    <h1>{name}</h1>
                    <Content>
                        <p>{description}</p>
                        <span>
                            <FiClock />
                            {duration}mim</span>
                    </Content>
                </div>
            </ContentButton>
        </Container>
    );
}

export default InternalCard;