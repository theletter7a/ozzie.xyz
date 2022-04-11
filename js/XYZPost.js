class XYZPost{
    constructor(name = ''){
        var post = document.createElement('div');
        var title = document.createElement('span');
        
        post.className = 'post';
        title.className = 'post_title';

        post.style.backgroundImage = 'url(covers/'+name+'.jpg)';
        title.innerHTML = name;

        post.addEventListener('click', ()=>{
            location.pathname = 'posts/'+name.toLowerCase()+'.html'
        });
        post.appendChild(title);
        this.DOM = post;
    }
    append(element){
        element.appendChild(this.DOM);
    }
}