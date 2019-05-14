import React from 'react';

import App from '../App';
import Header from '../components/Header';
import Details from '../components/Details';
import Items from '../components/Items';
import Footer from '../components/Footer';

const FilmPage = (props) => (
    <App>
        <Header>
            <Details {...props} />
        </Header>
        <Items>
            <div className="items_empty_result">No films found</div>
        </Items>
        <Footer />
    </App>
);

export default FilmPage;