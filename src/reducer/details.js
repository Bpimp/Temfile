function details(state={
    loading:true,
    data:{
        author:{
            loginname:'',
            avatar_url:''
        },
        replies:[],
        reply_count:0,
        create_at:'',
        good:true
    }
},action){
    switch (action.type){
        case "DETAILS_UPDATE":
            return {
                data:state.data,
                loading:true
            }
        case "DETAILS_UPDATE_SUCC":
            return {
                data:action.data,
                loading:false
            }
        case "DETAILS_UPDATE_ERR":
            return {
                data:{
                    author:{
                        loginname:'',
                        avatar_url:''
                    },
                    replies:[],
                    reply_count:0,
                    create_at:'',
                    good:true
                },
                loading:false
            }
        default:
            return state;
    }
}
export default details;