import {settings} from "../../config/config";
import {NavLink, Outlet, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import useXmlHttp from "../../services/useXmlHttp";
import {useAuth} from "../../services/useAuth";
import MenuStyles from "../styles/menu.module.css";
import useAxios from "../../services/useAxios";

const Allergen = () => {
    const {user} = useAuth();
    const {pathname} = useLocation();
    const [subHeading, setSubHeading] = useState("All Allergens");
    const url = settings.baseApiUrl + "/allergen";

    const {
        error,
        isLoading,
        data: allergens
    } = useAxios(url, "GET", {Authorization:"Bearer" + user.jwt});

    useEffect(() => {
        setSubHeading("All Allergens");
    }, [pathname]);
    return (
       <>
           <div className="main-heading">
               <div className="container">Allergens</div>
           </div>
           <div className="sub-heading">
               <div className="container">Welcome to the Allergens Dashboard</div>
           </div>
           <div className="main-content container">
                   {error && <div>{error}</div>}
                   {isLoading &&
                       <div className="image-loading">
                           Please wait while data is being loaded
                           <img src={require(`../loading.gif`)} alt="Loading ......"/>
                       </div>
                   }
           </div>
       </>
   );
};

export default Allergen;
