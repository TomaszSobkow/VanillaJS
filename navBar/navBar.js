const navTaggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navTaggle.addEventListener('click', function(){
    console.log(links.classList)
// if(links.classList.contains('show-links')){
// links.classList.remove('show-links')
// }else{
//     links.classList.add('show-links')
// }

//ternary 
// links.classList.contains('show-links') ? 
//     links.classList.remove('show-links'): links.classList.add('show-links')

//one line version of toggle
links.classList.toggle('show-links');
});
