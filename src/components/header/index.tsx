import React, { useCallback } from 'react';
import Logo from '../../assets/Logotipologo.png';
import LogOut from '../../assets/SairbuttonLogOut.png';
import {Container} from './styled';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
    const history = useHistory();

    const handleToBack = useCallback(() => {
        history.push('/');
    },[history]);

    return(
        <Container>
            <header>
                <div>
                    <img src={Logo} alt=""/>
                </div>
                <div>
                    <button onClick={handleToBack}>
                        <img src={LogOut} alt=""/>
                    </button>
                </div>
            </header>
        </Container>
    )
}

export default Header;