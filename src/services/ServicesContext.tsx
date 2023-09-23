// ServicesContext.tsx

import React, { createContext, useContext, ReactNode } from 'react';
import LoginService from './LoginService';
import ApiService from './ApiService';

// interface ServicesContextType {
//   loginService: typeof LoginService;
//   // Adicione mais serviços aqui
// }

const ServicesContext = createContext<any | undefined>(undefined);

export const useServicesContext = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error('useServicesContext deve ser usado dentro de um ServicesProvider');
  }
  return context;
};

interface ServicesProviderProps {
  children: ReactNode;
}

export const ServicesProvider: React.FC<ServicesProviderProps> = ({ children }) => {
  const services = {
    loginService: LoginService,
    apiService: ApiService,
    // Adicione mais serviços aqui
  };

  return (
    <ServicesContext.Provider value={services}>
      {children}
    </ServicesContext.Provider>
  );
};
