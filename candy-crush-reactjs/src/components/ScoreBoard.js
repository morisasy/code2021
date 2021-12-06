import axios from 'axios'

const baseUrl = 'http://localhost:8000/'

const ScoreBoard = ({ score }) => {

  const [gameStates, setGameStates] = useState(null)
  const [userName, setUserName] =useState(null)
  const fetchData = async ()=>{
    const response = await axios.get('http://localhost:8000/scores')
    const data = Object.keys(response.data.data).map(item => response.data.data[item])
    setGameStates(data)
  };
   console.log(gameStates);

  const saveData = async() => {
    const data ={
      userName: userName,
      score: score
    };
    axios.post('http://localhost:8000/addscore', data)
     .then(response => {console.log(response)})
     .catch(err => console.log(err))
     .then(fetchData)
  }
  useEffect(()=>{
      fetchData();
      const randomUser=randomUserNames[Math.floor(Math.random()*randomUserNames.length)]
      setUserName(randomUser)
  }, []);



  return (
    <div className="score-board">
      <h2>{userName} score:{score}</h2>
      {gameStates?.map((gameState, index) =>(
        <div key={{index}}>
            <h3>{gameState.username}: {gameState.score}</h3>
        </div>
      ))};
      <button onClick ={saveData}> save score </button>
    </div>
  )
}

export default ScoreBoard
