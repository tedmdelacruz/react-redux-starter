import React, { Component } from 'react'
import { SubComponent } from './SubComponent'

export class App extends Component {
    render() {
        const { fetchData, data } = this.props

        return (
            <div>
                <h1>This is a ReactJS + Redux starter kit</h1>
                <hr/>
                <SubComponent fetchData={ fetchData } data={ data.data }/>
            </div>
        )
    }
}
