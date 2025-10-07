import React, { useState, useEffect } from "react";

function UserList(){

    const [users,setUsers] = useState([])
    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/users")
          .then(res=>res.json())
          .then(data=>setUsers(data))

    },[])


    return (
        <div  className="h-60 bg-green-400  overflow-scroll">
            
            <ul>
              {users.map(user=>{

                  let info = [];
                  for (let key in user) {
                    if(typeof user[key] !== "object"){
                        info.push(<p>{key} : {user[key]}</p>)

                    }
                  }
                  info.push(<><br ></br><hr></hr></>)
                  
                  return <li key={user.id}>{info}</li>
              })}
            </ul>
        
       </div>
    )

}

export default UserList;