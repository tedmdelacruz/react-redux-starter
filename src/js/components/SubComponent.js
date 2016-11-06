import React, { Component } from 'react'

export default class SubComponent extends Component {
    constructor(props) {
        super()
        this.handleFetch = props.handleFetch
    }

    render() {
        const { data, isLoading } = this.props
        debugger

        return (
            <div>
                <button onClick={this.handleFetch.bind(this)}>
                    {isLoading ? 'Fetching...' : 'Fetch data'}
                </button>
                <div className="data-container">
                    <code>{data}</code>
                </div>
            </div>
        ) 
    }
}
