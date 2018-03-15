// frontend/bench_bnb.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import login from './util/session_api_util';
import signup from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.login = login;
  window.signup = signup;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBooB</h1>, root);
});
