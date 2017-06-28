import { connect } from 'react-redux'
import content from '../components/content'
import { scrollTo } from '../../../modules/menu/actions'


const mapDispatchToProps = (dispatch) => {
    return {
        onBack: () => {
            dispatch(scrollTo("#section-work"))
        }
    }
}

export default connect(null, mapDispatchToProps)(content)