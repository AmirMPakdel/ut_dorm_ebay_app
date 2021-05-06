
export default class Server{

    static serverAddress = 'http://192.168.1.37:5000';

    static urls = {

      signup:Server.serverAddress+'/api/signup',
      signin:Server.serverAddress+'/api/signin',
      newPost:Server.serverAddress+'/api/newpost',
      getPosts:Server.serverAddress+'/api/getposts',
      getMyPosts:Server.serverAddress+'/api/getmyposts',
      //viewPost:Server.serverAddress+'/api/viewpost',
      editPost:Server.serverAddress+'/api/editpost',
      deletePost:Server.serverAddress+'/api/deletepost',
      postImage:Server.serverAddress+'/api/postpic',
      getImage:Server.serverAddress+'/api/getimage',
    }

    static Get_Json(url, callback){

      fetch(url).then((res)=>{

        let jsonObject = JSON.parse(res._bodyText);

        callback(jsonObject, null)

      }).catch((err)=>{

        callback(null, err);

      })

      //EXAMPLE
      /* this.Get_Json(this.url, (res, err)=>{
        if(err){
          alert(err);
        }else {
          alert(res.What);
        }
      })*/
    }

    static Post_Json(url, json, callback){

      let stringed_json = JSON.stringify(json);

      fetch(url, {
          method: 'POST',
          headers:{"Content-Type":"application/json"},
          body: stringed_json,

      }).then((res)=>{

        let json = JSON.parse(res._bodyText);

        callback(json, null);

      }).catch((err)=>{

        callback(null, err);

      });

      //EXAMPLE
      /*let json = {"test":"Did you get the Post?"}
      this.Post_Json(this.url, json, (res,err)=>{

        if(err){

          alert(err);

        }else{

          alert(res.test);
        }
      })*/
    }

    static PostImage(url, base64, name, callback){
      
      let stringed_json = JSON.stringify({data:base64, name:name});

      fetch(url, {
          method: 'POST',
          headers:{"Content-Type":"application/json"},
          body: stringed_json,

      }).then((res)=>{

        let json = JSON.parse(res._bodyText);

        callback(json, null);

      }).catch((err)=>{

        callback(null, err);

      });
    }
}
