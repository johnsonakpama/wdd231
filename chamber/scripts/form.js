const modal = document.querySelector('.modal');
const learnButton = document.querySelector('.Learn button');
const closeButton = document.querySelector('.close button');

learnButton. addEventListener('click', () =>{
    modal. showmodal();
});

closeButton. addEventListener('click', () =>{
    modal.closest();
});