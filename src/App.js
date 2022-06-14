import { useEffect, useState } from "react";
import "./App.css";
import { AddUserDetail } from "./AddUserDetail";

// const API = "http://localhost:4000";
const API = "https://krishnavenimovieapp.herokuapp.com";


export default function App() { 
 
 // const [FirstName, setFirstName] = useState("");
  const userdetails = [ 
    { 
     "FirstName": "Krishna",
     "LastName": "Veni",       
     "Email": "krishnaveni@gmail.com",
     "Password": "123456",
     "TypeOfuser": "Admin" 
     },    
     { 
      "FirstName": "Sakthi",
      "LastName": "Vel",       
      "Email": "sakthivel@gmail.com",
      "Password": "7891011",
      "TypeOfuser": "Manager" 
      },
      { 
        "FirstName": "Kaaviya",
        "LastName": "Sakthi",       
        "Email": "kaaviyasakthi@gmail.com",
        "Password": "1234567",
        "TypeOfuser": "Employee" 
        },
        { 
          "FirstName": "Shri",
          "LastName": "Sakthi",       
          "Email": "shrisakthi@gmail.com",
          "Password": "345678", 
          "TypeOfuser": "Employee"  
          }
    ];
    // useEffect(() => { 
    //    fetch(`${API}/userdetails`,{
    //     headers: {
    //       "x-auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzhiMDM4NjAwZDdjYjUyYmRiZTVkMSIsImlhdCI6MTY0ODAxOTUwMH0.Lx5PUM_ngmBTqpsw_vp5is64TC1X53vzTYH-JohPLy0"
    //     }
    //    })
    //    .then((data) => data.json())
    //     .then((usr) => setuserdetails(usr));
    //     }, []);

       
  return(
  <div className="App">
      <AddUserDetail /> 
  </div>
);
}
 
 function UserDetail({ FirstName,LastName,Email,Password,TypeOfuser }) {
 
  return (
    <div className="userdetail-container">
        <div className="userdetail-specs">
        <h2> User Details</h2>
        <h3>{FirstName}</h3>
        <h3>{LastName}</h3>
        <h3>{Email}</h3>
        <h3>{Password}</h3>
        <h3>{TypeOfuser}</h3>
       </div>
    </div>    
     );
        
 }






//  const [FirstName, setFirstName] = useState("");
//  const [LastName, setLastName] = useState("");
//   const [Email, setEmail] = useState("");
//   const [Password, setPassword] = useState(""); 
//   const [TypeOfuser, setTypeOfuser] = useState(""); 

{/* <div className="add-userdetail-form">
<form>
  <input
     className='form-control'
     placeholder='First Name'
     type='text'
     name='FirstName'
     onChange={event => setFirstName(event.target.value)}
     />
  <input
     className='form-control'
     placeholder='Last Name'
     type='text'
     name='LastName'
     onChange={event => setLastName(event.target.value)}
    />
  <input
     className='form-control'
     placeholder='Email'
     type='email'
     name='Email'
    onChange={event => setEmail(event.target.value)}
     />
  <input
    className='form-control'
    placeholder='Password'
    type='password'
    name='Password'
    onChange={event => setPassword(event.target.value)}
    />
     <input
    className='form-control'
    placeholder='TypeOfuser'
    type='TypeOfuser'
    name='TypeOfuser'
    onChange={event => setTypeOfuser(event.target.value)}
    />
 {/* <select id="TypeOfuser" name="TyprOfuser" >
   <option value="Admin">Admin</option>
   <option value="Manager">Manager</option>
   <option value="Employee">Employee</option>
 </select> */}
//  <div className='mb-3'>
//    <button type='submit' onSubmit = {() => 
//   console.log(FirstName,LastName,Email,Password,TypeOfuser)} >
//     Add User Detail </button>
//  </div>
//  </form>
// </div>

//  <div className="userdetail-list">

//     {userdetails.map(({ FirstName,LastName,Email,Password,TypeOfuser }) =>
//      <UserDetail 
//      FirstName={FirstName} 
//      LastName={LastName}
//      Email={Email}
//      Password={Password}
//      TypeOfuser={TypeOfuser}
//      /> )}
//     </div> */}





// function Forgotpassword(){

  
//   return{

//   }
// }











// export default function App() { 
//   const [mobiles, setMobiles] = useState([]);
//   // const mobiles = [ 
//   //   { 
//   //    model: "OnePlus 9 5G",
//   //    img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",       
//   //    company: "Oneplus" 
//   //    },    
//   //    {      
//   //    model: "Iphone 13 mini",     
//   //    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",       
//   //    company: "Apple"  
//   //    },   
//   //    {      
//   //    model: "Samsung s21 ultra",  
//   //    img: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",       
//   //    company: "Samsung"  
//   //    }, 
//   //    {       
//   //    model: "xiomi mi 11",       
//   //    img: "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",       
//   //    company: "xiomi"     
//   //   }   
//   //   ];
 
//   useEffect(() => {
//  fetch(`${API}/mobiles`)
//   .then((data) => data.json())
//   .then((mbs) => setMobiles(mbs));
//   }, []);

//   return(
//   <div className="App phone-list-container">
// {mobiles.map((mobile) => (
//   <Phone mobile={mobile} />
// ))}  
//   </div>
// );
// }

// function Phone({ mobile }) {
 
//   return (
//    <div className="phone-container">
//      <img className="phone-picture" src={mobile.img} alt={mobile.model} />
//       <h2 className="phone-name">{mobile.model}</h2>
//       <p className="phone-company">{mobile.company}</p>
//    </div>
//   );
// }


// Movie Task my try

// export default function App() {

//       const names = ["Mankatha", "Vishuvasam", "Thupakki", "Hangover","Avengers"];
//       const users = [
//         {
//           name: "Mankatha",
//           profile:"https://moviegalleri.net/wp-content/uploads/2011/05/vilayadu_mankatha_posters.jpg",
       
//              summary: "Inspector Vinayak is suspended after he lets a smuggler escape. He then meets a group of men who plan to whisk away 500 crore belonging to a gangster. He promises to help them for a share in the loot.",
//              Ratings: "⭐⭐⭐⭐⭐"
//             },
//         {
//           name: "Vishuvasam",
//           profile:"https://moviegalleri.net/wp-content/uploads/2018/08/Ajith-Viswasam-Movie-First-Look-Poster-HD.jpg",
         
//            summary:"Thookku Durai, a chieftain, gets separated from his wife, Niranjana, after their daughter, Swetha, gets injured during a fight. Years later, he tries to protect Swetha without revealing his identity.",
//           Ratings: "⭐⭐⭐⭐⭐"
//          },
//         {
//           name: "Vikram Vedha",
//           profile:"https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Vikram_Vedha_poster.jpg/220px-Vikram_Vedha_poster.jpg"
//             ,
//           summary:"Vikram, a pragmatic policeman, and his partner Simon are on the hunt to capture Vedha. When Vedha voluntarily surrenders, he offers to tell Vikram a story, throwing Vikram's life into disarray.",
//           Ratings: "⭐⭐⭐"
//         },
//         {
//           name: "Veeram",
//           profile: "https://cdn.cinematerial.com/p/297x/oc38igjo/veeram-indian-movie-poster-md.jpg?v=1456468953"
//         ,
//         summary:"Vinayagam, an honest man, uses violence to settle disputes; he decides to mend his ways for his lover's sake; hell breaks loose when he learns about a gang of rowdies following his lover's family.",
//          Ratings: "⭐⭐⭐⭐"  
//         },
//         {
//           name: "Avengers",
//           profile: "https://m.media-amazon.com/images/I/81OmkfFqvsL._AC_SL1440_.jpg"
//         ,
//         summary: "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).",
//         Ratings: "⭐⭐⭐⭐⭐"
//         }
//         ];
         
//   return (
//     <div className="App">
//       <Counter />
//       <Counter2 />
//       {users.map((usr) => (
//             <Welcome name={usr.name} profile={usr.profile} summary={usr.summary} Ratings={usr.Ratings} />
//           ))}
//     </div>
//   );
// }

// // Task - 1  Likes and Dislikes
// function Counter(){
//   const [like,setLike] = useState(0);
//   return(
//     <h1 className = "Good"> Likes
//     {/* <h4>Likes</h4>   */}
//       <button className = "Good2" onClick = {() => setLike(like + 1)}> 👍 {like}</button>
//     </h1>
//   )
// }

// function Counter2(){
//   const [disLike,setDislike] = useState(0);
//   return(
//     <h1 className = "Good"> Dislikes
//       <button className = "Good2" onClick = {() => setDislike(disLike + 1)}> 👎 {disLike}</button>
//     </h1>
//   )
// }

// function Welcome({ name, profile, summary, Ratings }) {
//     return (
//       <div className="come">
//         <h1>------------------------------------------------------------------</h1>
//         <img className="user-profile-pic" src={profile} alt="profile pic" />
//         <h1> {name}🎄😀</h1>
//         <h4>{summary}</h4>
//          <h4>{Ratings} </h4>  

//          <div class="star-rating">
//   <input type="radio" id="5-stars" name="rating" value="5" />
//   <label for="5-stars" class="star">&#9733;</label>
//   <input type="radio" id="4-stars" name="rating" value="4" />
//   <label for="4-stars" class="star">&#9733;</label>
//   <input type="radio" id="3-stars" name="rating" value="3" />
//   <label for="3-stars" class="star">&#9733;</label>
//   <input type="radio" id="2-stars" name="rating" value="2" />
//   <label for="2-stars" class="star">&#9733;</label>
//   <input type="radio" id="1-star" name="rating" value="1" />
//   <label for="1-star" class="star">&#9733;</label>
// </div>
//       </div>
//     );
//   }




