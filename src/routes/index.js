import { Route } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import About from './about/components/about'
import SkillHeader from './skill/components/header'
import SkillContent from './skill/containers/content'
import WorkHeader from './work/components/header'
import WorkContent from './work/components/content'
import Contact from './contact/components/contact'

export const App = ({ location }) => (
    <main className="container">
        <section className="section-about">
            <div className="row">
                <About />
            </div>
        </section>


    { 
        location.pathname === "/" || location.pathname === "/skill" ?  
        <section className="section-skill">
            <div className="row">
                <SkillHeader pathName={location.pathname} />
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    <Route location={location} key={location.key} path={"/skill"} exact component={SkillContent}/>
                </CSSTransitionGroup>
            </div>
        </section> : "" 
    }

    { 
        location.pathname === "/" || location.pathname === "/work" ? 
        <section className="section-work">
            <div className="row">
                <WorkHeader pathName={location.pathname} /> 
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    <Route location={location} key={location.key} path={"/work"} exact component={WorkContent}/>
                </CSSTransitionGroup>
            </div>
        </section> : "" 
    }
        <section className="section-contact">
            <div className="row">
                <Contact />
            </div>
        </section>
    </main>
)


export const Whoops404 = () =>
    <div>
        <h1>Whoops, route not found!</h1>
    </div>