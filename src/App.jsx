import { useState } from "react"

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState();
  //Function to add item
  const addToList = ()=> {
    list.push(item);
    setItem([...list]);
  }
//Function to delete item

const deleteItem = (index)=> {
  list.splice(index, 1);
  setItem([...list]);
}


  return (
    <>
      <div className="container mt-5 w-50">
        <table className="table">
          <tbody>
          {
            list.length!==0?(
              list.map((element, index)=>{
                return (
                  <tr className="w-100">
                    <td>{element}</td>
                    <td><button onClick={()=>deleteItem(index)} className="btn btn-danger">Delete</button></td>
                  </tr>
                )
              })
            ):(<></>)
          }
          </tbody>
        </table>
        <div className="d-flex">
          <input className="form-control" type="text" onChange={(e)=>setItem(e.target.value)} />
          <button className="ms-2 btn btn-primary" onClick={addToList}>Add</button>
        </div>
      </div>
    </>
  )
}

export default App
