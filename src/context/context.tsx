// src/context/Context.jsx

import React from 'react';

const Context = React.createContext({
  user: { name: '', isLoggedIn: false },
  setUser: () => {}
});

export default Context;