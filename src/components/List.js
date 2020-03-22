import React from "react";
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  console.log("props.employees[0].image" + props.employees[0].image)

  return (
    <div class="md-form active-pink active-pink-2 mb-3 mt-0">
      <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
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

        <th scope="row">{props.employees.id}</th>


          {props.employees.filter(name => name.name.includes('su')).map(filteredName => (

            <td>
              {filteredName.image}
            </td>
          ))}


          {props.employees.filter(name => name.name.includes('su')).map(filteredName => (

            <td>
              {filteredName.name}
            </td>
          ))}

          {props.employees.filter(name => name.name.includes('su')).map(filteredName => (

            <td>
              {filteredName.phone}
            </td>
          ))}

          {props.employees.filter(name => name.name.includes('su')).map(filteredName => (

            <td>
              {filteredName.email}
            </td>
          ))}

          {props.employees.filter(name => name.name.includes('su')).map(filteredName => (

            <td>
              {filteredName.DOB}
            </td>
          ))}




        </tbody>
      </table>
    </div>
  );
}

export default List;



