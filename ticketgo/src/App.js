
import './App.css';
import { LayoutD } from './Components/Layout/DefaultLayout/index';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from './routes';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            let Layout = LayoutD
            if (route.Layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
