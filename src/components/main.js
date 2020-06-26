import React from 'react';
import Welcome from './welcome';
import About from './about';
import Project from './projects';
import Resume from './resume';
import Contact from './contact';
import {Switch,Route} from 'react-router-dom';

const Main = () =>(
    <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Project}/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/contact" component={Contact}/>

    </Switch>

)
export default Main;