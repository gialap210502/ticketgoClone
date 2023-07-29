import Event from '../Home/event/displayEvent';
import SlideShow from '../Home/slideShow/slideShow';
// import EvenType from '../Home/eventtype';

function HomePage(){
    return(
        <div>
            <SlideShow/>
            {/* <EvenType/> */}
            <Event/>
        </div>
    )
}
export default HomePage;