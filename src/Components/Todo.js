import React from 'react'
import Tododisplay from './Tododisplay'
import Addtodo from './Addtodo'

class Todo extends React.Component{
    state = {
        todos: [
           {id:1,content:'Have some water'},
            {id:2,content:'Buy Vegtables'}
        ]
    }

    Addtodo=(todo)=>{
        todo.id= Math.random()
        let todos = [...this.state.todos,todo]
        this.setState(
           {
            todos: todos
           } 
        )
    }

    deleteTodo =(id)=> {
        let todos = this.state.todos.filter(todo =>{
            return todo.id !== id
        })
        this.setState({
            todos: todos
        })
    }
    render(){
        return(
            <div className='todo-app container'>
                <h1 className='center blue-text'>My Todos</h1>
                <Tododisplay todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <Addtodo addtodo={this.Addtodo}/>
            </div>
        )
    }
}
export default Todo;