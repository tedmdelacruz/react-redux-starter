import { connect } from 'react-redux'
import { fetchData } from './actions'
import * as components from './components/App'

export const App = connect(
    function mapStateToProps(state) {
        return state
    },
    function mapDispachToProps(dispatch) {
        return {
            fetchData: () => dispatch(fetchData())
        }
    }
)(components.App)
