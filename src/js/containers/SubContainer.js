import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions'
import MainComponent from '../components/MainComponent'
import SubComponent from '../components/SubComponent'

const SubContainer = ({ data, isLoading, fetchData }) => (
    <MainComponent>
        <SubComponent data={data} isLoading={isLoading}
            handleFetch={fetchData} />
    </MainComponent>
)

const mapStateToProps = state => state

export default connect(
    mapStateToProps,
    { fetchData }
)(SubContainer)
