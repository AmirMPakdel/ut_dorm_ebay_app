const PostSchema ={

    name:'Post',
    properties:{
        _id:'string',
        university:'string',
        seller:'string',
        category:'string',
        title:'string',
        date:'date',
        info:'string',
        price:'int',
        access_type:'string', // next update
        com_type:'string',
        com_id:'string',
        date:'date',
        pic_n:'int',
        valid:'bool',
        buyers:'int', // next update
    }
}

export{PostSchema}