const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const bg = document.querySelector('.general');
const title = document.querySelector('h1');
const textCard = document.querySelector('p');
const colorTitle = '#FFA500';

card1.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/Museo del Louvre.jfif')";
    title.innerText = 'Museo del Louvre';
    textCard.innerText = 'El Museo del Louvre es el museo nacional de Francia consagrado tanto a las bellas artes como a la arqueología y las artes decorativas anteriores al impresionismo. Está ubicado en París, la capital del país, en el antiguo palacio real del Louvre. ';
});
card2.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/Restaurante.jfif')";
    title.innerText = 'Le vent d Amor';
    textCard.innerText = 'Le vent d Armor Restaurante sofisticado que sirve platos gourmet y se especializa en vinos selectos y en mariscos y pescados.'
})
card3.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/torre.png')";
    title.innerText = 'Torre Eiffel';
    textCard.innerText = 'Fue construida en 1889 para la Exposición Universal, la Torre Eiffel se convirtió en el principal símbolo de París y es el monumento más visitado del mundo. La Torre Eiffel es una construcción de hierro de 300 metros de altura que fue creada para la Exposición Universal de París de 1889.';
})
card4.addEventListener('click', () =>{
    bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url('img/catedra.jfif')";
    title.innerText = 'Catedral de Notre Dame';

    textCard.innerText = 'La catedral de Notre Dame es una catedral de culto católico, sede de la archidiócesis de París, la capital de Francia. Dedicada a la Virgen María, madre de Jesucristo, se sitúa en la pequeña isla de la Cité, rodeada por las aguas del río Sena.';
})


const menuMobile = document.querySelector('.menu-mobile');
const links = document.querySelector('.links');
const linksItens = document.querySelectorAll('.links a');

menuMobile.addEventListener('click', () => {
    links.classList.toggle('active');
});


linksItens.forEach((linksItem) => {
    linksItem.addEventListener('click', () => {
        links.classList.toggle('active');
    })
})