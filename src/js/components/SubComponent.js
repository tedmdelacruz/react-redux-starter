import React, { Component } from 'react'

export class SubComponent extends Component {

    render() {
        const { fetchData, data } = this.props

        function handleFetch() {
            fetchData()
        }

        return (
            <div>
                <div>
                    <code>Data: { data }</code>
                </div>
                <button onClick={ handleFetch }>Fetch Data</button>
            </div>
        ) 
    }
}
