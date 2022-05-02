import React, { useState } from 'react'



 

export default function FormData() {
    //state
    const [data, setdata] = useState( {
      name:"",
      surname:"",
      mobaul_number:"",
      date_of_birth: ""
    })
    const [table , setTable] = useState([])


    //function defination
    let submitData=(e)=>{
      e.preventDefault();
      //console.log('okokokokok')
      console.log(data)
      const emptyData = !Object.values(data).every(res=>res==="")
      if(emptyData)
      {
       const newData = (data)=>([...data, data])
       setTableData(newData);
       const emptyInput= {name:"",surname:"",mobaul_number:"",date_of_birth: ""}
       setData(emptyInput)
      }
      
      
      
    }

    let handleChange =(e)=>{
        console.log(e.target.value);
        let newData={...data, [e.target.name] : e.target.value}
        setdata(newData)
    }

    console.log(data)
    //return statement / jsx syntex
    return (
        <div>
            <h1>Get the form data in table using Functional component</h1>
            <form onSubmit={ (e)=>{ submitData(e) } }>
                <input type="text" name="name" value={data.name} onChange={ (e)=>{ handleChange(e) } } placeholder="Enter your name"/><br/><br/>
                <input type="text" name="surname" value={data.surname} onChange={ (e)=>{ handleChange(e) } } placeholder="Enter your surname"/><br/><br/>
                <input type="number" name="mobaul_number" value={data.mobaul_number} onChange={ (e)=>{ handleChange(e) } } placeholder="Enter your mobile number"/><br/><br/>
                <input type="date" name="date_of_birth" value={data.date_of_birth} onChange={ (e)=>{ handleChange(e) } } placeholder="Enter your date of birth"/><br/><br/>

                <button>Submit</button>
            </form>

            <hr/>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>surname</th>
            <th>mobaul_number</th>
            <th>date_of_birth</th>
          </tr>
        </thead>
        <tbody>
            {
              Object.keys(data).map((keyName,keyIndex)=>{
                
                return(
                  <tr key={keyName}>
                    <td>{data.keyName}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                )
              })
            }

         
        </tbody>
      </table>
        </div>
    )
}
