const initialState = {
  list: [],
  loading:false
};

const emplopyeereducer = (state = initialState, action) => {
  switch (action.type) {
    case "READ_REQUEST":   
    // console.log(action.payload);
      return {
        ...state,
        loading:true      
      };

      case "READ":   
    // console.log(action.payload);
      return {
        ...state,
         list:action.payload,
         loading:false
      };
      case "READ_ERROR":   
    // console.log(action.payload);
      return {
        ...state,
         list:action.payload,
         loading:false
      };
      
    case "CREATE":
      // const { id, data } = action.payload;   
      return {
        ...state,
        list: [
          {
            id: action.payload.id,
            data: action.payload.data
          },
          ...state.list,
        ],
      };
      break;
    case "UPDATE":
      return {
        ...state,
        list: [
          {
            id: action.payload.id,
            data: action.payload.data,
          },
          ...state.list,
        ],
      };
      break;
    case "DELETE":
      const newlist = state.list.filter((ele) => {
        return ele.id !== action.id;   
      });
      return {
        ...state,
        list: newlist,  
      };
      break;
    default:
      return state;
  }
};

export default emplopyeereducer;
