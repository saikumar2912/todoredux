import React, { Component } from 'react' 
import { RiCloseCircleLine,RiEdit2Fill } from 'react-icons/ri';

import {connect} from 'react-redux';

 class Delete extends Component {

 deleteHandler =(text)=>{
    console.log(text);
    const arrCopy = [...this.props.list]
    console.log(arrCopy);
    const filter=arrCopy.filter((a)=>a.id !== text)
     
   
   this.props.onDeleteTodo(filter)
  }

    render() {
      console.log(this.props.history);
        const items =this.props.list.map((a)=>{
            return (<div className='todo-row' key={a.id}>
                {a.name}
                <div className ="icons" >

                <RiCloseCircleLine  className='delete-icon'onClick={() => {this.deleteHandler(a.id)}} />

                <RiEdit2Fill className="edit-icon" onClick={()=>this.props.history.push({pathname:"/edit",state:a.id})}/>
                </div>
        </div>)
        })
        return (
            <div >
             
            {items}
             
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    // console.log(state);
    return{
          list:state.todo
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return{
        onDeleteTodo : (id)=>dispatch({
          type:'REMOVE_TODO',
          payload:id
        }),
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Delete);
