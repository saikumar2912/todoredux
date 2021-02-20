import React, { Component } from 'react' 
import { RiCloseCircleLine } from 'react-icons/ri';
import SimplePopover from './Pop';
import './View.css'
import {connect} from 'react-redux';


 class Eventadd extends Component {

 deleteHandler =(text)=>{
    console.log(text);
    const arrCopy = [...this.props.list]
    console.log(arrCopy);
    const filter=arrCopy.filter((a)=>a.id !== text)
     
   
   this.props.onDeleteTodo(filter)
  }

    render() {
        const items =this.props.list.map((a)=>{
            return (<div className='list' key={a.id}>
                {a.name}
                <div className ="icons" >
                <RiCloseCircleLine  className='button'
                onClick={() => {this.deleteHandler(a.id)}} />
                <SimplePopover id={a.id} name={a.name}/>
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
  export default connect(mapStateToProps,mapDispatchToProps)(Eventadd);
