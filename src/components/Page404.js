import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = (props) => (
  <div>
    <h1>404!!</h1>
    <p>Oops... no content on this page.</p>
    <p><Link to="/">Back to home</Link></p>
  </div>
);

export default Page404;
