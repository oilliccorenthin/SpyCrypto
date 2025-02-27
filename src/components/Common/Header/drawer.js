import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/index.js';

function AnchorTemporaryDrawer() {
  const [open, setOpen]  =  useState(false)
  return (
    <div>
      <IconButton onClick={()=>setOpen(true)}>
        <MenuRoundedIcon className='link'/>
        </IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={()=>setOpen(false)}
      >
        <div className='drawer-div'>
            <Link to='/'>
                <p className='link'>Accueil</p>
            </Link>
            <Link to='/compare'>
                <p className='link'>Comparer</p>
            </Link>
            <Link to='/watchlist'>
                <p className='link'>Watchlist</p>
            </Link>
            <Link to='/dashboard'>
                <p className='link'>Tableau de bord</p>
            </Link>
            <ThemeToggle />
        </div>
      </Drawer>
    </div>
  );
}

export default AnchorTemporaryDrawer;
