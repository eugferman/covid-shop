import React from 'react';

import { useDispatch } from 'react-redux';

import { loginUserAction } from '../../redux/actions/loginUserAction';

function ReduxName() {
  const dispatch = useDispatch();
  const name = 'Eugenio';
  const logName = () => {
    dispatch(loginUserAction(name));
  };


  return (
    <div>
      <h1>hello!</h1>
      <button type="button" onClick={logName}>Log Name</button>
    </div>
  );
}

export default ReduxName;
