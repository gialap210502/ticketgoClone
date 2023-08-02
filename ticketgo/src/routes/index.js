import HomePage from "../Components/Home"
import Register from "../Components/Register"
import EventMusic from "../Components/amNhacpage/Music"
import EventDetails from "../Components/EventDetails/EventDetails"
import Order from "../Components/order/Order"
const publicRoutes = [
    {path:'/', component:HomePage},
    {path:'/register', component:Register, layout:null}, 
    {path:'/event/category/am-nhac', component:EventMusic},
    {path:'/event/tenEvent', component:EventDetails},
    {path:'/Order', component:Order}
];

export {publicRoutes}