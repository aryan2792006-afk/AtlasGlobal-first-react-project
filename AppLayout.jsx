import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function AppLayout(){
    return(<>
   
    <Header></Header>
    <Outlet/>
    <Footer></Footer>
    </>)
}
export default AppLayout;