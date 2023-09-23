import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import CustomerPage from './pages/CustomerPage';
import AdministratorPage from './pages/AdministratorPage';
import HomePage from './pages/HomePage';
import SendMessage from './pages/SendMessage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/send-message" element={<SendMessage />} />
          <Route path="/list-messages" element={<CustomerPage />} />
          <Route path="/consume-messages" element={<AdministratorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
