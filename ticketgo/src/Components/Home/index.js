import Event from '../Home/event/displayEvent';
import SlideShow from '../Home/slideShow/slideShow';
import TypeEvent from '../Home/typeEvent/typeEvent';
function HomePage(){
    return(
        <div>
            <SlideShow/>
            <TypeEvent/>
            <Event/>
        </div>
    )
}
export default HomePage;