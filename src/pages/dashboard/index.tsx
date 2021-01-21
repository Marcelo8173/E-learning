import React from'react';
import Header from '../../components/header';
import {Container} from './style';
import NavBar from '../../components/navbar';

const Dashboard: React.FC = () => {
    return(
        <Container>
            <Header/>
            <NavBar />
            <input type="text"/>
        </Container>
    )
}

export default Dashboard;