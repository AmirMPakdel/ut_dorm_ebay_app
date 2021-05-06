const UserSchema ={

    name:"User",
    properties:{
        _id:'string',
        token:'string',
        email:'string',
        password:'string',
        full_name:'string',
        //student_id:'string',
        //verification_code:'string',
        phone_number:{type:'string',default:''},
        telegram:{type:'string',default:''},
        instagram:{type:'string',default:''},
        university:'string',
        post_n:{type:'int',default:0},
        max_post:'int',
    }
};

export{UserSchema}