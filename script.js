function toggleMode(){
  // O código por completo dando uma condição:
  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  //} else {
  //   html.classList.add('light')
  // }
  const html = document.documentElement
  html.classList.toggle("light")
  // O código reduzido

  //pegar a tag img 
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains('light')){
    //se tiver adicionar o light mode, adicionar nova foto
    img.setAttribute('src', './assets/avatar-mudlight.png')
  } else {
    //se tiver light 
    img.setAttribute('src', './assets/avatar.png')

  }

}