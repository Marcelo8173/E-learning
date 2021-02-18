import React from 'react';
import { FiClock } from 'react-icons/fi';
import { Container,ContentButton,SectionImg,Content } from './styles';

const InternalCard = () => {
    return (
        <Container>
            <ContentButton>
                <SectionImg>
                    <img src="https://www.publicidadenaweb.com/wp-content/uploads/2019/06/como-fazer-video-de-vendas.jpg" alt="" />
                </SectionImg>
                <div>
                    <h1>Titulo da materia</h1>
                    <Content>
                        <p>Aula 02</p>
                        <span>
                            <FiClock />
                            5mim</span>
                    </Content>
                </div>
            </ContentButton>
        </Container>
    );
}

export default InternalCard;