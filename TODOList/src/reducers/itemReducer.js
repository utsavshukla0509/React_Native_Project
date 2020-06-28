import {ADD_ITEM,DELETE_ITEM,EDIT_ITEM} from "../actions/index";



const initialState = {
    itemList :[],
}

const itemreducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_ITEM : 
            return{...state,
                itemList:state.itemList.concat({
                    key: action.key,
                    name: action.data
                })
            };
        case EDIT_ITEM :
            return{...state,
                itemList: state.itemList.filter((item) =>
                    item.name = item.key === action.key ? action.data : item.name)
            };
        case DELETE_ITEM :
            return{...state,
                itemList : state.itemList.filter((item) =>
                item.key !== action.key)
            };
        default: 
            return state;
    }
}


export default itemreducer;