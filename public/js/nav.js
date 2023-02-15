//barra de navegacion
const menuNav = document.querySelector('.nav__lista');
//boton
const botonNav = document.querySelector('.btn-mobil');

botonNav.addEventListener('click', () => {
    const visibility = menuNav.getAttribute('data-visible')

    console.log(visibility)

    if (visibility === "false") {

        menuNav.setAttribute('data-visible', true)
        botonNav.setAttribute('aria-expanded', true)

    } else if (visibility === "true") {

        menuNav.setAttribute('data-visible', false)
        botonNav.setAttribute('aria-expanded', false)

    }
})
//SUBMENU DESPLEGABLE
/*
const subMenuBtn = document.querySelectorAll('.submenu-btn');
for (let i=0; i < subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener('click', function() {
        if(window.innerWidth < 870){
            const submenu = this.nextElementSibling;
            const height = submenu.scrollHeight;
           // if (submenu.clasList.contains('desplegar')){
          //      submenu.clasList.remove('desplegar');
            //    submenu.removeAtribute('style');
          //  } else {
           //     submenu.clasList.add('desplegar');
                submenu.style.height = height + "px";
           // }
            
        }
    });
}
*/