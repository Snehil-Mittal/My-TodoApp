import React from 'react'

class Addtodo extends React.Component{
    state={
        content:null
    }

    handleChange =(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    } 

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addtodo(this.state);
    }
    render(){
        return(
            <div className="addtodo">
                <form onSubmit={this.handleSubmit} >
                    <label className="black-text">Add new Todo</label>
                    <input type='text' id="content" onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }
}

export default Addtodo;