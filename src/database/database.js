const realm = require('realm');
import {PostSchema} from '../models/Post';
import {UserSchema} from '../models/User';

const db = (callback)=>{

    realm.open({schema:[UserSchema,PostSchema]}).then((realm)=>{

        callback(realm);
    })
}

const getUser = (callback)=>{

    db((realm)=>{

        let user = realm.objects('User')[0];

        callback(user);
    })
}

const getToken = (callback)=>{
    
    db((realm)=>{

        let user = realm.objects('User')[0];

        if(user != undefined){

            callback(user.token)

        }else{

            callback(false)
        }
        
    })
}

const createPost = (post, callback)=>{

    db((realm)=>{

        let user = realm.objects('User')[0];

        alert(user._id);

        let dbPost ={
            _id:post._id,
            seller:user._id,
            date:post.date,
            university:post.university,
            category:post.category,
            title:post.title,
            info:post.info,
            price: parseInt(post.price),
            com_type:post.com_type,
            com_id:post.com_id,
            pic_n: post.pic_n, // min 1, max 3
            valid:post.valid,
            access_type:"uni",// next update
            buyers:0,// next update
        }

        realm.write(()=>{

            realm.create('Post', dbPost);

            callback();
        });
    });
}

const deletePost = (_id, callback)=>{

    db(realm=>{

        let post = realm.objects('Post').filtered(`_id == '${_id}'`)[0];

        realm.write(()=>{

            realm.delete(post);
        });

        callback();
    });
}

export{db, getUser, getToken, createPost, deletePost};