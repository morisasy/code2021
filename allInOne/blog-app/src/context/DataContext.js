import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import api from '../api/posts';
import useAxiosFetch from '../hooks/useAxiosFetch';
import useWindowSize from '../hooks/useWindowSize';

const DataContext = createContext({});
const urlPosts = 'http://localhost:3500/posts';

export const DataProvider = ({ children }) => {

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  //const params = useParams();
  const navigate = useNavigate();
  const { width } = useWindowSize();
  //const baseURL = 'http://localhost:3500/posts';
  const { data, fetchError, isLoading } = useAxiosFetch(urlPosts);
  useEffect(() => {
    setPosts(data);
  }, [data])

  useEffect(()=>{
    const fetchPosts = async()=>{
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
           // Not in the 200 response range
           console.log(err.response.data);
           console.log(err.response.status);
           console.log(err.response.headers);
         } else {
           console.log(`Error: ${err.message}`);
         }
      }
    }
     fetchPosts();
  },[])

  const results = ()=>{
    const filteredResults  = posts.filter(post=>
          (post.body).includes(search.toLowerCase())
           || ((post.title).toLowerCase()).includes(search.toLowerCase())
        );
    // filterResults;
    // reverse to view new blog post first
    setSearchResults(filteredResults.reverse());
  }
  useEffect(results,[posts, search]);


    return (
        <DataContext.Provider value={{
            search, setSearch,
            searchResults, fetchError, isLoading,
            posts, setPosts
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;
