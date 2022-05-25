[...document.getElementsByClassName('main-section')].forEach(e=>{
    e.addEventListener('click', ()=>{
        location.href += 'sections/'+e.id+'.html';
    })
});