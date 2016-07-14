import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

import { Link } from '../../helpers/router';


const NavigationItem = ({path, title, idx}) => (
  <li className={css(styles.menuItem, idx > 0 && styles.menuItemNotFirst)}><Link className={css(styles.link)} to={path}>{title}</Link></li>
);

NavigationItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
};

const Navigation = React.createClass({
  items: [
    {
      path: '/entradas-saidas',
      title: 'Entradas e Saídas',
    },
    {
      path: '/centros-custos',
      title: 'Centros de Custos',
    },
  ],

  render() {
    return (
      <nav className={css(styles.navbar)}>
        <ul className={css(styles.menu)}>
          {this.items.map((item, i) => <NavigationItem {...item} idx={i} key={i}/>)}
        </ul>
      </nav>
    );
  }
});

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#8fd640',
    fontSize: '1.2em',
  },

  menu: {
    margin: 0,
    padding: '0.2em',
    listStyle: 'none',
    display: 'flex',
  },

  menuItem: {
    padding: '0.6em 0.5em',
    color: '#FFFFFF',
    fontWeight: '500',


  },

  menuItemNotFirst: {
    borderLeft: '2px solid rgba(255,255,255,0.4)',
  },

  link: {
    color: '#fff',

    ':hover': {
      textDecoration: 'none',
    },
  },
});

export default Navigation;
