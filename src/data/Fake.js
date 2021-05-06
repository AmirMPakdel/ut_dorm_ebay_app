import {db} from '../database/database';

const createUser = (callback)=>{

    db((realm)=>{

        let users = realm.objects('User');

        if(users.length == 0){

            realm.write(()=>{
                const user = realm.create('User',{
                _id:'123',
                token:'someToken',
                username:'amir',
                password:'amir77',
                name:'AmirMohammad',
                phoneNumber:'0911',
                registered:true,
                myPosts:['1456','45546'],
                img_url:'https://dkstatics-public.digikala.com/digikala-products/3529639.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60'
                });
            })

        }else{

            //alert("user number : "+users.length);
        }
    })

    callback();
};

const createPosts = (number, isMyPost, callback)=>{

    db((realm)=>{

        realm.write(()=>{

            let posts = realm.objects('Post');

            realm.delete(posts);
            
            let seller_name= "ali";
            let seller_username= "ali76";
            let seller_phoneNumber= "09123";
            
            if(isMyPost === true){
                
                seller_name="AmirMohammad";
                seller_username="amir";
                seller_phoneNumber="0911"
            }

            for(let i=0; i<number; i++){


                realm.create('Post',{
                    _id:"post"+i,
                    date:new Date(),
                    seller_name:seller_name,
                    seller_username:seller_username,
                    seller_phoneNumber:seller_phoneNumber,
                    category:'book',
                    name:'ریاضی 2',
                    info:'asdasdasdasdasdasdasdasdasd',
                    price:15000,
                    accessType:'unisex',
                    img1_url:'https://dkstatics-public.digikala.com/digikala-products/3529639.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
                    img2_url:'https://dkstatics-public.digikala.com/digikala-products/3529639.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
                    img3_url:'https://dkstatics-public.digikala.com/digikala-products/3529639.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60'
                })
            }

            callback();
        })

    })
}

export{createUser, createPosts}