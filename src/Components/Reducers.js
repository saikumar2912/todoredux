const initialState={
    todo:[],
}
const reducer=(state=initialState,action)=>{
    if(action.type === 'ADD_TODO'){
          return{...state,
            todo:[action.payload],
        }
    }
    else if(action.type === 'REMOVE_TODO'){
          return{...state,
            todo:action.payload
        }
    }
    else if(action.type === 'UPDATE_TODO'){
        return{...state,
            todo:action.payload,
        }

          
  }
    return state;
};
export default reducer;