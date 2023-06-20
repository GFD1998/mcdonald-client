import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/home";
import NoMatch from "../pages/nomatch";
import MenuItem from "../pages/menuitem/menuitem";
import Allergen from "../pages/allergen/allergen";
import Ingredient from "../pages/ingredient/ingredient";
import NutritionalInformation from "../pages/nutritionalInformation/nutritionalinformation";
import {AuthProvider} from "../services/useAuth";
import Signin from "../pages/auth/signin";
import Signout from "../pages/auth/signout";
import Signup from "../pages/auth/signup";
import RequireAuth from "../components/RequireAuth";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home/>}/>
                        <Route path="menuitem" element={
                            <RequireAuth>
                                <MenuItem/>
                            </RequireAuth>
                        }/>
                        <Route path="allergen" element={<Allergen/>}/>
                        <Route path="ingredient" element={<Ingredient/>}/>
                        <Route path="nutritionalinformation" element={<NutritionalInformation/>}/>
                        <Route path="/signin" element={<Signin/>}/>
                        <Route path="/signout" element={<Signout/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        <Route path="*" element={<NoMatch/>}/>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default AppRoutes;
