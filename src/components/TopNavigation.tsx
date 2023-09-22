import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, MenuItem, Select, Tab, Tabs, Toolbar, Typography } from '@mui/material';

const TopNavigation: React.FC = () => {
  const value = '';

  const handleChange = () => {};

  return (
    <nav>
    <AppBar position="static">
      <Toolbar>
        {/* <Typography variant="h6" component={Link} to="/">
          Your Logo
        </Typography> */}
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <div style={{ flexGrow: 1 }}></div>
        <Select
          // value={selectedValue}
          // onChange={handleChange}
          label="Selecione uma opção"
        >
          <MenuItem value="">
            <em>Selecione</em>
          </MenuItem>
          <MenuItem value="customer">Customer</MenuItem>
          <MenuItem value="administrator">Administrator</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/customer">Customer</Link>
        </li>
        <li>
          <Link to="/administrator">Administrator</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavigation;
