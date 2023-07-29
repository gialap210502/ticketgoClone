import Footer from '../components/Footer/Footer';
import NavHeader from '../components/headNav/headerNav';
import Nav from '../components/Nav/Nav';
export function LayoutD({children}){
    return(
        <div>
            <Nav/>
            <NavHeader/>
            {children}
            <Footer/>
        </div>
    )
}
