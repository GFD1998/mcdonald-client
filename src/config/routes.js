import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/home";
import NoMatch from "../pages/nomatch";
import MenuItem from "../pages/menuitem";
import Allergen from "../pages/allergen";
import Ingredient from "../pages/ingredient";
import NutritionalInformation from "../pages/nutritionalinformation";
// import Professors from "../pages/professor/professors";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home/>}/>
					<Route path="menuitem" element={<MenuItem/>}/>
                    <Route path="allergen" element={<Allergen/>}/>
                    <Route path="ingredient" element={<Ingredient/>}/>
                    <Route path="nutritionalinformation" element={<NutritionalInformation/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>
            </Routes>
        </BrowserRouter> 
        
    );
};

export default AppRoutes;