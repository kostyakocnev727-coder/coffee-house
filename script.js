const openMenuBtn = document.getElementById("openMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const fullMenuModal = document.getElementById("fullMenuModal");

openMenuBtn.addEventListener('click',function() { 
    fullMenuModal.classList.add('active');
});

closeMenuBtn.addEventListener('click',function() { 
    fullMenuModal.classList.remove('active');
});

fullMenuModal.addEventListener('click', function(event) { 
    if (event.target === fullMenuModal) { 
        fullMenuModal.classList.remove('active');
    }
});