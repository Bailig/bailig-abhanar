import { connect } from 'react-redux'
import Menu from '../components/menu'
import { toggleMenu } from '../../../modules/menu/actions'

const mapStateToProps = (state) => {
    return {
        isShowingMenu: state.menu.isShowing,
        menuButtonClassName: state.menu.isShowing ? " glyphicon glyphicon-remove" : " glyphicon-menu-hamburger",
        menuNavClassName: state.menu.isShowing ? "" : " hidden-xs hidden-sm"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleMenu: () => {
            dispatch(toggleMenu())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)