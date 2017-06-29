import { connect } from 'react-redux'
import header from '../components/header'
import { scrollTo } from '../../../modules/menu/actions'

const mapStateToProps = (state, ownProps) => {
    return {
        sectionHeaderClassName: ownProps.pathName === "/work" ? " shrink" : ""
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onScroll: () => {
            dispatch(scrollTo("#section-work", ownProps.pathName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(header)