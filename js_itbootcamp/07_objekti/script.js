//OBjekti
//Slozeni tip podataka
//U sebi sadrzi vise razlicitih podataka(prostih ili slozenih)
//ima osobine atripute (string,number)
//i funkcionalnosti metode
let blog = {
    title : "Moj blag",
    content : "tekst",
    author : "Pera"
};
console.log(blog);
console.log(blog.title);
console.log(blog['content']);
console.log(typeof blog);
blog.title = "Moj prvi blog";
console.log(blog.title);

let user1 = {
    userName :"Nikola Nikolic",
    age : 29,
    blogs: ["Naredba if","Nizovi","Objekti"],
    logIn : function(){
        console.log("Ulogovani ste");
    },
    logBlogs : function(){
        //u objektima mozemo da pristupamo propertima drugih objekata
        this.blogs.forEach(element=>{
        console.log(element);

        })
    }
};
user1.logIn();
user1.logBlogs();
console.log(this);