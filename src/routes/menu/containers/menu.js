import { connect } from 'react-redux'
import Menu from '../components/menu'
import { toggleMenu, scrollTo } from '../../../modules/menu/actions'

const mapStateToProps = (state) => {
    return {
        isShowingMenu: state.menu.isShowing,
        menuButtonClassName: state.menu.isShowing ? " glyphicon glyphicon-remove" : " glyphicon-menu-hamburger",
        menuNavClassName: state.menu.isShowing ? "" : " hidden-xs hidden-sm"
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggleMenu: () => {
            dispatch(toggleMenu())
        },
        onScrollTo: (targetId) => {
            dispatch(scrollTo(targetId, ownProps.pathName))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)