import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header title="Title" scroll>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/about">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <Link to="#">Link</Link>
                  <Link to="#">Link</Link>
                  <Link to="#">Link</Link>
                  <Link to="#">Link</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content">
                  <Main />
              </div>
          </Content>
      </Layout>
  </div>
  );
}

export default App;
