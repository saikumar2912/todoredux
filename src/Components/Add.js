import React, { Component } from 'react'
import {connect} from 'react-redux';
import Delete from './Delete';
 
 class Add extends Component {
    constructor(props){
        super(props);
        this.state={
            items:" ",
        };
    }
    render() {
        const {items}=this.state; 
        console.log(this.props);
        return (
        
            <div>
                
                
                <input className="add-input" type="text" placeholder="Enter text"
                onChange={(e) => this.setState({items:e.target.value})}
                
                value={items}
                />
                <button className="add-button" type="submit" 
                onClick={()=>{this.props.onAddTodo(items);
                this.setState({items:" "})
                }}> Add</button>    
                 <Delete history={this.props.history}/>
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
  
  export default connect(null,mapDispatchToProps)(Add);