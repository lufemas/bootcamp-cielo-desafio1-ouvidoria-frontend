import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, MenuItem, Select, SelectChangeEvent, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useServicesContext } from '../services/ServicesContext';
import cieloAdaLogo from '../images/cieloada.svg';

const TopNavigation: React.FC = () => {
  const { loginService } = useServicesContext();
  const [loggedUser, setLoggedUser] = useState(loginService.getLogin());

  const changeLogin = (event: SelectChangeEvent<HTMLInputElement>) => {
    setLoggedUser(loginService.loginAs(event.target.value));
  };


  useEffect(()=>{

  }, [loggedUser]);


  return (
    <nav>
    <AppBar position="static">
      <Toolbar className={loggedUser}>
        {/* <Typography variant="h6" component={Link} to="/">
          Your Logo
        </Typography> */}
        <img 
          className='logo'
          src={cieloAdaLogo}
          alt="Cielo Ada Logo"
        />
        {
          loggedUser === "customer" ? 
            (
              <Button color="inherit" component={Link} to="./send-message">
                Enviar Mensagem
              </Button>
            ) :
            (
              <>
                <Button color="inherit" component={Link} to="./list-messages">
                  Listar Mensagens
                </Button>
                <Button color="inherit" component={Link} to="./consume-message">
                  Consumir Mensagem
                </Button>
              </>
            )
        }
        <div style={{ flexGrow: 1 }}></div>
        <Select
          value={loggedUser}
          onChange={changeLogin}
          label="Selecione uma opção"
        >
          <MenuItem value="customer">Customer</MenuItem>
          <MenuItem value="administrator">Administrator</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
    </nav>
  );
};

export default TopNavigation;
