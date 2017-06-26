import { Route } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import About from './about/components/about'
import SkillHeader from './skill/components/header'
import SkillContent from './skill/containers/content'
import WorkHeader from './work/components/header'
import WorkContent from './work/components/content'

export const App = ({ location }) => (
    <main className="container">
        <section className="section-about">
            <div className="row">
                <About />
            </div>
        </section>


        <section className="section-skill">
            <div className="row">
                <SkillHeader pathName={location.pathname} />
                <Route path={"/skill"} exact component={SkillContent}/>
            </div>
        </section>

        <section className="section-work">
            <div className="row">
                <WorkHeader pathName={location.pathname} />
                <Route path={"/work"} exact component={WorkContent}/>
            </div>
        </section>
    </main>
)


export const Whoops404 = () =>
    <div>
        <h1>Whoops, route not found!</h1>
    </div>