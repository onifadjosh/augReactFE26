// //binding form to state

// import { useState } from "react";
// import Button from "./components/Button";
// import Navbar from "./components/Navbar";

// const App = () => {
//   const [firstname, setfirstname] = useState("");
//   const [lastname, setlastname] = useState("");
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");

//   const [allUsers, setallUsers] = useState([]);
//   const [currentIndex, setcurrentIndex] = useState(null);

//   const [num, setnum] = useState(0);

//   const count = () => {
//     setnum(num + 1);
//     console.log(num);
//   };

//   // const handleChange=(event)=>{
//   //   console.log(event.target.value);
//   //   setfirstname(event.target.value)

//   // }

//   const submitData = () => {
//     let user = {
//       firstname,
//       lastname,
//       email,
//       password,
//     };

//     console.log(user);

//     let fruits = ["Banana", "watermelon", "apple", "pineapple"];

//     let newFruits = [...fruits, "mango", "cashew"];
//     console.log(newFruits);

//     let newAllUsers = [...allUsers, user];

//     setallUsers(newAllUsers);
//   };

//   const deleteUser = (index) => {
//     let newAllUsers = [...allUsers];

//     newAllUsers.splice(index, 1);

//     setallUsers(newAllUsers);
//   };

//   const editUser = (index, user) => {
//     let newAllUsers = [...allUsers];

//     newAllUsers.splice(index, 1, user);

//     setallUsers(newAllUsers);
//   };

//   const shout = () => {
//     alert("i was clicked");
//   };
//   return (
//     <div>
//       <Navbar />
//       <h1>{num}</h1>
//       <Button title="sade" color="btn-danger" func={shout} />
//       <Button title="Kola" color="btn-success" func={shout} />
//       <Button title="Sola" color="btn-primary" />
//       <Button title="Bola" color="btn-warning" />
//       <input
//         type="text"
//         placeholder="firstname"
//         onChange={(e) => setfirstname(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="lastname"
//         onChange={(e) => setlastname(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="email"
//         onChange={(e) => setemail(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="password"
//         onChange={(e) => setpassword(e.target.value)}
//       />

//       <button onClick={submitData}>Submit</button>

//       <hr />

//       <div className="d-flex gap-2 flex-wrap">
//         {allUsers.map((user, index) => (
//           <div className="card" style={{ width: "18rem" }} key={index}>
//             <div className="card-body">
//               <h5 className="card-title">
//                 {user.firstname + " " + user.lastname}
//               </h5>
//               <h6 className="card-subtitle mb-2 text-body-secondary">
//                 {user.email}
//               </h6>
//               <div className="d-flex gap-2">
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => deleteUser(index)}
//                 >
//                   Delete
//                 </button>
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => setcurrentIndex(index)}
//                   data-bs-toggle="modal"
//                   data-bs-target="#staticBackdrop"
//                 >
//                   Edit
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <h1> {currentIndex}</h1>

//       <div
//         class="modal fade"
//         id="staticBackdrop"
//         data-bs-backdrop="static"
//         data-bs-keyboard="false"
//         tabindex="-1"
//         aria-labelledby="staticBackdropLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h1 class="modal-title fs-5" id="staticBackdropLabel">
//                 Modal title
//               </h1>
//               <button
//                 type="button"
//                 class="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div class="modal-body">
//               <input
//                 type="text"
//                 placeholder="firstname"
//                 onChange={(e) => setfirstname(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="lastname"
//                 onChange={(e) => setlastname(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="email"
//                 onChange={(e) => setemail(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="password"
//                 onChange={(e) => setpassword(e.target.value)}
//               />
//             </div>
//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button
//                 type="button"
//                 class="btn btn-primary"
//                 onClick={() =>
//                   editUser(currentIndex, {
//                     firstname,
//                     lastname,
//                     email,
//                     password,
//                   })
//                 }
//               >
//                 Update
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;



import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Chat from './pages/Chat'
import Layout from './Layout/Layout'
import Overview from './Layout/Pages/Overview'
import Analytics from './Layout/Pages/Analytics'
import EffectClass from './pages/EffectClass'
import Formikk from './pages/Formikk'
import Register from './pages/Register'


const App = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route index element={<Home/>}/>

      //programmatic redirection
      //wildcard routing

      <Route path='/profile/:username' element={<Profile/>}/>

      <Route path='/chat' element={<Chat/>}/>
      <Route path='/effectt' element={<EffectClass/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/formikk' element={<Formikk/>}/>


      <Route path='/dashboard' element={<Layout/>}>
        <Route path='overview' element={<Overview/>}/>
        <Route path='analytics' element={<Analytics/>}/>
      </Route>
    </Routes>

    </>
  )
}

export default App
