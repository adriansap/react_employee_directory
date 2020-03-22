import React from "react";
import _ from 'lodash';

function Orderalpha(props) {
    console.log("not crazy")
    console.log("props is: " + props)


    let sortedByName = _.sortBy(props.employees, 'name')
    return <div>
        <h1>Test Sorting React</h1>
        <ul>
            {
                sortedByName.map(record => {
                    return <li key={record.name}>{record.name}</li>
                })
            }
        </ul>
    </div>

}

export default Orderalpha;