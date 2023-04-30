// Variables

let modalBtn = document.getElementById('modal-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// Event listeners

modalBtn.addEventListener('click', function(){
    modalContainer.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
    modalContainer.style.display ='none';
});