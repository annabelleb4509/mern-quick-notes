import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

import NewOrderPage from './NewOrderPage/NewOrderPage';
import AuthPage from './AuthPage/AuthPage';
import OrderHistoryPage from './OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

import './App.css'

function App() {
const [user, setUser] = useState(getUser())

  return (
      <main className='App'>

  { user ?
    <>
      <NavBar user={user}/>

      <Routes>
        <Route path='/orders/new' element={ <NewOrderPage /> } />
        <Route path='/orders' element={ <OrderHistoryPage /> } />
      </Routes>
    </>

    :
    <AuthPage user={user} setUser={ setUser } />
  }
      </main>
  );
};

export default App
