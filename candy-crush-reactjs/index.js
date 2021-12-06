const PORT = process.env.PORT || 8000 // this is for deploying on heroku
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

require('dotenv').config()

const url = process.env.URL



app.use(cors)
app.use(express.json())
//const pages = '?page-size=20';
const pages = 'page-size=20';

app.get('/', (req,res)=> {
  res.json('This is our backend!')
});
//app.post()

// get ll the scores


app.get('/scores', (req, res) =>{
  const options = {
    method: 'GET',
    headers:{
      Accepts: 'application/json',
      'X-Cassandra-Token': process.env.ASTRA_TOKEN
    }
  };
  axios(`${url}?${pages}`, options)
      .then(response => res.status(200).json(response.data))
      .catch(err=>res.status(500).json({message: err}))
});

app.post('/addscore', (req, res) =>{
  const bodyContent =req.body

  const options = {
    method: 'POST',
    headers:{
      Accepts: 'application/json',
      'X-Cassandra-Token':process.env.ASTRA_TOKEN
    },
    data:bodyContent
  };
  axios(`${url}?${pages}`, options)
      .then(response => res.status(200).json(response.data))
      .catch(err=>res.status(500).json({message: err}))
});

 app.listen(PORT, ()=> console.log(`server running on PORT ${PORT}`))
