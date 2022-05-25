[...document.getElementsByTagName('img')].forEach(e=>{
    e.addEventListener('click', f=>{
        location.href = e.src;
    })
})