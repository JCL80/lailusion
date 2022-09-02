import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./navbar.css"
import Cooker from "./arrows/LOGO-1.png"
import BBB from "./arrows/BBB.png"

const navbar = () => {
    return (
         
  <div className="row bg-black">
        <div className="col">
            <img className = "img-fluid" src = {BBB}/>
        </div>
        <div className="col">
            <img className = "img-fluid" src = {Cooker}/>
        </div>
        
        <div className="col">
            
            <FacebookIcon/>
            <InstagramIcon/> 
            
        </div>
    </div>

        
    )
}

export default navbar