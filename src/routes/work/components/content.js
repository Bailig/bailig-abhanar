import { NavLink } from 'react-router-dom'
import { onScrollTo } from '../../utility/utility'


const dbvProject = () => (
    <div className="project text-box floating-box">
        <h3>DBV-C</h3>
        <p>Training delivery management system</p>
        <p>Design > Build > Validate = Competencies (DBV-C) is a cloud-based curriculum and training delivery management system. It provides the tools to dynamically and effectively manage continuous change in curriculum design and training delivery.</p>
        <h4>Overview of the problem</h4>
        <p>The dbv-c was designed to solve many problems that occur in most of the training systems. Some of the primary issues required to be addressed are listed below.</p>
        <ul>
            <li>Graduates from college only have a degree or diploma along with transcripts, which is not necessarily helpful for employers to determine whether the graduates have certain skills or not.</li>
            <li>A typical curriculum often does not have a way to keep track of whether all the foundational skills are taught before the advanced skills.</li>
            <li>Designing curriculums for skills needed to be delivered is complex, tedious, and time-consuming.</li>
            <li>There is a lack of a platform for training institutions to communicate with the industry in order to improve and update the skills being delivered.</li>
        </ul>
        <h4>Overview of the users</h4>
        <p>All the people involved in the above issues could be the application users; therefore, the user roles in this application became complicated. However, by understanding the purpose of each type of user, we developed a good understanding of how users would attempt to use such application, which was very helpful for us to understand what kind of design could satisfy the user needs. Furthermore, in this process, we also developed a better understanding of the level of permissions for each user, which helped us for design the database in the subsequent development processes. There are six types of user roles listed below.</p>
        <ul>
            <li>Administrators</li>
            <li>Designers design the skills for programs or courses</li>
            <li>Instructors deliver the skills and validate student learning outcomes</li>
            <li>Assistants help instructors</li>
            <li>Students view the courses, skills, and validation exercises</li>
            <li>Reviewers from related industries comment on the skills being delivered</li>
        </ul>
        <h4>Research</h4>
        <p>It is a necessary step to research and study other similar applications. Even though the following learning management systems do not share the exact same purposes with DBV-C, we still absorbed many excellent design principles. For example, using the courses as the unit, allowing the user to enroll in individual courses rather than the entire program, to make it more flexible.</p>
        <ul>
            <li>Blackboard</li>
            <li>Moodle</li>
            <li>Canvas</li>
            <li>Google classroom</li>
        </ul>
        <h4>Design challenge</h4>
        <p>Because there are several different user roles, and these roles all have different levels of controls over the application, a lot of duplicated code was written in order to make sure the current UI elements are displayed for the role. This led to too much logic being placed in the view, which is very difficult to maintain. My solution was to centralize all the user checking rules to custom HTML Helpers, which are static functions used to render HTML markups in ASP.NET applications.</p>
        <h4>List of Technologies</h4>
        <p>It was required by the client to use following technologies for the application development.</p>
        <ul>
            <li>Bootstrap</li>
            <li>jQuery</li>
            <li>ASP.NET MVC</li>
            <li>SQL Server</li>
            <li>Azure</li>
        </ul>
        <p>More detailed information for the DBV-C project is only available privately.</p>
    </div>
)


export const content = (props) => (
    <div className="work-content section-content col-xs-12 col-md-9 col-md-offset-3">
        <div className="text-box floating-box">
            <p>This rough framework outlines my process of developing web applications:</p>
            <dl>
                <dt>Identify the problem</dt>
                <dd>What is the problem the app is going to solve?</dd>
                <dd>What is the business goal?</dd>
                <dt>Understand users</dt>
                <dd>What are the user needs?</dd>
                <dt>Research and gather good ideas</dt>
                <dd>What are the good design and ideas out there?</dd>
                <dt>Design the app</dt>
                <dd>Sitemaps</dd>
                <dd>User roles</dd>
                <dd>Use cases and scenarios</dd>
                <dd>User flow</dd>
                <dd>Wireframes</dd>
                <dt>Design the database structure</dt>
                <dd>Relations between entities</dd>
                <dd>Required data</dd>
                <dt>Code the app</dt>
                <dd>Security</dd>
                <dd>Authorization and Authentication</dd>
                <dd>Deployment</dd>
                <dt>Get user feedback, and repeat.</dt>
            </dl>
        </div>
        {dbvProject()}
        <NavLink onClick={() => onScrollTo("#section-work", 0)} to={{pathname: "/", hash: "#section-work"}} className="btn-group clearfix">
            <button type="button" className="glyphicon glyphicon glyphicon-chevron-left btn-square"></button>
            <span className="btn-span ">BACK</span>
        </NavLink>
    </div>
)


export default content
