window.addEventListener("DOMContentLoaded" , function(){

document.querySelectorAll('.categories button').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.target;
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  });
});




});

