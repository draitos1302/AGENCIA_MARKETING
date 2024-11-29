import { connect } from "react-redux"
import { Link } from "react-router-dom"
import logo_oo from 'assets/images/oo.png'
import load_oo from 'assets/images/loading.gif'

function Navbar(){

    return(
        <nav className='w-full py-4orange shadow-md fixed'>
            <div className="bg-white px-4 sm:px-6">
             <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                <div className="ml-4 mt-2">
                <img 
                    src={logo_oo}
                    width={140}
                    height={120}
                className=""/>
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                <Link to='casos'  className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Casos</Link>
                <Link to='nostros' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Nosotros</Link>
                <Link to='servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Servicios</Link>
                <Link to='carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Carreras</Link>
                <Link to='Blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Blog</Link>
                <Link to='contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4">Contacto</Link>
                <button
                    type="button"
                    className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-600 px-8 py-2 text-lg font-bold text-white shadow-sm transition duration-1000 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                 >
                    hire unf
                <img src={load_oo}className="w-8 h-3 mt-1 ml-3"/>
                </button>
                </div>
            </div>
            </div>
        </nav>
    )
}

const mapStateToProps=state=>({


})

export default connect(mapStateToProps,{

 
})(Navbar)