import React from 'react'
import { NavLink } from 'react-router-dom'


export const header = ({ sectionHeaderClassName, onScroll }) => (
    <div className={`section-header col-xs-12 col-md-9 col-md-offset-3 ${sectionHeaderClassName}`}>
    
        <div className='header-panel col-xs-8 col-xs-offset-3 floating-box'>

            <h2 className='section-title floating-box'>Work</h2>
            
            <p className='text-box floating-box'>I have passion for the work and love to make something awesome.</p>

            <NavLink to='/work' className='btn-group' onClick={() => onScroll()}>
                <span className='btn-span '>CHECK OUT MORE</span>
                <button type='button' className='glyphicon glyphicon-chevron-right btn-square' />
            </NavLink>

        </div>
    </div>
)


export default header

