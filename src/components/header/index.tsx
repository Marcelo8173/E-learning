import React from 'react';
import Logo from '../../assets/e.learninglogo.png';
import LogOut from '../../assets/SairbuttonLogOut.png';
import {Container} from './styled';

const Header: React.FC = () => {
    return(
        <Container>
            <header>
                <img src={Logo} alt=""/>
                <button>
                    <img src={LogOut} alt=""/>
                </button>
            </header>
        </Container>
    )
}

export default Header;