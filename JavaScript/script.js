import { Router } from "./routes.js"

const router = new Router()

router.add('/','/Pages/Portifólio.html')
router.add('/SobreMim','/Pages/Sobre-Mim.html')
router.add('/Certificados','/Pages/Certificados.html')
router.add(404,'/Pages/404.html')

// console.log(routes["/Certificados"]) 

router.handle() // <- ta aqui pra quando iniciar o site ja abrir na portifolios

window.onpopstate = () => router.handle()
window.route = () => router.route()