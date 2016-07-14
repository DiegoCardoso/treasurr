import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Link } from '../../helpers/router';

import Navigation from '../Navigation';


const Header = React.createClass({

  render: function() {
    return (
      <header className={css(styles.header)}>
        <Link to="/">
          <h1>
            <img src="images/logo.png" width="250px"/>
          </h1>
        </Link>
        <Navigation />
      </header>
    );
  }

});

const styles = StyleSheet.create({
  header: {
    borderBottom: '2px solid #88cc3d',
  },
});

module.exports = Header;
