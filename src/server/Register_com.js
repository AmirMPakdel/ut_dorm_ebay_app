import Server from '../server/Server';
import {db} from '../database/database';
import {LoginCheck} from '../data/DataCheck';
import {SavePostsFromServer} from '../postUtil/SavePosts';

const sign_up = (signupData, callback)=>{

    // signupData -> verfication_code, email, password, full_name
    Server.Post_Json(Server.urls.signup, signupData, (data, error)=>{
        
        // data -> error, user

        if(error != null){

            alert('network error ->'+error);

        }else{

            if(data.user){

                db((realm)=>{
    
                    let userData = data.user;

                    let max_post = 

                    realm.write(()=>{
    
                        let user = {};
                        
                        user._id = String(userData._id);
                        user.token = String(userData.token);
                        user.email = String(userData.email);
                        user.password = String(userData.password);
                        user.full_name = String(userData.full_name);
                        user.university = String(userData.university);
                        user.max_post = parseInt(userData.max_post);

                        realm.create('User', user);
                    });
    
                    callback();
                });
    
            }else if(data.error){
    
                alert(data.error);
            
            }else{

                alert('mistake in Register_com->sign_up');
            }
        }
    });
} // ready for use

const sign_in = (signinData, callback)=>{

    // signinData -> email, password
    let errors = LoginCheck(signinData.email, signinData.password);

    if(errors.length == 0){

        Server.Post_Json(Server.urls.signin, signinData, (data, error)=>{

            // data -> error, user
            
            if(error != null){

                alert('network error ->'+error);

            }else{

                if(data.user){

                    db((realm)=>{

                        let junk = realm.objects('User');

                        let user = data.user;

                        realm.write(()=>{

                            realm.delete(junk);

                            realm.create('User', {

                                _id:user._id,
                                token:user.token,
                                email:user.email,
                                password:user.password,
                                full_name:user.full_name,
                                phone_number:user.phone_number,
                                telegram:user.telegram,
                                instagram:user.instagram,
                                university:user.university,
                                post_n:user.post_n,
                                max_post:user.max_post,
                            });

                        });

                        get_my_posts(user.token, callback);
                    });

                }else if(data.error){

                    alert(data.error);
                
                }else{

                    alert('mistake in Register_com->sign_in');
                }
            }
        });
    }
}// reay for test

const get_my_posts = (token, callback)=>{

    Server.Post_Json(Server.urls.getMyPosts, {token}, (data, error)=>{

        // data -> list, error

        if(error != null){

            alert('network error ->'+error);

        }else{

            if(data.list){

                SavePostsFromServer(data.list, ()=>{
    
                    callback();
                });
    
            }else if(data.error){
    
                alert('error on getting my posts :'+data.error);
            
            }else{

                alert('mistake in Register_com-> get_my_posts');
            }
        }
    });
}

export{sign_up, sign_in}