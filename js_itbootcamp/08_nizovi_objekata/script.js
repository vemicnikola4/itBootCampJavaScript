//Objekti u nizu

let arrBlogs = [
    {title:"Moj prvi blog",likes:30,dislikes:1},
    {title:"Moj drugi blog!",likes:55,dislikes:12},
    {title:"Moj treci blog",likes:178,dislikes:4},
    {title:"Moj cetvrti blog",likes:22,dislikes:18},
];
console.log(arrBlogs);

// arrBlogs.forEach(element => {
//     console.log(`Naslov: ${element.title}. Likes: ${element.likes}. Dislikes: ${element.dislikes} .`);
    
// })
arrBlogs.forEach(element => {
    console.log(`Naslov: ${element['title']}. Likes: ${element['likes']}. Dislikes: ${element['dislikes']} .`);
    
})
//sa forom
for ( let i = 0; i < arrBlogs.length; i++){
    console.log(`Naslov: ${arrBlogs[i]['title']}. Likes: ${arrBlogs[i]['likes']}. Dislikes: ${arrBlogs[i]['dislikes']} .`);
    // console.log(arrBlogs[i]['title']);
}

let pozOcenjeniBlogovi = ( niz => {
    niz.forEach ( element => {
        if ( element.likes > element.dislikes ){
            console.log(element.title);
        }
    })
    
});

pozOcenjeniBlogovi(arrBlogs);

//arrow fnkc koja prosledjuje niz a ispisuje naslove onih koji imaju najmanje diuplo vise poz nego neg komentara
let duploVisePozKom = ( niz => {
    niz.forEach ( element => {
        if ( element.likes > element.dislikes * 2 ){
            console.log(element.title);
        }
    })
    
});
duploVisePozKom(arrBlogs);

let titleZavrsavaSaUzv = ( niz => {
    niz.forEach ( element => {
        if ( element.title.slice(-1) == "!"){
            console.log(element.title);
        }
    })
    
});
console.log("Naslovi blogova koji se yavrsavaju sa uzvicnikom")
titleZavrsavaSaUzv(arrBlogs);
let blog1 = {
    title:"Moj prvi blog",likes:30,dislikes:1

}
let blog2 = {
    title:"Moj drugi blog!",likes:55,dislikes:12


}
let blog3 = {
    title:"Moj treci blog ",likes:77,dislikes:112


}
let blog4 = {
    title:"Moj drugi blog 4",likes:12,dislikes:8


}
let user1 = {
    username :"Nikola VEmic",
    age :29,
    blogs :[blog1,blog3],
    logBlogs : function(){
        this.blogs.forEach(element => {
            console.log(element.title);
        })
    }
};
let user2 = {
    username :"Milica Zarija",
    age :24,
    blogs :[blog2],
    logBlogs : function(){
        this.blogs.forEach(element => {
            console.log(element.title);
        })
    }
};
let users = [
    user1,
    user2
]
user1.logBlogs();
//klase sabloni od kojih se prave objekti


console.log("Blogovi sa 50 i vise lajkova")
users.forEach(user => {
    let userBlogs = user.blogs;
    userBlogs.forEach( b => {
        if ( b.likes > 50 ){
            console.log(b.title);
        }
    });
});

users.forEach(user => {
    let userBlogs = user.blogs;
    let blogLikes = 0;
    userBlogs.forEach( b => {
        blogLikes += b.likes;
    });
    if ( blogLikes > 100 ){
        console.log(user.username);
    }
});
