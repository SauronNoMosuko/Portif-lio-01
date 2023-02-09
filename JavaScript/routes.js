export class Router {
  routes = {}

  add(routeName,link) {
    this.routes[routeName] = link
  }
  
  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  }

  handle() {
 
    const { pathname } = window.location
    const route = this.routes[pathname] ||this.routes[404]
    //^^^ a mesma coisa ^^^ const pathname = window.location.pathname
    // const { pathname, host, href, port } = window.location <- mais uma forma de usar e o por que a gente desestrutura.
  
    fetch(route).then((data) => {
      return data.text()  // <- tira do jogo, e retorna uma promessa, then = então
    }).then(html => {
      document.querySelector('#app').innerHTML = html // <- Pega o html do data e adiciona na div de id #app
    }) 
  
    console.log(route)
  }
}
