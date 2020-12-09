import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import { handleLogin, isLoggedIn } from '../services/auth';
import Banner from './Banner/Banner';
import Grid from './Grid';

const LoginStyles = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--margins);
`;

const LoginForm = styled.form`
  border-top: var(--borderSmall) solid rgba(255, 255, 255, 0.2);
  padding-top: 25px;
  grid-column: 1 / 7;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0 var(--gridGap);

  @media (min-width: 768px) {
    grid-column: 1 / 5;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Name = styled.label`
  font-family: var(--sansSerif);
  grid-column: 1 / 4;
  font-weight: 700;
  font-size: var(--paragraph);
  line-height: var(--paragraphLineHeight);

  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
`;

const UserNameField = styled.input`
  font-family: var(--sansSerif);
  height: 50px;
  border: none;
  border-bottom: var(--borderSmall) solid rgba(255, 255, 255, 0.2);
  background-color: transparent;
  grid-column: 4 / 7;
  margin-bottom: 50px;
  font-size: var(--paragraph);
  color: #aaa;
  transition: border-bottom-color 0.5s ease;

  &:focus {
    border-bottom-color: rgba(255, 255, 255, 1);
  }

  &::placeholder {
    color: #aaa;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    grid-column: 3 / 5;
  }
`;

const PasswordField = styled.input`
  font-family: var(--sansSerif);
  border: none;
  border-bottom: var(--borderSmall) solid rgba(255, 255, 255, 0.2);
  background-color: transparent;
  grid-column: 4 / 7;
  margin-bottom: 50px;
  font-size: var(--paragraph);
  color: #aaa;
  transition: border-bottom-color 0.5s ease;

  &:focus {
    border-bottom-color: rgba(255, 255, 255, 1);
  }

  &::placeholder {
    color: #aaa;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    grid-column: 3 / 5;
  }
`;

const ButtonArea = styled.div`
  grid-column: 4 / 7;

  button {
    height: 50px;
    padding: 0;
    background-color: transparent;
    color: #fff;
    text-decoration: underline #808080;
    font-size: var(--paragraph);
    line-height: var(--paragraphLineHeight);
    font-weight: 400;
    text-decoration: underline #808080;
    transition: text-decoration-color 0.5s ease;
    border: none;

    &:hover {
      cursor: pointer;
      text-decoration: underline rgba(0, 0, 0, 0);
    }
  }

  @media (min-width: 768px) {
    grid-column: 3 / 5;
  }
`;

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  };

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(this.state);
  };

  render() {
    if (isLoggedIn()) {
      navigate(`/dashboard/agency`);
    }
    return (
      <>
        <Banner description="Employers login" />
        <LoginStyles>
          <Grid>
            <LoginForm
              method="post"
              onSubmit={(event) => {
                this.handleSubmit(event);
                navigate(`/dashboard/agency`);
              }}
            >
              <Name>Username</Name>
              <UserNameField
                type="text"
                name="username"
                onChange={this.handleUpdate}
              />
              <Name>Password</Name>

              <PasswordField
                type="password"
                name="password"
                onChange={this.handleUpdate}
              />

              <ButtonArea>
                <button type="submit" className="link__std">
                  Log In
                </button>
              </ButtonArea>
            </LoginForm>
          </Grid>
        </LoginStyles>
      </>
    );
  }
}
export default Login;
