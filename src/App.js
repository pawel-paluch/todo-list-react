import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Tasks from "./features/tasks/TasksPage";
import Task from "./features/tasks/TaskPage";
import Author from "./features/author/AuthorPage";
import { toAuthor, toTask, toTasks } from "./routing";
import Navigation from "./Navigation";


export default () => (
    <HashRouter>
        <Navigation />

        <Switch>
            <Route path={toTask()}>
                <Task />
            </Route>
            <Route path={toTasks()}>
                <Tasks />
            </Route>
            <Route path={toAuthor()}>
                <Author />
            </Route>
            <Route>
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter>
);