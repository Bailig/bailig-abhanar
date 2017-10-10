import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

const onSubmit = (values) => {
    console.log(values)
}

class login extends Component {
    // error: render field only be called once
    renderField(field) {
        const { meta } = field
        const className = meta.touched && meta.error ? 'has-error' : ''
        console.log('meda', meta)
        return (
            <div className={`form-group ${className}`}>
            <input 
                className='form-control'
                type={field.type || 'text'}
                placeholder={field.placeholder}
                {...field.inout}
            />
            <div className='text-danger'>
                {meta.touched ? meta.error : ''}
            </div>
            </div>
        )
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div className='row'>
            <div className='col-md-8 col-md-offset-3 col-xs-12'>
            <div className='form-panel floating-box'>
                <h1 className='text-center'>Hello</h1>
                <p className='text-center'>Login as Admin</p>
                <form 
                    className='form col-sm-8 col-sm-offset-2'
                    onSubmit={handleSubmit(() => onSubmit)}
                >
                    <Field
                        name='email'
                        placeholder='Email'
                        component={this.renderField}
                    />
                    <Field
                        name='password'
                        placeholder='Password'
                        type='password'
                        component={this.renderField}
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

export default reduxForm({
    validate,
    form: 'LoginForm'
})(login)