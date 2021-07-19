import React from 'react'
import Todo from './Components/Todo';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'

const App =()=>{
    return(
        <BrowserRouter>
        <div className="app">
            <Navbar/>
            <Switch>
            <Route exact path='/'/>
            <Route path='/todo' component={Todo} ></Route>
            <Route path='/contact' />
            </Switch>
        </div>
        </BrowserRouter>
    )
    }
export default App;