
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Services from './components/pages/Services/Services';
import ContactUs from './components/pages/ContactUs/ContactUs';
import Maketing from './components/pages/Services/Maketing';
import Development from './components/pages/Services/Development';
import Consulting from './components/pages/Services/Consulting';
import Design from './components/pages/Services/Design';
// import Mainpage from './components/Main/Main-page';
import Navbar from './components/Navbar/Navbar';
import Travelling from './components/pages/Travelling/Travelling'
import login from './components/pages/User/login';
import React, { Suspense } from 'react';

const Home = React.lazy(() => import('./components/pages/Home/Home'));

function App() {
  return (
    
    <div className="App-Nature">
       <Suspense fallback={<div>Loading ...</div>}>
          <BrowserRouter>
              <Navbar/>
            
              {/* <Mainpage/> */}
              
                <Switch>
            

                    <Redirect exact from="/" to="/home" />
                    <Route path='/home' component={Home}/>
                    <Route path='/services'  component={Services}/>
                    <Route path='/contact-us'  component={ContactUs}/>
                    <Route path='/travelling'  component={Travelling}/>
                    <Route path='/login'  component={login}/>

                    <Route path='/maketing'  component={Maketing}/>
                    <Route path='/development'  component={Development}/>
                    <Route path='/consulting'  component={Consulting}/>
                    <Route path='/design'  component={Design}/>

                    
                </Switch>
          
          </BrowserRouter>

       </Suspense>
      
    </div>
  );
}

export default App;
