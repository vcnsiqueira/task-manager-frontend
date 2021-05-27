import React, { useState } from 'react';
import theme from '../../styles/theme';

import Button from '../core/Button';
import Backdrop from '../core/Backdrop';
import SideDrawer from '../core/SideDrawer';
import Avatar from '../core/Avatar';
import { Hamburger } from '../icons';

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
                    <SideDrawer closeDrawer={closeDrawer}>
                        Teste
                    </SideDrawer>
                </>
            )}
            <NavigationContainer>
                <NavigationLeftSide>
                    <span onClick={openDrawer}><Hamburger width={20} color={theme.primary}/></span>
                    <Button color="secondary" size="large" variant="contained" onClick={openDrawer}>Quadros</Button>
                </NavigationLeftSide>
                <Brand>
                    <h1>Task Manager</h1>
                </Brand>
                <NavigationRightSide>
                    <Avatar size='medium'/>
                </NavigationRightSide>
            </NavigationContainer>
        </>
    );
};

export default Navigation;