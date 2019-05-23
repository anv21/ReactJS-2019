import React from 'react';
import './assets/style/index.css';

export class App extends React.Component {
    componentDidUpdate() {
        if (typeof (window) !== 'undefined') {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default App;