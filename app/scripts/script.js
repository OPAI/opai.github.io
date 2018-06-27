window.onload = () => {
    document.querySelector("#year").innerHTML = new Date().getFullYear();

    const menuLogo = document.querySelector("#menu-logo");
    const goTop = document.querySelector("#go-top");
    const opener = document.querySelector("#opener");
    const closer = document.querySelector("#closer");
    const menu = document.querySelector('.menu');

    opener.addEventListener('click', event => {
        menu.classList.add('active');
        menuLogo.style.display = 'block';
    });
    
    closer.addEventListener('click', event => {
        menu.classList.remove('active');
        menuLogo.style.display = 'none';
    });
    
    //Check scroll elements
    function checkScrollElements() {
        if ( document.body.getBoundingClientRect().top > -500) {
            goTop.style.display = 'none';
            menuLogo.style.display = 'none';
        } else {
            goTop.style.display = 'flex';
            menuLogo.style.display = 'block';
        }
    }
    checkScrollElements();

    //Smooth Scroll Config
    document.querySelectorAll('.link-to').forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            menu.classList.remove('active');
            scrollToItem(document.querySelector(element.href.substring(element.href.lastIndexOf('#'))));
        });
    });
    
    document.addEventListener('scroll', checkScrollElements);
};