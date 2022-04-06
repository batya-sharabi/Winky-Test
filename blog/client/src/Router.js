import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {createBrowserHistory} from "history";
import Login from './Login';
import Dashboard from './Dashboard';

export const history=createBrowserHistory();

export default function RouterApp() {
        return (
            <>
                <Router history={history}>
                    <>
                        <Routes>
                            <Route path="/" exact element={<Login/>} />
                            <Route path="/login" exact element={<Login/>} />
                            <Route path="/dashboard" exact element={<Dashboard/>}/>
                        </Routes>
                    </>
                </Router>
            </>
        );
    }