

const dbvProject = () => (
    <div className="project text-box floating-box">
        <h3>DBV-C</h3>
        <p>Training delivery management system</p>
        <p>Design > Build > Validate = Competencies (DBV-C) is a cloud-based curriculum and training delivery management system. It provides the tools to dynamically and effectively manage continuous change in curriculum design and training delivery.</p>
        <br />
        <h4>Overview of the problem</h4>
        <p>The DBV-C is primarily designed to solve the following issues:</p>
        <ul>
            <li>Graduates from college only have a degree or diploma along with transcripts, which is not necessarily helpful for employers to determine whether the graduates have certain skills or not.</li>
            <li>A typical curriculum often does not have a way to keep track of whether all the foundational skills are taught before the advanced skills.</li>
            <li>Designing curriculums for skills needed to be delivered is complex, tedious, and time-consuming.</li>
            <li>There is a lack of a platform for training institutions to communicate with the industry in order to improve and update the skills being delivered.</li>
        </ul>
        <br />
        <h4>Overview of the users</h4>
        <p>There are five main types of application users:</p>
        <ul>
            <li>Administrators</li>
            <li>Designers design the skills for programs or courses</li>
            <li>Instructors deliver the skills and validate student learning outcomes</li>
            <li>Assistants help instructors</li>
            <li>Students view the courses, skills, and validation exercises</li>
            <li>Reviewers from related industries comment on the skills being delivered</li>
        </ul>
        <br />
        <h4>Research</h4>
        <p>Following four learning management systems are reviewed.</p>
        <ul>
            <li>Blackboard</li>
            <li>Moodle</li>
            <li>Canvas</li>
            <li>Google classroom</li>
        </ul>
    </div>
)


export const content = (props) => (
    <div className="work-content col-xs-12">
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
    </div>
)


export default content
