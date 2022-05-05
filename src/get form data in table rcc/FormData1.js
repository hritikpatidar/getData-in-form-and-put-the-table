import React, { Component } from 'react'

// const student = {
//     name: "",
//     surname: "",
//     mobile_number: "",
//     date_of_birth: ""
// }

export default class FormData1 extends Component {
    constructor() {
        super()
        this.state = {
            student:{
                        name: "",
                        surname: "",
                        mobile_number: "",
                        date_of_birth: "",
                    },
            data: []
        }
    }

    
 

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            data:[...this.state.data,this.state.student],
            student:{
                name: "",
                surname: "",
                mobile_number: "",
                date_of_birth: "",
            }
        })
       
        // this.setState({
        //     ...student,
        //     data: [{
        //         ...this.state,
        //         ...this.state, [e.target.name]: e.target.value,

        //     }]
        // });

    }
    

    handleChange(e) {
        e.preventDefault();
        //console.log(e.target.name)
        const name = e.target.name;
        const value = e.target.value;
        // let data ={...this.state}
         //data = {...this.state.student,[name]:value}
        this.setState({
            student:{
                ...this.state.student,
                [name]: value
            }
            
            
        });

        //console.log(this.state)
    }
    
    render() {
        //console.log(this.state.student)
        return (
            <div>
                <h1>Get the form data in table using Class component</h1>
                <form onSubmit={(e) => { this.handleSubmit(e) }} className='first_name'>
                    <input type="text" name="name" value={this.state.student.name} onChange={(e) => { this.handleChange(e) }} placeholder="Enter your name" /><br /><br />
                    <input type="text" name="surname" value={this.state.student.surname} onChange={(e) => { this.handleChange(e) }} placeholder="Enter your surname" /><br /><br />
                    <input type="number" name="mobile_number" value={this.state.student.mobile_number} onChange={(e) => { this.handleChange(e) }} placeholder="Enter your mobile number" /><br /><br />
                    <input type="date" name="date_of_birth" value={this.state.student.date_of_birth} onChange={(e) => { this.handleChange(e) }} placeholder="Enter your date of birth" /><br /><br />

                    <button >Submit</button>
                </form>

                <hr />
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
                            this.state.data.map((cv, index, arr) => {
                                //console.log(cv);
                                return (
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
}
