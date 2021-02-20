import React, { Component } from 'react'
import './View.css'
import {connect} from 'react-redux';


 class Forms extends Component {
    constructor(props){
        super(props);
        this.state={
            items:" ",
        };
    }
    render() {
        const {items}=this.state;
        
        return (
        
            <div className='' id='todo'>
                <h1> <center> TODO LIST</center></h1>
                
                <input type="text"placeholder="Enter text"
                onChange={(e) => this.setState({items:e.target.value})}
                
                value={items}
                />
                <button type="submit" 
                onClick={()=>{this.props.onAddTodo(items);
                this.setState({items:" "})
                }}> Add</button>    
                 
                </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onAddTodo : (user)=>dispatch({
          type:'ADD_TODO',
          payload:{
            id:Math.round(Math.random()*1000),
            name:user
          }
        })
    }
  }
  
  export default connect(null,mapDispatchToProps)(Forms);