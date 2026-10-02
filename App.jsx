import "./App.css"

 import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Country from './Pages/Country';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import AppLayout from './components/AppLayout';
import ErrorMsg from './Pages/ErrorMsg';



function App(){

const router=createBrowserRouter(
  [
    {path:"/", element:<AppLayout></AppLayout>,
      children:[
        {path:"/",element:<Home></Home>},
    {path:"/country",element: <Country></Country>},
    {path:"/about",element: <About></About>},
    {path:"/contact",element: <Contact></Contact>},
      ],errorElement:<ErrorMsg></ErrorMsg>
    },
    
])


  return(<>
     <RouterProvider router={router}></RouterProvider>

  </>)
}
export default App;

