import React from 'react'
const Tododisplay= ({todos,deleteTodo})=>{
    const Todolist = todos.length ? (
        todos.map((todo)=>{
            return(
                <div className="collection-item todo-item" key={todo.id}>
                    <span onClick={()=>{deleteTodo(todo.id)}}> {todo.content} </span>
                </div>
            )
        })
    ) : (
        <p> No Todos !! Yayyy </p>
    )

    return(
        <div className="todo collection">
            {Todolist}
        </div>
    )
}

export default Tododisplay