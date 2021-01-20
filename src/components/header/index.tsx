import React from 'react';
import Logo from '../../assets/Logotipologo.png';
import LogOut from '../../assets/SairbuttonLogOut.png';
import {Container} from './styled';

const Header: React.FC = () => {
    return(
        <Container>
            <header>
                <div>
                    <img src={Logo} alt=""/>
                </div>
                <div>
                    <button>
                        <img src={LogOut} alt=""/>
                    </button>
                </div>
            </header>
        </Container>
    )
}

export default Header;