import React from 'react';
import Component from './components/React.Component';
import PureComponent from './components/React.PureComponent';
import CreateElement from './components/React.CreateElement';
import FComponent from './components/React.FunctionalComponent';

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