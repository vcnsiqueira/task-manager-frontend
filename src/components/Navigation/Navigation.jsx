import React, { useState } from 'react';

import Button from '../core/Button';
import IconButton from '../core/IconButton';
import Backdrop from '../core/Backdrop';
import SideDrawer from '../core/SideDrawer';
import Avatar from '../core/Avatar';
import { Add, Hamburger } from '../icons';

import { NavigationContainer, Brand, NavigationLeftSide, NavigationRightSide } from './styled/Navigation.styled';

const Navigation = () => {

    const [showDrawer, setShowDrawer] = useState(false);
    
    const openDrawer = () => {
        setShowDrawer(true);
    };

    const closeDrawer = () => {
        setShowDrawer(false);
    };

    return (
        <>
            {showDrawer && (
                <>
                    <Backdrop onClick={closeDrawer}/>
                    <SideDrawer onClick={closeDrawer}>
                        Teste
                    </SideDrawer>
                </>
            )}
            <NavigationContainer>
                <NavigationLeftSide>
                    <span onClick={openDrawer}><Hamburger width={20} color='#CCCCCC'/></span>
                    <Button color="warning" size="large" variant="contained" onClick={openDrawer}>Quadros</Button>
                </NavigationLeftSide>
                <Brand>
                    <h1>Task Manager</h1>
                </Brand>
                <NavigationRightSide>
                    <IconButton variant="pattern" color="secondary">
                        <Add />
                    </IconButton>
                    <Avatar size='medium'/>
                </NavigationRightSide>
            </NavigationContainer>
        </>
    );
};

export default Navigation;