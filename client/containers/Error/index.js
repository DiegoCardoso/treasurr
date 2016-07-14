import React from 'react';
import DocumentTitle from 'react-document-title';

import Header from '../../components/Header';

const Error = React.createClass({

  render () {
    return (
      <DocumentTitle title="Treasurr - Error">
        <div>
          <Header />
          <h1>Bad, bad. An unexpected journey brought you here. =(</h1>
        </div>
      </DocumentTitle>
    );
  }

});

module.exports = Error;
