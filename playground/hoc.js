// A Higher Order Component (HOC) is a component that render an other component.
// - Reuse code
// - Render hijacking
// - Props manipulation
// - Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>{ props.info }</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p><i>Warning: this is a wrapped component.</i></p> }
      <WrappedComponent { ...props }/>
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
        { props.isAuthenticated
          ? <p>Welcome back!</p>
          : <p>Please login or register.</p>
        }
        { props.isAuthenticated && <WrappedComponent { ...props }/> }

    </div>
  );
}

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin info="Maecenas faucibus mollis interdum."/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated info="Maecenas faucibus mollis interdum."/>, document.getElementById('app'));
