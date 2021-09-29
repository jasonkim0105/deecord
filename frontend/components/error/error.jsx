import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = (props) => {
  return (
    <div className="error-page">
      <h1>404 Page Not Found</h1>
      <Link to="/">Back to home page</Link>
    </div>
  )
}
export default ErrorPage;