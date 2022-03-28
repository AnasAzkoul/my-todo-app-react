import { Fragment } from 'react';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
// import components
import Home from './routers/Home/Home.component';
import InProgress from './routers/Inprogress-page/Inprogress.component';

// import styles
import './App.css';

function App() {
  
  return (
    <Fragment>
      <Home />
      <InProgress />
    </Fragment>
  );
}

export default App;
