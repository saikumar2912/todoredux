import React,{useState} from 'react';
import Popover from '@material-ui/core/Popover';
import { RiEdit2Fill } from 'react-icons/ri'
import './View.css'
import {connect} from 'react-redux';

 function SimplePopover(props) {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
 const [Update,setUpdate]=useState({id:props.id,name:props.name});

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const updateHandler =(text)=>{
    // console.log(text);
    const arrCopy = [...props.list]
    // console.log(arrCopy);
   arrCopy.forEach((e)=>{
     if(e.id === text.id){
       e.name =text.name
     }
   })
   props.onUpdateTodo(arrCopy)
       }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
const hello =( <div>
        
         <RiEdit2Fill className="pop" aria-describedby={id} variant="contained" color="primary" onClick={handleClick}/>
        

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <input className='input' type="text" onChange={(e)=> setUpdate({id:props.id,name:e.target.value})}></input>
        <button  classsName='update' onClick={()=>{updateHandler(Update)}}> update </button>
      </Popover>
</div>);
  return (
    <div>
      {hello}
     
    </div>
  );
}
const mapStateToProps=(state)=>{
  // console.log(state);
  return{
        list:state.todo
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      onUpdateTodo : (Update)=>dispatch({
        type:'UPDATE_TODO',
        payload:Update
        
      }),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SimplePopover);