import React from 'react';

import DocumentTitle from 'react-document-title';

import Header from '../../components/Header';
//import { Link } from '../../helpers/router';

export default React.createClass({
  displayName: 'Main',
  render() {
    return (
      <DocumentTitle title="Treasurr - your treasure app">
        <div>
          <Header />
            <div>
              <h1>Main</h1>
            </div>
          </div>
      </DocumentTitle>
    );
  }
});
