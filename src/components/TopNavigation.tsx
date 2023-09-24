import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, MenuItem, Select, SelectChangeEvent, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useServicesContext } from '../services/ServicesContext';
import cieloAdaLogo from '../images/cieloada.svg';

const TopNavigation: React.FC = () => {
  const { loginService, i18nService } = useServicesContext();
  const translate = i18nService.translate;

  const [loggedUser, setLoggedUser] = useState(loginService.getLogin());
  const navigate = useNavigate();

  const changeLogin = (event: SelectChangeEvent<HTMLInputElement>) => {
    setLoggedUser(loginService.loginAs(event.target.value));
    navigate(`./${event.target.value}`);

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
        <Button color="inherit" className={loggedUser} component={Link} to="/">
        {translate("homePage")}
        </Button>
        {
          loggedUser === "customer" && 
            (
              <Button color="inherit" className={loggedUser} component={Link} to="./send-message">
                {translate("menuSendMessage")}
              </Button>
            ) 
        }    
        {
          loggedUser === "administrator" &&
            (
              <>
                <Button color="inherit" className={loggedUser} component={Link} to="./list-messages">
                  {translate("menuListMessages")}
                </Button>
                <Button color="inherit" className={loggedUser} component={Link} to="./consume-message">
                  {translate("menuConsumeMessage")}
                </Button>
              </>
            )
        }
        <div style={{ flexGrow: 1 }}></div>
        <Select
          value={loggedUser}
          onChange={changeLogin}
          label={translate("selectOption")}
        >
          <MenuItem value="none">{translate("loggedout")}</MenuItem>
          <MenuItem value="customer">{translate("customer")}</MenuItem>
          <MenuItem value="administrator">{translate("administrator")}</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
    </nav>
  );
};

export default TopNavigation;
