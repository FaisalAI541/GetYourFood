import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>Oops! Error</h1>
        <h3>{err.status} : {err.statusText}</h3>
    </div>
  )
}

export default Error