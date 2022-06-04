var header = document.getElementById('header');
var content = document.getElementById('content');
var directions = document.getElementById('directions');

var a = [
    {
        title: 'Alhambra',
        content: 'La Alhambra fue una importante fortaleza durante la Reconquista, cuando los moros lucharon contra los españoles. Algunas partes fueron construidas por los moros, y algunas partes fueron construidas por los españoles. Esto lo convierte en una mezcla muy interesante de arquitectura. La fortaleza tiene 26 acres e incluye jardines, fuentes, edificios y torres. Asegúrate de reservar con anticipación ya que está muy ocupado.',
        directions: '<h2>Direcciones del El Ladrón de Agua a Alhambra</h2><ol><li>Sal del hotel</li><li>Dobla a la derecha</li><li>Dobla a la izquierda a Cta. Gomére</li><li>Sigue a la izquierda a Cta. Empedrada</li><li>Sigue derecho mediante La Puerta de la Justicia</li><li>¡Disfrútalo!</li></ol>'
    },
    {
        title: 'La Catedral de Granada',
        content: 'La Catedral de Granada es una catedral urbana construida sobre una antigua mezquita. Fue terminado en 1561 y es muy importante históricamente. Después de que los moros fueran expulsados de Andalucía, los españoles la construyeron para reemplazar su mezquita.',
        directions: ''
    },
    {
        title: 'Sacromonte',
        content: 'Sacromonte es un barrio en la parte norte de la ciudad. Posee un rico patrimonio histórico, debido a toda la cultura gitana. También tiene casas cueva y muchas artesanías a la venta. La mayor parte del Sacromonte se construyó después de la expulsión de los Moore.',
        directions: ''
    }
]

var curr = 0;

document.getElementById('left').addEventListener('click', ()=>{
    if(curr > 0){
        curr-=1;
        header.innerHTML = a[curr].title;
        content.innerHTML = a[curr].content;
        directions.innerHTML = a[curr].directions;
    }
});

document.getElementById('right').addEventListener('click', ()=>{
    if(curr < a.length-1){
        curr+=1;
        header.innerHTML = a[curr].title;
        content.innerHTML = a[curr].content;
        directions.innerHTML = a[curr].directions;
    }
});