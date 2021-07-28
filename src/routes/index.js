import Footer from "../templates/Footer";
import Header from "../templates/Header";
import Home from "../pages/Home";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";
import Car from "../pages/Car";


const routes = {
    '/': Home,
    '/:car': Car
}

const router = async () => {
    const footer = null || document.querySelector('#footer');
    const header = null || document.querySelector('#header');
    console.log(footer);
    const content = null || document.querySelector('#content');
    footer.innerHTML = await Footer();
    header.innerHTML = await Header();
    let hash = getHash();
    console.log(hash);
    let route = await resolveRoutes(hash);
    console.log(route);

    let render =  routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();
}
export default router;