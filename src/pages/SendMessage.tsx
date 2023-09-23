import React, { useEffect, useState } from 'react';
import MessageForm from '../components/MessageForm';
import { useNavigate } from 'react-router-dom';
import { useServicesContext } from '../services/ServicesContext';

interface SendMessageProps {
  children: React.ReactNode;
}

const SendMessage: React.FC = () => {
  // Allowed user roles to access this page
  const allowedRoles = ['customer'];

  const navigate = useNavigate();
  const { loginService } = useServicesContext();
  const [allowed, setAllowed] = useState(false);
  
  // Permission check
  useEffect(()=>{
    if(allowedRoles.includes(loginService.getLogin())) {
      setAllowed(true);
      return;
    }
    navigate('/');
    },[]);

  if(!allowed) return (<></>);
  return (
    <div>
      <MessageForm />
    </div>
  );
};

export default SendMessage;
