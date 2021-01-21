import React, { useState, useCallback } from 'react';
import {BiHomeAlt} from 'react-icons/bi';
import {AiOutlineHeart} from 'react-icons/ai';
import {Container,Button} from './styled';

const NavBar: React.FC = () => {

    const [selected, setSelected] = useState(1);
    
    const handleSelectTab = useCallback((id:number) => {
        setSelected(id);
    },[])

    return(
        <Container>
            <Button selected={selected === 1 ? true : false} onClick={() => handleSelectTab(1)}>
                <BiHomeAlt size={17} />
                Home</Button>
            <Button selected={selected === 2 ? true : false} onClick={() => handleSelectTab(2)}>
                <AiOutlineHeart size={17}/>
                Salvos</Button>
        </Container>
    )
}

export default NavBar;