import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './component/navbar'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,withRouter} from 'react-router-dom';
import Welcome from './component/Welcome';
import Footer from './component/footer'
import Home from './component/home';
import singleSending from './component/single';
import Signup from './component/signup';
import Login from './component/login';
import groupSending from './component/group';
import groupManagement from './component/groupmanagement';

const Main=withRouter(({location})=>{
    return(
        <div>
        
        {
            location.pathname !=='/' && location.pathname !=='/login' && location.pathname !=='/signup' && location.pathname !=='/group/management' &&
            <Navbar />
        }
        <Route exact path="/" component={Welcome} />
        <Route path="/home" component={Home} />
        <Route path="/single" component={singleSending} />
        <Route exact path="/group" component={groupSending} />
        <Route path="/group/management" component={groupManagement} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        
        {
            location.pathname !=='/login' && location.pathname !=='/signup' && location.pathname !=='/group/management' &&
            <Footer />
        }
        </div>
        );
    });

ReactDOM.render(
    <BrowserRouter>
       <Main />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
