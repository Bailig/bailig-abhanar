import { Route } from 'react-router-dom'
import About from './about/components/about'
import SkillHeader from './skill/components/header'
import SkillContent from './skill/containers/content'

export const App = ({ match }) => (
    <main className="container">
        <section className="section-about">
            <div className="row">
                <About />
            </div>
        </section>


        <section className="section-skill">
            <div className="row">
                <SkillHeader />
                <Route path={"/skill"} component={SkillContent}/>
            </div>
        </section>

    </main>
)
    


export const Whoops404 = () =>
    <div>
        <h1>Whoops, route not found!</h1>
    </div>