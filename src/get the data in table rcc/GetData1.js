import React, { Component } from 'react'

let data =[
    {
        id:1,
        name:"ritik",
        email:"hritikpatidar1234@gmail.com",
        mobail_number:4359837439
    },
    {
        id:2,
        name:"anurag",
        email:"anurag@gmail.com",
        mobail_number:3453454354
    },
    {
        id:3,
        name:"vivek",
        email:"vivek@gmail.com",
        mobail_number:3576754656
    },
    {
        id:4,
        name:"akhilesh",
        email:"akhilesh@gmail.com",
        mobail_number:3453453445
    },
    {
        id:5,
        name:"harish",
        email:"harish@gmail.com",
        mobail_number:2135565467
    },
]

export default class GetData1 extends Component {
    constructor(){
        super()
        this.state={
            data:data
        }
            
            
        
    }
    render() {
        return (
            <div>
                <h1>Get the data in table using Class component</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>mobail_number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map( (cv,index,arr)=>{
                               console.log(cv.name)
                               return (
                                    <tr key={index}>
                                        <td>{cv.id}</td>
                                        <td>{cv.name}</td>
                                        <td>{cv.email}</td>
                                        <td>{cv.mobail_number}</td>
                                    </tr>
                                )
                              
                            } )
                        }
                        
                    </tbody>
                </table>
            </div>
        )
    }
}
