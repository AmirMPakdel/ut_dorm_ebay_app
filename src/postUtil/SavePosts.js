import {db} from '../database/database';

const SavePostsFromServer = (postList, callback)=>{

    db((realm)=>{

        realm.write(()=>{

            postList.forEach(element => {
        
                realm.create('Post', element);
            });
        });

        alert("done");

        callback();
    });
}

export{SavePostsFromServer};
