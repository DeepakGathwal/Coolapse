
import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';

function App() {

    const [date, setdata] = useState([])
    const [show, setShow] = useState(false[0])

    useEffect(() =>{
      const fakeapi = async() => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users")
      setdata(res.data)
      }
      fakeapi();
    }, [])
    // console.log(date);

    const toggle = index => {
      if(show === index){
        return setShow(null)
      }
      setShow(index)
    }
  return (
   <div>
     <center>
       
    <table className="table ">
    <thead className="thead-dark ">
        <th>ID</th>
        <th>Company</th>
        <th>UserName</th>
        <th>Email</th>
</thead>
<tbody>
     {date.map((obj, index) =>( 
      <tr key={obj.id}>        
        <div>
        <td>{index+1}</td>
        <td>{obj.name}</td>
        <td>{obj.username}</td>
        <td>{obj.email}</td>
        <td><button onClick={() => toggle(index)} key={index}>EDIT</button></td>
        </div>
        {
          show === index ? [
          <p className='m-3 p-3'>{obj.phone}</p>,
          <p className='m-3 p-3'> {obj.website}</p>
          ]:null
        }       
      </tr>   
      ))
     }
</tbody>
</table>
          </center>
    </div>
  );
}
export default App;
