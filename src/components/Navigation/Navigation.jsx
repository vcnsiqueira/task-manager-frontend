import React from 'react';

import theme from '../../styles/theme';

import Button from '../core/Button';
import IconButton from '../core/IconButton';
import { Settings } from '../icons';

const Navigation = () => {
    return (
        <div style={{display:'flex', flexDirection: 'row', padding: '10px 3rem', justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.primary}}>
            <div className="left" style={{flex:'1', display:"flex", justifyContent:"flex-start"}}>
                <Button color="secondary" variant="contained">Quadros</Button>
            </div>
            <div className="brand" style={{flex:'1', display:"flex", justifyContent:"center"}}>
                Coloque a sua brand aqui
            </div>
            <div className="right" style={{flex:'1', display:"flex", justifyContent:"flex-end"}}>
                <IconButton variant="pattern" color="secondary">
                    <Settings />
                </IconButton>
            </div>
        </div>
    );
};

export default Navigation;