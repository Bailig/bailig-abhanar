import React from 'react'
import { Route } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import About from './about/components/about'
import SkillHeader from './skill/components/header'
import SkillContent from './skill/containers/content'
import WorkHeader from './work/containers/header'
import WorkContent from './work/containers/content'
import Contact from './contact/components/contact'
import Menu from './menu/containers/menu'
import Login from './access/components/login'


export const App = ({ location }) => (
    <div >
    <Menu pathName={location.pathname} />
    <main className='container'>

        <section id='section-about'>
            <div className='row'>
                <About />
            </div>
        </section>

        <section id='section-skill'>
            <div className='row'>
                <SkillHeader pathName={location.pathname} />
                <CSSTransitionGroup
                    transitionName='fade'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500} 
                >
                    <Route location={location} key={location.key} path={'/skill'} exact component={SkillContent} />
                </CSSTransitionGroup>
            </div>
        </section> 
    

        <section id='section-work'>
            <div className='row'>
                <WorkHeader pathName={location.pathname} /> 
                <CSSTransitionGroup
                    transitionName='fade'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    <Route location={location} key={location.key} path={'/work'} exact component={WorkContent} />
                </CSSTransitionGroup>
            </div>
        </section> 

        <section id='section-contact'>
            <div className='row'>
                <Contact />
            </div>
        </section>
    </main>
    </div>
    
)


export const Whoops404 = () =>
    <div>
        <h1>Whoops, route not found!</h1>
    </div>

export const Access = ({ location }) =>
    <div>
        <Menu pathName={location.pathname} />
        <main className='container'>
            <section id='section-access'>
                <Login />
            </section>
        </main>
    </div>