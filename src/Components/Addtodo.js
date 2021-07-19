import React from 'react'

class Addtodo extends React.Component{
    state={
        content:''
    }

    handleChange =(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    } 

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addtodo(this.state);
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <div className="addtodo row">
                <form onSubmit={this.handleSubmit} >
                <div className="col s6">
                    <label className="black-text">Add new Todo</label>
                    <input type='text' id="content" onChange={this.handleChange} required value={this.state.content}></input>
                </div>
                <div className="col s6">
                    <button onClick={this.HandleSubmit} type="submit">
                         Add it!
                    </button>
                </div>
                </form>
                </div>
        )
    }
}

export default Addtodo;