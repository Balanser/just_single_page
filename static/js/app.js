import Main from "./views/Main.js";
import Contact from "./views/Contact.js";
import Blog from "./views/Blog.js";
import PostView from "./views/PostView.js";

// console.log("static Js loaded")

const pathToRegex = (path) => RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
// console.log(pathToRegex("/posts/:id"))

// console.log("/posts/7".match(/^\/posts\/(.+)$/))

const getParams = (match) => {
    const values = match.result.slice(1)[0];
    const keys = match.route.path.split(":")[1]

    const paramObj = {};
    paramObj[keys]= values;

    // {id: `1`}
    return paramObj
}
const router = async () => {

    const routes = [
        { path: "/", view: Main },
        { path: "/contacts", view: Contact },
        { path: "/posts", view: Blog },
        { path: "/posts/:id", view: PostView }

    ];

    const potentialMathches = routes.map((route) => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMathches.find((match) => match.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    // console.log(potentialMathches);
    // console.log(match);

    const view = new match.route.view(getParams(match));
    document.querySelector("#app").innerHTML = await view.getHtml();

    // new match.route.view();

    await markNav(location.pathname);
};

const markNav = currPath => {
    for (let n of document.querySelectorAll(".nav__link")) {
        n.classList.remove("active");
    }
 try {
    document.querySelector(`[href="${currPath}"]`).classList.add("active");
 } catch (error) {
    document.querySelector(`[href="/posts"]`).classList.add("active");
 }
    
}
const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})





