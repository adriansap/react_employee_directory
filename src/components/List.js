import React, { useState } from "react";
// import _ from 'lodash';
// import Orderalpha from './Orderalpha'
import { Redirect } from 'react-router-dom'



// function sayHello() {
//   alert('Hello!');
// }
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  const [queryValue, setValue] = useState('') //until setValue sets a value, queryValue = ''

  console.log("props.employees[0].image" + props.employees[0].image)

  return (
    <div class="md-form active-pink active-pink-2 mb-3 mt-0">
      <h1>Employee Directory</h1>
      <input onChange={event => setValue(event.target.value)} class="form-control" type="text" placeholder="Search" aria-label="Search"></input>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col" onClick={<Redirect to='/Orderalpha'/>}>Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>

          </tr>
        </thead>
        <tbody>


          {props.employees.filter(name => name.name.toLowerCase().includes(queryValue)).map(filteredName => (

            <tr>
              <th scope="row"></th>
              <td><img src={filteredName.image} alt="profilepic"></img></td>
              <td>{filteredName.name}</td>
              <td>{filteredName.phone}</td>
              <td>{filteredName.email}</td>
              <td>{filteredName.DOB}</td>
            </tr>
          ))}


        </tbody>
      </table>
    </div>
  );
}

export default List;



