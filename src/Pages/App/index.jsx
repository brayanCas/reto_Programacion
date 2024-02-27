import { useRoutes , BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import Stores from '../Stores'
import Navbar from '../../Components/Navbar';
import Projects from '../Projects';
import About_Me from '../About_Me';
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element:<Home />},
    { path: '/Stores', element: <Stores /> },    
    { path: '/Projects', element: <Projects /> },    
    { path: '/About_Me', element: <About_Me /> },
  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>      
      <Navbar/>
      <AppRoutes />
    </BrowserRouter>
  )
}
export default App
