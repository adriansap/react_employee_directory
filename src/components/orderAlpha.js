import _ from 'lodash';
import React, { useState } from "react";


function Orderalpha(props) {
    console.log("not crazy")
    console.log("props is: " + props)
    const [queryValue, setValue] = useState('') //until setValue sets a value, queryValue = ''



    let sortedByName = _.sortBy(props.employees, 'name')
    return <div>
        <h1>Test Sorting React</h1>
        <ul>

        </ul>
        <h1>Employee Directory</h1>
        <input onChange={event => setValue(event.target.value)} class="form-control" type="text" placeholder="Search" aria-label="Search"></input>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>

                </tr>
            </thead>
            <tbody>


                {props.employees.filter(name => name.name.toLowerCase().includes(queryValue)).map(filteredName => (
                    sortedByName.map(record =>
                        <tr>
                            <th scope="row"></th>
                            <td><img src={record.image} alt="profilepic"></img></td>
                            <td>{record.name}</td>
                            <td>{record.phone}</td>
                            <td>{record.email}</td>
                            <td>{record.DOB}</td>
                        </tr>
                    )
                ))}



            </tbody>
        </table>
    </div>

}

export default Orderalpha;