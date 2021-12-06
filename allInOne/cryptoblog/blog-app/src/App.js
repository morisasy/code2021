import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import Header from './components/Header'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import EditPost from './components/EditPost';
import About from './components/About';
import Missing from './components/Missing';
import { DataProvider } from './context/DataContext'
//import {blogData} from './db/blog'


function App() {

  return (
    <div className="App">

          <Header title = "Blockchain and Cryptocurrencies" />
          <DataProvider>
              <NavBar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path ="/post"  element = {<NewPost />} />
                <Route path="/edit/:id" element ={<EditPost />} />
                <Route path ="/post/:id" element= {<PostPage />} />
                <Route path="/about" element={<About />} />
                <Route path ="/about"  element = {<Missing />} />
              </Routes>
          </DataProvider>
          <Footer />

    </div>
  );
}







export default App;
