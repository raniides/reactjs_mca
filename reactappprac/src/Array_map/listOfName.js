import React from "react";

function ListOfName(props){
    const names = props.names;

    const listitems = names.map((name)=>
        <li key={name}>
            {name}
        </li>
    );

    return(
        <div>
            <ul>{listitems}</ul>
        </div>
    );
}

export default ListOfName;