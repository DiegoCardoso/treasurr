import React, { PropTypes } from 'react';
import toRegex from 'path-to-regexp';

import history from './history';

function matchURI(path, uri) {
  const keys = [];
  const pattern = toRegex(path, keys);
  const match = pattern.exec(uri);
  if (!match) {
    return null;
  }
  const params = match
    .filter((obj, index) => index > 0)
    .reduce((params, current, index) => {
      return {
        ...params,
        [keys[index].name]: current
      };
    }, {});
  return params;
}


async function resolve(routes, context) {
  for (const route of routes) {
    const uri = context.error ? '/error' : context.pathname;
    const params = matchURI(route.path, uri);

    if (!params) {
      continue;
    }

    const result = await route.action({ ...context, params });

    return result;
  }
  const error = new Error('Not found!');
  error.status = 404;
  throw error;
}

export const Link = React.createClass({
  propTypes: {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  },
  onClick(evt) {
    evt.preventDefault();
    const { pathname, search } = evt.currentTarget;
    history.push({
      pathname,
      search,
    });
  },
  render() {
    const { to } = this.props;
    return (
      <a href={to} onClick={this.onClick} {...this.props}>{this.props.children}</a>
    );
  }
});


export const setupRouting = (routes, renderComponent) => {

  const makeRenderComponent = (component) => {
    console.log('COMPONENT',component);
    component && renderComponent(React.cloneElement(component));
  };

  function renderLocation(location) {
    resolve(routes, location)
      .then(makeRenderComponent)
      .catch(error => {
        console.error(error);
        return resolve(routes, { ...location, error });
      })
      .then(makeRenderComponent);
  }

  renderLocation(history.getCurrentLocation());
  history.listen(renderLocation);
};

export default { resolve };
