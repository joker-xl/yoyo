const defaultstate={
    inputValue:"aaaa"
}

const reducer = function(state=defaultstate,action){
  if(action.type==='changeInput'){
      let newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value;
      return newState
  }
  return state
}


export default reducer

