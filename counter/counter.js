//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('.value');
const buttons = document.querySelectorAll('.btn');
buttons.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        //console.log(e.currentTarget.classList); list of classes on that button
        //console.log(e.currentTarget); current button details
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){count--;}
        else if(styles.contains('increase')){count++;}
        else{count=0;}

        if(count == 0){value.style.color = 'var(--ff-secondary)'}
        else if(count >0){value.style.color = 'green'}
        else {value.style.color = 'red'}
        value.textContent = count;
    });
} );

