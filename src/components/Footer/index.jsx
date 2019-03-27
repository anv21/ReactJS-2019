import React from 'react';
import Logo from '../Logo/index.jsx';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer_wrapper">
                <div className="footer_section">
                    <Logo/>
                </div>
            </div>
        )
    }
}

export default Footer;