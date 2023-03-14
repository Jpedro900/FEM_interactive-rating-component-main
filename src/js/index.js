
const Rate = document.querySelectorAll('.button');
const Rating = document.getElementById('rating');


Rate.forEach((button) => {
    button.addEventListener('click', () => {
        
        const SelectedButton = document.querySelector('.marked');
        SelectedButton.classList.remove('marked');
        button.classList.add('marked');
    })
})




