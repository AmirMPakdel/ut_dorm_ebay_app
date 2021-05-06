import {combineReducers, bindActionCreators} from 'redux';
import {getImages} from '../data/ImageUtil';

const viewPost_init_state = {post:{images:{}}}

export function viewPost(state=viewPost_init_state, action){

    if(action.type === "ViewPost"){

        let newState = Object.assign({}, state);

        action.payload.images = getImages(action.payload._id, action.payload.pic_n);
        
        newState.post = action.payload;

        return newState;
    }

    return state;
}

const pics = {

    turn:1,// which pic should be filled now
    1:{state:"empty", uri:"", data:""},
    2:{state:"empty", uri:"", data:""},
    3:{state:"empty", uri:"", data:""}
}

export function changePics(state = {pics}, action){

    if(action.type === "add"){

        let newState = Object.assign({}, state);

        let index = action.payload.index;

        // if you change the newState.pic directly and set it's property the component wont rerender!
        let pics = Object.assign({},newState.pics);
        pics[index].state = "full";
        pics[index].uri = action.payload.uri;
        pics[index].data = action.payload.data;
        pics.turn += 1;

        newState.pics = pics;

        return newState;
    
    }else if(action.type === "remove"){

        let newState = Object.assign({}, state);

        let index = action.payload.index;

        // if you change the newState.pic directly and set it's property the component wont rerender!
        let pics = Object.assign({},newState.pics);

        let emptyIndex = {state:"empty", uri:"", data:""};

        pics.turn -= 1;

        switch(index){

            case 1:

                pics[1] = pics[2];
                pics[2] = pics[3];
                pics[3] = emptyIndex;

            break;

            case 2:

                pics[2] = pics[3];
                pics[3] = emptyIndex;

            break;

            case 3:

                pics[3] = emptyIndex;

            break;
        }

        newState.pics = pics;

        return newState;
    }

    return state;
}


const postList = {
    list:[],
    query:{}
}
export function changePosts(state = {postList}, action){

    switch(action.type){

        case "update":

            let postList = Object.assign({}, action.payload.postList);
            let newState = Object.assign({}, state);
            newState.postList = postList;

        return newState;

        default:
        return state;
    }
}

export function refresh(state = {home:null, myPosts:null}, action){

    let newState = null;

    switch(action.type){

        case "home":
            
            newState = Object.assign({}, state); 
            newState.home = action.payload.refreshFunc;

        return newState;

        case "myPosts":

            newState = Object.assign({}, state); 
            newState.myPosts = action.payload.refreshFunc;

        return newState;    

        default:
        return state;
    }
}

export function setEditPost(state={post:null}, action){

    

    let newState = null;

    switch (action.type) {

        case "setEditPost":

            newState = Object.assign({},state);
            newState.post = action.payload.post;

            // TODO::
            /*let pics = {

                turn:newState.post.pic_n,
                1:{state:"full", uri:"", data:"server"},
                2:{state:"empty", uri:"", data:""},
                3:{state:"empty", uri:"", data:""}
            }

            if(newState.post.pic_n > 1){
                pics[2].state = "full";
                pics[2].data="server";

            }*/

            return newState;
    
        default:
            return state;
    }
}

const Reducers = combineReducers({

    viewPost,
    changePics,
    changePosts,
    refresh,
    setEditPost,
});

export default Reducers;