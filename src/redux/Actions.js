export function viewPostAction(post){

    return{
        type:"ViewPost",
        payload: post,
    }
}

export function AddPicAction(index, uri, data){

    return{
        type:"add",
        payload: {index, uri, data},
    }
}

export function RemovePicAction(index){

    return{
        type:"remove",
        payload: {index},
    }
}

export function UpdatePostList(postList){

    return{
        type:"update",
        payload:{postList}
    }
}

export function refreshAction(which, refreshFunc){

    return{
        type:which,
        payload:{refreshFunc}
    }
}

export function setEditPostAction(post){

    return{
        type:"setEditPost",
        payload:{post}
    }
}