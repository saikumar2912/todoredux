import React,{useState} from 'react';
import Popover from '@material-ui/core/Popover';
import {connect} from 'react-redux';

 function SimplePopover(props) {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
 const [Update,setUpdate]=useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const updateHandler =(id,text)=>{
    // console.log(text);
    const arrCopy = [...props.list]
    // console.log(arrCopy);
   arrCopy.forEach((e)=>{
     if(e.id === id){
       e.name =text
     }
   })
   props.onUpdateTodo(arrCopy)
       }
       const {location:{state}}=props;

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
const hello =( <div>
        
         <button className="update" aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>UPDATE </button>
        

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
        <input type="text" onChange={(e)=> setUpdate(e.target.value)}></input>
        <button   onClick={()=>{updateHandler(state,Update);
          props.history.goBack()}}> update </button>
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