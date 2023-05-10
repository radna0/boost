
import { Link } from 'react-router-dom';

import banner from  "../../../../Assets/Icons/Logo/logo.png"






function Banner() {



  
    return (
 
        <div className="nav_logo">
            <Link to="/boost" >
                <img src={banner} alt="" />
            </Link>
        </div>
    );
  }
  
  export default Banner;
