import { useState } from 'react';

function GetData() {
  //1 state variable
  // const [name,setName] = useState("ritik");
  // const [email,setEmail] = useState("hritikpatidar1810#gmail.com");
  // const [pwd,setPwd] = useState("12345");

  const [data , setData]= useState([
    {
      name:"ritik",
      email:"hritikpatidar1810@gmail.com",
      age:22
    },
    {
      name:"ankush",
      email:"ankush@gmail.com",
      age:33
    },
    {
      name:"kishor",
      email:"kishor234@gmail.com",
      age:42
    },
    {
      name:"vivek",
      email:"vivek06202@gmail.com",
      age:24
    },
    {
      name:"anurag",
      email:"anurag10@gmail.com",
      age:22
    },
  ])

  //2 function defination
 
  //3 return statement / return jsx
  return (
    <div className="App">
        <h1>Get the data in table using Functional component</h1>
      <table>
        <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
        </thead>
        <tbody>
          {
            
              data.map((cv,index,arr)=>{
                console.log(cv.name)
                return (
                  <tr key={index}>
                    <td>{cv.name}</td>
                    <td>{cv.email}</td>
                    <td>{cv.age}</td>
                  </tr>
                )
              })
            
          }
        </tbody>
      </table>
    </div>
  );
}

export default GetData;
