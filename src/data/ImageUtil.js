//import ProcessImage from 'react-imgpro';
import {ImageEditor} from 'react-native';
//import {base64Img} from 'base64-img';
import Server from '../server/Server';

const postImages = (id, pics, callback)=>{

    Server.PostImage(Server.urls.postImage, pics[0], id+'_0',(res)=>{

        if(res.result == 200){

            if(pics[1]){

                Server.PostImage(Server.urls.postImage, pics[1], id+'_1',(res)=>{
                    
                    if(res.result == 200){

                        if(pics[2]){

                            Server.PostImage(Server.urls.postImage, pics[2], id+'_2',(res)=>{
                            
                                if(res.result == 200){

                                    callback('done');
                                }
                            });
                        }else{
                            callback('done');
                        }
                    }else{
                        callback('failed')
                    }
                });
            }else{
                callback('done');
            }
        }else{
            callback('failed')
        }
    });
}

const getImages = (id, number)=>{

    let imageList = [Server.urls.getImage + `?name=${id}_0`];

    if(number > 1){
        imageList.push(Server.urls.getImage + `?name=${id}_1`);
    }

    if(number > 2){
        imageList.push(Server.urls.getImage + `?name=${id}_2`);
    }
    
    return imageList;
}

export{postImages, getImages}