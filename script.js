let stars = document.getElementById('stars'); 
let moon = document.getElementById('moon'); 
let mountains3 = document.getElementById('mountains3'); 
let mountains4 = document.getElementById('mountains4'); 
let boat6 = document.getElementById('boat6');
let river5 = document.getElementById('river5');  
let mounatin7 = document.getElementById('mounatin7'); 

let nouvil = document.querySelector('.nouvil');

window.onscroll = function()
{
    let value = scrollY; 
    stars.style.left = value + 'px';
    moon.style.top = 4  * value + 'px';
    mountains3.style.top = 1 * value + 'px';
    mountains4.style.top = 0.8 * value + 'px';
    boat6.style.left = 3 * value + 'px';
    river5.style.top = 1 * value + 'px';
    nouvil.style.fontSize = value + 'px';
   
    nouvil.style.display = 'block';
    if (scrollY >= 100) {
        nouvil.style.fontSize = 100 + 'px';
        nouvil.style.position = 'fixed';
        if (scrollY >= 470) {
            nouvil.style.display = 'none';
        }
        else {
            nouvil.style.display = 'block';
        }
    }
    if (scrollY > 70)
    {
        document.querySelector('.main').style.background = 'linear-gradient(#346991,#10001f)';
    }
    else 
    {
    document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
    }
}  




    