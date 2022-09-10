import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Share from './pages/Share';
import CreatePortfolio from './pages/CreatePortfolio';
import './App.css';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
const styles = {
  portfolio: {
    height: '1000px'
  }
}

  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav style={styles.nav}/>
        <div style={styles.portfolio}>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/login'
              element={<Login />}
            />
            <Route 
              path='/signup' 
              element={<Signup />} 
            />
            <Route 
              path='/profile'
              element={<Profile />} 
            />
            <Route
              path='/profile/:id'
              element={<Share />}
            />
            <Route
              path='/create'
              element={<CreatePortfolio />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
