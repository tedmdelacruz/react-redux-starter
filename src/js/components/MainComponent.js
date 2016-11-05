import React, { Component } from 'react'

export default class MainComponent extends Component {
    render() {
        return (
            <div>
                <h1>React + Redux starter kit</h1>
                {this.props.children}
            </div>
        )
    }
}
