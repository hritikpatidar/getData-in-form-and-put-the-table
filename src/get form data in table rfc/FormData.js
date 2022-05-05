import React, { useState } from 'react'


export default function FormData() {

    //state
    const [data, setData] = useState( {
      name:"",
      surname:"",
      mobile_number:"",
      date_of_birth: ""
    })
    const [table , setTable] = useState([
      
    ])


    //function defination
    let submitData=(e)=>{
      e.preventDefault();
      //console.log('okokokokok')
      //setTable([data])
      setTable(prevData => [...prevData, data])
      setData({
        name:"",
        surname:"",
        mobile_number:"",
        date_of_birth: ""
      })
    }

    let handleChange =(e)=>{
        //console.log(e.target.value);
        let newData={...data, [e.target.name] : e.target.value}
        setData(newData)
    }

    //return statement / jsx syntex
    return (
      <div>
        <h1>Get the form data in table using Functional component</h1>
        <form onSubmit={ (e)=>{ submitData(e) } } className='first_name'>
            <input type="text" name="name" value={data.name} onChange={ (e)=>{ handleChange(e) } } placeholder="Enter your name"/><br/><br/>
            <input type="text" name="surname" value={data.surname} onChange={ (e)=>{ handleChange(e) } } placeholder="Enter your surname"/><br/><br/>
            <input type="number" name="mobile_number" value={data.mobile_number} onChange={ (e)=>{ handleChange(e) } } placeholder="Enter your mobile number"/><br/><br/>
            <input type="date" name="date_of_birth" value={data.date_of_birth} onChange={ (e)=>{ handleChange(e) } } placeholder="Enter your date of birth"/><br/><br/>

            <button>Submit</button>
        </form>

        <hr/>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>surname</th>
              <th>mobile_number</th>
              <th>date_of_birth</th>
            </tr>
          </thead>
          <tbody>
              {
                Object.values(table).map((cv,index)=>{
                  //console.log(cv)
                  return(
                    <tr key={index}>
                      <td>{cv.name}</td>
                      <td>{cv.surname}</td>
                      <td>{cv.mobile_number}</td>
                      <td>{cv.date_of_birth}</td>
                    </tr>
                  )
                })
              }

          
          </tbody>
        </table>
      </div>
    )
}
