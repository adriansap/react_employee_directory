import React from "react";
import _ from 'lodash';

function orderAlpha(props) {
    console.log("not crazy")

        
    let sortedByName = _.sortBy(props.employee, 'name')
    return <div>
      <h1>Test Sorting React</h1>
      <ul>
        {
          sortedByName.map(record=>{
            return <li key={record.name}>{record.name}</li>
          })
        }
      </ul>
    </div>

}

export default orderAlpha;