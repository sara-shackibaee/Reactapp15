import React,{useEffect , useState} from 'react'
import axios from 'axios'
import Resultrecipe  from './Resultrecipe'
function Recipeapp() {

    const Application_ID  = 'fa6d850d'
    const Application_Keys = 'b72629b09a05acd0927f72c792e3de34'
    const [recipe , setRecipe] = useState([])
    const [search,setSearch]  = useState('')
    const [queri,setQuery]  = useState('chicken')

    useEffect(()=>{
        console.log("hello")
        getdata()
        console.log("by by")
    },[queri])

    function clickhandel() {

        setQuery(search)

    }

    const getdata = async () =>{

        await axios.get(`https://api.edamam.com/search?q=${queri}&app_id=${Application_ID}&app_key=${Application_Keys}&from=0&to=3&calories=591-722&health=alcohol-free`).then((res)=>{
            const data =  res.data.hits;
            // console.log(data)
            setRecipe(data)
        })

    }
    return (
       <div>
           <div>
                <input  value={search} onChange={(e)=>{setSearch(e.target.value)}}></input><button onClick={clickhandel}>search!</button>

           </div>

           {recipe.map((item)=>(<Resultrecipe  title={item.recipe.label} src={item.recipe.image} calory={item.recipe.calories} ingi={item.recipe.ingredients}/>))}

       </div> 
    )
}

export default Recipeapp
