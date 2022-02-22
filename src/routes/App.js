import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import Index from "../containers/app/Index";
import history from './history';
import CourseRealTime from "../containers/app/CourseRealTime";
import CourseTR from "../containers/app/CourseTR";
import Courses from "../containers/app/Courses";
import Content from "../containers/app/Content";
import ContentIn from "../containers/app/ContentIn";
import LivePlane from "../containers/app/LivePlane";

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/curso-tiempo-real/:id" component={CourseRealTime}/>
                <Route exact path="/curso-no-inscrito" component={CourseTR}/>
                <Route exact path="/contenido" component={Content}/>
                <Route exact path="/cursos" component={Courses}/>
                <Route exact path="/contenido-interno" component={ContentIn}/>
                <Route exact path="/live-programado" component={LivePlane}/>
            </Switch>
        </Router>
    )
}
export default App