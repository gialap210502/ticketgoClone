import HomePage from "../Components/Home";
import Register from "../Components/Register";
import EventMusic from "../Components/MusicPage/Music";
import EventSport from "../Components/SportPage/Sport";
import EventArt   from "../Components/ArtPage/Art";
import EventTour  from "../Components/TourPage/Tour"
import EventDetails from "../Components/EventDetails/EventDetails";
import Order from "../Components/order/Order";
import HistoryOrder from "../Components/HistoryOrder/HistoryOrder";
const publicRoutes = [
    {path:'/', component:HomePage},
    {path:'/register', component:Register, layout:null}, 
    {path:'/event/category/Music', component:EventMusic},
    {path:'/event/category/Sport', component:EventSport},
    {path:'/event/category/Art', component:EventArt},
    {path:'/event/category/Tour', component:EventTour },
    {path:'/event/:eventId', component:EventDetails},
    
    {path:'/Order', component:Order},
    {path:'/HistoryOrder', component:HistoryOrder}
];

export {publicRoutes}