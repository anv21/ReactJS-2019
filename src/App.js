import React from 'react';
import './assets/style/index.css';

import Header from './components/Header/index.jsx';
import Items from './components/Items/index.jsx';
import Footer from './components/Footer/index.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

export class App extends React.Component {
    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <ErrorBoundary>
                <Header />
                <Items />
                <Footer />
            </ErrorBoundary>
        )
    }
}

 export default App;