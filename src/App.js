import './App.css';
import Login from './components/login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Signup from './components/Signup';
 

  const myRouter = createBrowserRouter([
    {path:'',Component:Home},
    {path:'Home',Component:Home},
    {path:'login',Component:Login},
    {path:'Signup',Component:Signup}

  ])


function App() {
  return (
  <div className='App-header' >  <RouterProvider router={myRouter}/></div>
  );
}

export default App;
