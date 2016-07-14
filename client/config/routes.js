import React from 'react';

import Main from '../containers/Main';
import Error from '../containers/Error';


import { Link } from '../helpers/router';
import Header from '../components/Header';

const Name = React.createClass({
  propTypes: {
    params: React.PropTypes.object.isRequired,
  },
  render() {
    console.log(this.props);
    const { name } = this.props.params;
    return (
      <div>
        <Header />
        <div>
          <h2>Hello, {name}!</h2>
          <Link to="/">home</Link>
        </div>
      </div>
    );
  }
});



export default [
  { path: '/', action: () => <Main /> },
  { path: '/name/:name', action: ({...args}) => <Name {...args}/> },
  { path: '/error', action: () => <Error />},
];
