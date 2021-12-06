
import React from 'react'
import {useState, useEffect} from 'react';
import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest'


const App =()=> {
 const API_URL = 'http://localhost:3500/items';


  //const [items, setItems] = useState(SON.parse(localStorage.getItem('shoppinglist')) || []);;
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setISLoading] = useState(true);


   useEffect(()=>{

     const fetchItems = async() => {
       try {
         const response = await fetch(API_URL);
         const listItems = await response.json();
         if(!response.ok) throw Error('Did not received expected data');
         console.log(listItems);
         setItems(listItems);
         setFetchError(null);
       } catch (error) {
         console.log(error.message);
         setFetchError(error.message)
       }finally{
         setISLoading(false);
       }
     }
     setTimeout(()=>{
        (async () => await fetchItems())();
     })

   },[])




  const addItem = async(item)=>{
    const id = items.length ? items[items.length-1].id + 1 : 1;
    const myNewItem = {id, checked: false, item:item};
      console.log("Add New item", myNewItem)
    const listItems = [...items, myNewItem];
      setItems(listItems)
        console.log("List items", listItems)
    const postOptions = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    };
    const result = await apiRequest(API_URL, postOptions)
                  
    if(result) setFetchError(result);

  };

  const handleCheck = async(id)=>{
    console.log(`key:${id}`)
    const listItems = items.map((item) => item.id ===id? {...item, checked: !item.checked}: item);
    setItems(listItems)
    const myItem =listItems.filter(item => item.id ===id);
    const updateOptions = {
      method:'PATCH',
      headers: {
        'Content-Type': 'appliction/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if(result) setFetchError(result);
  }

  const handleDelete = async(id) =>{
      console.log(id);
      const listItems = items.filter((item)=> item.id !==id);
      setItems(listItems);


      const deleteOptions = {method:'DELETE'};
      const reqUrl = `${API_URL}/${id}`;
      const result = await apiRequest(reqUrl, deleteOptions);
      if(result) setFetchError(result);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!newItem) return;
    // AddItem
    console.log("handle Submit New item")
    console.log(newItem)
    addItem(newItem);
    setNewItem('')
  }

  return (
    <div className="App">
        <Header  title = "Groceries List"/>
        <AddItem
            newItem = {newItem}
            setNewItem = {setNewItem}
            handleSubmit= {handleSubmit}
        />
        <SearchItem
            search ={search}
            setSearch = {setSearch}
        />
        <main>
          {isLoading && <p>Loading Items</p>}
          {fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>}
          { !fetchError && !isLoading && <Content
              items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
              handleCheck ={handleCheck}
              handleDelete = {handleDelete}
            />
          }
        </main>
        <Footer length ={items.length} />
    </div>
  );
};

export default App;
