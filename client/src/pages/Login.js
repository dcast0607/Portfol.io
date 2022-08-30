import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import './Login.css';


const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await login({
          variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    const [formSignState, setFormSignState] = useState({ username: '', email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
  
    const handleSignSubmit = async (event) => {
      event.preventDefault();
      
      const mutationResponse = await addUser({
        variables: {...formSignState},
      });
      const token = mutationResponse.data.addUser.token;
      
      Auth.login(token);
    };
  
    const handleSignChange = (event) => {
      const { name, value } = event.target;
      setFormSignState({
        ...formSignState,
        [name]: value,
      });
    };

    const [startLogin, setStartLogin] = useState(false);

    const transitionProperties = startLogin ? { marginLeft: '-410px'} : {};

    const transitionPropertiesOne = startLogin ? { marginLeft: '110px'} : {};

    return (
      <div className="mainInput">
        <div className="appName">
          <h1><span className="portfol">Portfol.</span><span className="io">IO</span></h1>
        </div>
      <div className="loginRegister">
        <div className="buttonSwitch">
          <div id="btn" style={transitionPropertiesOne}></div>
          <button type="button" class="toggle-btn" onClick={() => setStartLogin(!startLogin)}>
            <div className="spacebuttons">
              <span className="space">Login</span><span className="space">Register</span>
            </div>
          </button>
          {/* <button type="button" class="toggle-btn" onClick={register}>Register</button> */}
        </div>
        <div className="inputForms" style={transitionProperties}>
          <div className="container">
            <form onSubmit={handleFormSubmit} id="userlogin">
              {/* <h2 className='center'></h2> */}
              <div className="flex-row space-between my-2">
                <label htmlFor="email">Email address:</label>
                <input
                  placeholder="youremail@test.com"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="flex-row space-between my-2">
                <label htmlFor="pwd">Password:</label>
                <input
                  placeholder="******"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleChange}
                />
              </div>
                {error ? (
                  <div>
                    <p className="error-text">The provided credentials are incorrect</p>
                  </div>
                ) : null}
              <div className="flex-row flex-end space-between">
                <button className="bottomButton" type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="container">
              <form onSubmit={handleSignSubmit} id="register">
              {/* <h2></h2> */}
                <div className="flex-row space-between my-2">
                  <label htmlFor="username">Username:</label>
                  <input
                    placeholder="Username"
                    name="username"
                    type="username"
                    id="username"
                    onChange={handleSignChange}
                  />
                </div>
                <div className="flex-row space-between my-2">
                  <label htmlFor="email">Email:</label>
                  <input
                    placeholder="youremail@test.com"
                    name="email"
                    type="email"
                    id="email"
                    onChange={handleSignChange}
                  />
                </div>
                <div className="flex-row space-between my-2">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    placeholder="******"
                    name="password"
                    type="password"
                    id="pwd"
                    onChange={handleSignChange}
                  />
                </div>
                <div className="flex-row flex-end space-between">
                  <button className="bottomButton" type="submit">Register</button>
                </div>
              </form>
            </div>
        </div>
      </div>
      </div>
    )
}

export default Login