function list(state={
    data:[],
    loading:true
},action) {
    switch (action.type){
        case "LIST_UPDATE":
            return {
                data:state.data,
                loading:true
            }
        case "LIST_UPDATE_SUCC":
            return {
                data:action.data.data,
                loading:false
            }
        case "LIST_UPDATE_ERR":
            return {
                
            }
        default:
            return state;
    }
}
export default list;