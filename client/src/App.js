import './App.css';
import Landing from './Components/Landing/Landing';
import Nav from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Form from './Components/Form/Form';
import Detail from './Components/Detail/Detail';
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";



function App() {

  
  return (
    <Router>
      <div className="App">
        <Nav/>
          <Routes>
             <Route path="/" element={<Landing/>}/>
             <Route path="/home" element={<Home/>}/>
             <Route path="/form" element={<Form/>}/>
             <Route path="/detail/:name" element={<Detail/>}/>
          </Routes>
      </div>
    </Router>
  )

}

export default App;

// export default App;

// import './App.css';

// function App() {

//   const { pathname } = useLocation();
//   const hideNav = pathname === "/" || pathname.includes("/detail/") || pathname.includes("/home")
// return (
// <div className="App">
// <h1>Bienvenidos</h1>
// <div>{!hideNav && <NavBar />}</div>
// <Switch>
// <Route path="/" component={<Landing />}/>
// <Route path="/home" component={<Home />} />
// <Route path="/form" component={<Form />} />
// <Route path="/detail/:id" component={<Detail />} />
// </Switch>


// </div>
// );
// }



