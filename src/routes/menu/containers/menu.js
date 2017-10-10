import { connect } from 'react-redux'
import Menu from '../components/menu'
import { toggleMenu, scrollTo } from '../../../modules/menu/actions'
import { logoutUser } from '../../../modules/access/actions'

const mapStateToProps = (state, ownProps) => {
    return {
        menuButtonClassName: state.menu.isShowing ? ' glyphicon glyphicon-remove' : ' glyphicon-menu-hamburger',
        menuNavClassName: state.menu.isShowing ? '' : ' hidden-xs hidden-sm',
        loginLinkClassName: ownProps.pathName === '/login' ? 'active' : '',
        renderLogin: state.access.user === null
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggleMenu: () => {
            dispatch(toggleMenu())
        },
        onScrollTo: (targetId) => {
            dispatch(scrollTo(targetId, ownProps.pathName))
        },
        onLogoutClick: () => {
            dispatch(logoutUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)