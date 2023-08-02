import Header from '../Components/Header/Header';
import Nav from '../Components/Nav/Nav';
export function LayoutManager({children}){
    return(
        <div>
            <Nav/>
            <Header/>
            {children}
        </div>
    )
}