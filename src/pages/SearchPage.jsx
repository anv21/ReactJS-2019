import React from 'react';

import App from '../App';
import Header from '../components/Header';
import SearchField from '../components/SearchField';
import Items from '../components/Items';
import Footer from '../components/Footer';

const EmptyPage = props => (
  <App>
    <Header>
      <SearchField {...props} />
    </Header>
    <Items>
      <div className="items_empty_result">No films found</div>
    </Items>
    <Footer />
  </App>
);

export default EmptyPage;
