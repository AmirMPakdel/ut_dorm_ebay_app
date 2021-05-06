const db = require('../database/database').db;
import Server from '../server/Server';

const PostList = (isMyPosts, query, callback)=>{

    if(!isMyPosts){

        let postData = {query} // add start and end later

        Server.Post_Json(Server.urls.getPosts, postData, (data, error)=>{

            if(data != null){

                if(data.list != undefined){

                    callback(data.list);

                }else if(data.error != undefined){

                    alert(data.error);
                    callback(null);
                }

            }else if(error != null){

                alert(error);
                callback(null);
            }
        });

    }else{

        db((realm)=>{

            let user = realm.objects('User')[0];
            
            let posts = realm.objects('Post').filtered('seller == "'+user._id+'"');

            let list = [];

            for(let i  in posts){

                list.push(posts[i]);
            }

            callback(list);
        })
    }
}

export{PostList}