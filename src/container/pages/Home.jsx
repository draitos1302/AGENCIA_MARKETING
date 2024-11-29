import Footer from "components/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Home(){
    return(
        <div>
            <Navbar/>
            <div className="pt-28">
                            
            Home

            <Footer/>
            </div>
        </div>
    )
}
export default Home