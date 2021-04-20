import React, { useState } from 'react';

import theme from '../../styles/theme';

import Button from '../core/Button';
import IconButton from '../core/IconButton';
import Backdrop from '../core/Backdrop';
import SideDrawer from '../core/SideDrawer';
import { Settings, Hamburger } from '../icons';

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
            {showDrawer && <Backdrop onClick={closeDrawer}/>}
            {showDrawer && (
                <SideDrawer onClick={closeDrawer}>
                    Teste
                </SideDrawer>
            )}
            <div style={{display:'flex', flexDirection: 'row', padding: '10px 3rem', justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.primary}}>
                <div className="left" style={{flex:'1', gap: '15px', display:"flex", justifyContent:"flex-start"}}>
                    <Hamburger width={30} color='#CCCCCC'/>
                    <Button color="secondary" variant="contained" onClick={openDrawer}>Quadros</Button>
                </div>
                <div className="brand" style={{flex:'1', display:"flex", justifyContent:"center"}}>
                    Coloque a sua brand aqui
                </div>
                <div className="right" style={{flex:'1', display:"flex", gap: '15px', justifyContent:"flex-end"}}>
                    <IconButton variant="pattern" color="secondary">
                        <Settings />
                    </IconButton>
                    <IconButton variant="pattern" color="secondary">
                        <Hamburger />
                    </IconButton>
                </div>
            </div>
        </>
    );
};

export default Navigation;