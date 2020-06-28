export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';


let nextTodoId = 1

export const additem = (item) => ({
    type: 'ADD_ITEM',
    key: nextTodoId++,
    data: item,
  })
  
  export const edititem = (item,key) => ({
    type: 'EDIT_ITEM',
    key: key,
    data: item
  })
  
  export const deleteitem = (key) => ({
    type: 'DELETE_ITEM',
    key: key,
  })