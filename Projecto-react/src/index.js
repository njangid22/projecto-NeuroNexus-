import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import SubmittedProject from './views/submitted-project'
import ProjectLinkGenerated from './views/project-link-generated'
import TeacherHome from './views/teacher-home'
import About from './views/about'
import TeacherLogin from './views/teacher-login'
import StudentQuiz from './views/student-quiz'
import MakeProject from './views/make-project'
import Home from './views/home'
import IndividualProject from './views/individual-project'
import ProjectSubmitted from './views/project-submitted'
import StudentLogin from './views/student-login'
import Register from './views/register'
import GiveProject from './views/give-project'
import MarksGiven from './views/marks-given'
import EmailProjectLink from './views/email-project-link'
import StudentHome1 from './views/student-home1'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={SubmittedProject} exact path="/submitted-project" />
        <Route
          component={ProjectLinkGenerated}
          exact
          path="/project-link-generated"
        />
        <Route component={TeacherHome} exact path="/teacher-home" />
        <Route component={About} exact path="/about" />
        <Route component={TeacherLogin} exact path="/teacher-login" />
        <Route component={StudentQuiz} exact path="/student-quiz" />
        <Route component={MakeProject} exact path="/make-project" />
        <Route component={Home} exact path="/" />
        <Route component={IndividualProject} exact path="/individual-project" />
        <Route component={ProjectSubmitted} exact path="/project-submitted" />
        <Route component={StudentLogin} exact path="/student-login" />
        <Route component={Register} exact path="/register" />
        <Route component={GiveProject} exact path="/give-project" />
        <Route component={MarksGiven} exact path="/marks-given" />
        <Route component={EmailProjectLink} exact path="/email-project-link" />
        <Route component={StudentHome1} exact path="/student-home1" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
