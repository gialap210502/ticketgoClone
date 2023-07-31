import HomePage from "../Components/Home"
import Register from "../Components/Register"
const publicRoutes = [
    {path:'/', component:HomePage},
    {path:'/register', component:Register, layout:null},
];

export {publicRoutes}