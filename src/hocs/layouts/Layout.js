import { Children } from "react";
import { connect } from "react-redux";

function Layout({Children}){
    return
        <div>
            
            {Children}
            
        </div>

}

const mapStateToProps = state =>({



})

export default connect(mapStateToProps,{
    
})(Layout)
