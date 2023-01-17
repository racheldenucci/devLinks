function toggleMode(){
    const html = document.documentElement

   /* if(html.classList.contains('light')){     //if <html class="light">
        html.classList.remove('light')
    }
    else{
        html.classList.add('light')
    }*/
    html.classList.toggle('light')

    const img = document.querySelector(".profile img")      //selecionar elemento do html (mesmo seletor do css)

    if(html.classList.contains('light')){
        img.setAttribute("src", "./images/avatar-lightmode.jpg")    //setAttribute("attribute", "novo valor")
    }
    else{
        img.setAttribute("src", "https://avatars.githubusercontent.com/u/76690236?v=4")
    }
}