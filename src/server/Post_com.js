import {db, getUser, getToken, createPost} from '../database/database';
import Server from '../server/Server';
import {PostCheck} from '../data/DataCheck';
import {postImages} from '../data/ImageUtil';
import {universities} from '../consts/universities';

const SendNewPost = (post, pics, callback)=>{

    alert(JSON.stringify(post));

    getToken((token)=>{

        let pic_n = 0;
        let pic_data = [];

        for(let i in pics){
            if(pics[i].state == "full"){
                pic_n += 1;
                pic_data.push(pics[i].data);
            }
        }

        post.pic_n = pic_n;
        post.university = universities.tehran_fouman;// change next update
        post.valid = false;

        if(token){

            let postData = {
                token,
                university:post.university,
                category:post.category,
                title:post.title,
                info:post.info,
                price:post.price,
                com_type:post.com_type,
                com_id:post.com_id,
                pic_n: post.pic_n, // min 1, max 3
                valid:post.valid,
            }

            let errors = PostCheck(postData);

            if(errors.length == 0){

                Server.Post_Json(Server.urls.newPost, postData, (data, error)=>{

                    if(data){
        
                        if(data._id && data.date){

                            postImages(data._id, pic_data, (res)=>{

                                if(res == 'done'){

                                    postData._id = data._id;
                                    postData.date = data.date;

                                    createPost(postData, (res)=>{

                                        callback();
                                    });
                                    
                                }else{
                                    alert('error on posting images'+res)
                                }
                            });
                            

                        }else if(data.error){
        
                            alert(data.error);
                        }
        
                    }else if(error){
        
                        alert(error);
                    }
                });

            }else{

                let message="error : \n";

                for(let i in errors){

                    message+=errors[i].info+'\n';
                }

                alert(message);
            }

        }else{

            alert('no token');
        }
    });
}

const DeletePost = (_id, callback)=>{

    getToken((token)=>{

        Server.Post_Json(Server.urls.deletePost, {token, _id}, (data, error)=>{

            if(data != null){

                if(data.result != undefined){

                    callback();
                }else{
                    callback(data.error);
                }

            }else{

                callback(error);
            }
        });
    });
}

export{SendNewPost, DeletePost};