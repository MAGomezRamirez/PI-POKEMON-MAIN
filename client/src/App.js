import './App.css';
import Landing from './Components/Landing/Landing';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Form from './Components/Form/Form';
import Detail from './Components/Detail/Detail';
import { Route, Routes, useLocation } from "react-router-dom";

// function App() {
//   const { pathname } = useLocation();

//   return (
//     <div className="App">
//       {pathname !== "/" && <NavBar />}
// 			<Routes>
// 				<Route path="/" element={<Landing />}/>
// 				<Route path="/home" element={<Home />} />
// 				<Route path="/form" element={<Form />} />
// 				<Route path="/detail/:id" element={<Detail />} />
// 			</Routes>
//     </div>
//   );
// }

// export default App;

import './App.css';

function App() {

  const { pathname } = useLocation();
  const hideNav = pathname === "/" || pathname.includes("/detail/") || pathname.includes("/home")
return (
<div className="App">
<h1>Bienvenidos</h1>
<div>{!hideNav && <NavBar />}</div>
<Routes>
<Route path="/" element={<Landing />}/>
<Route path="/home" element={<Home />} />
<Route path="/form" element={<Form />} />
<Route path="/detail/:id" element={<Detail />} />
</Routes>


</div>
);
}


export default App;
