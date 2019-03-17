import React from 'react';
import Component from './components/React.Component.jsx';
import PureComponent from './components/React.PureComponent.jsx';
import CreateElement from './components/React.CreateElement.jsx';
import FComponent from './components/React.FunctionalComponent.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Component/>
                <PureComponent/>
                <CreateElement/>
                <FComponent/>
            </div>
        );
    }
}