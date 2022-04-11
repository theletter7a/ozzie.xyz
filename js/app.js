fetch('posts.json').then(res=>res.json()).then(data=>{
    data.forEach(e=>{
        var element = new XYZPost(e);
        element.append(document.getElementById('content'));
    });
});