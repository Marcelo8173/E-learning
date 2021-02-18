import React from 'react';
import { Container,ContentButton,SectionImg } from './styles';

const InternalCard = () => {
    return (
        <Container>
            <ContentButton>
                <SectionImg>
                    <img src="https://www.publicidadenaweb.com/wp-content/uploads/2019/06/como-fazer-video-de-vendas.jpg" alt="" />
                </SectionImg>
                <div>
                    <h1>Titulo da materia</h1>
                </div>
            </ContentButton>
        </Container>
    );
}

export default InternalCard;