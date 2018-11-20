Posts=new Mongo.Collection('posts');
Comments=new Mongo.Collection('comments');
Categories=new Mongo.Collection('categories');

//Routing

Router.configure({

	layoutTemplate:'main'
});


Router.route('/', {
    name: 'home',
    template: 'home'
});


Router.route('/addPost',{

name:"addPost"
}
);

Router.route('/allPosts',{

name:"allPosts"
}
);

Router.route('/categorie/:_id', {
    template: 'categoriePage',
    data: function(){
        var currentCategorie = this.params._id;
        return Categories.findOne({ _id: currentCategorie });
    }
});

Router.route('/recentPost',{

name:"recentPost"
}
);

Router.route('/blogContent',{

name:"blogContent"
}
);
