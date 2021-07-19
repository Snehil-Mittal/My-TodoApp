import React from 'react'
import Todo from './Components/Todo';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'

const App =()=>{
    return(
        <BrowserRouter>
        <div className="app">
            <Navbar/>
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/todo' component={Todo} ></Route>
            <Route path='/contact' component={Contact} />
            </Switch>
        </div>
        </BrowserRouter>
    )
    }
export default App;