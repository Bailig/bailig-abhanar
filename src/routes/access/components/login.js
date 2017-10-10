import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../../../modules/access/actions'

const renderField = (field) => {
    const { meta: { touched, error } } = field
    const className = touched && error ? 'has-error' : ''
    return (
        <div className={`form-group ${className}`}>
        <input 
            className='form-control'
            type={field.type || 'text'}
            placeholder={field.placeholder}
            {...field.input}
        />
        <div className='text-danger'>
            {touched && error ? error : ''}
        </div>
        </div>
    )
}
const login = ({ handleSubmit, onSubmit, history }) => {
    const submitAndNavigateToAdmin = (values) => {
        onSubmit(values, () => {
            history.push('/admin')
        })
    }
    return (
        <div className='row'>
        <div className='col-md-8 col-md-offset-3 col-xs-12'>
        <div className='form-panel floating-box'>
            <h1 className='text-center'>Hello</h1>
            <p className='text-center'>Login as Admin</p>
            <form 
                className='form col-sm-8 col-sm-offset-2'
                onSubmit={handleSubmit(submitAndNavigateToAdmin)}
            >
                <Field
                    name='email'
                    placeholder='Email'
                    component={renderField}
                />
                <Field
                    name='password'
                    placeholder='Password'
                    type='password'
                    component={renderField}
                />
                <div className='form-group'>
                    <button type='submit' className='btn-submit'>Submit</button>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
}

function validate({ email, password }) {
    const errors = {}

    if (!email) {
        errors.email = 'Enter Your Email Address!'
    }
    if (!password) {
        errors.password = 'Enter Your Password!'
    }
    return errors
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values, callback) => {
            dispatch(loginUser(values, callback))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return { history: ownProps.history }
}


export default reduxForm({
    validate,
    form: 'LoginForm'
})(
    connect(mapStateToProps, mapDispatchToProps)(login)
)