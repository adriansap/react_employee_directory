import React, { useState } from "react";





// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  const [queryValue, setTitle] = useState('')

  console.log("props.employees[0].image" + props.employees[0].image)

  return (
    <div class="md-form active-pink active-pink-2 mb-3 mt-0">
      <h1>Employee Directory</h1>
      <input onChange={event => setTitle(event.target.value)} class="form-control" type="text" placeholder="Search" aria-label="Search"></input>

      <table class="table">
        <thead>
          {/* <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>

          </tr> */}
        </thead>
        <tbody>

          {/* <th scope="row">{props.employees.id}</th> */}

          <tr>
            <th scope="row">Pic</th>
            {props.employees.filter(name => name.name.includes(queryValue)).map(filteredName => (

              <td>
                <img src={filteredName.image}></img>
              </td>
            ))}
          </tr>

          <tr>
            <th scope="row">Name</th>
            {props.employees.filter(name => name.name.includes(queryValue)).map(filteredName => (

              <td>
                {filteredName.name}
              </td>
            ))}
          </tr>

          <tr>
            <th scope="row">Phone</th>
            {props.employees.filter(name => name.name.includes(queryValue)).map(filteredName => (

              <td>
                {filteredName.phone}
              </td>
            ))}
          </tr>

          <tr>
            <th scope="row">Email</th>
            {props.employees.filter(name => name.name.includes(queryValue)).map(filteredName => (

              <td>
                {filteredName.email}
              </td>
            ))}
          </tr>

          <tr>
            <th scope="row">DOB</th>
            {props.employees.filter(name => name.name.includes(queryValue)).map(filteredName => (

              <td>
                {filteredName.DOB}
              </td>
            ))}
          </tr>



        </tbody>
      </table>
    </div>
  );
}

export default List;



