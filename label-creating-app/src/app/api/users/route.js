// import { useState, useEffect } from "react";

// export default function UsersList() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     async function fetchUsers() {
//       try {
//         const response = await fetch("/api/users");
//         const data = await response.json();
//         setUsers(data.users);
//       } catch (error) {
//         console.log("Error fetching users", error);
//       }
//     }
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       {users.map((user, index) => (
//         <li>
//           <h1 key={index}>{user.name}</h1>
//           <p>{user.email}</p>
//         </li>
//       ))}
//     </div>
//   );
// }
