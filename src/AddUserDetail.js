import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik"; 
import * as yup from "yup";


export const userdetailValidationSchema = yup.object({
  FirstName: yup.string().required("Why not fill this FirstName? 😀"),
  LastName: yup
      .string()
      .required("Why not fill this LastName? 😀")
      .min(4, "Need a longer poster 😀"),
  Email: yup.string().required("Why not fill this  Email? 😀"),
  Password: yup
  .string()
  .required("Why not fill this Password 😀")
  .min(8, "Need a longer Password 😀"),
  TypeOfuser: yup
  .string()
  .required("Why not fill this TypeOfuser? 😀")
  .min(4, "Need a longer TypeOfuser 😀"),
});

// export function AddMovie({ movieList, setMovieList }) {
export function AddUserDetail() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");
  const history = useHistory();


  // FirstName: "",
  // LastName: "",
  // Email: "",
  // Password: "",
  // TypeOfuser: "", 
  const formik = useFormik({
    initialValues: {
     FirstName: "",
     LastName: "",
      Email: "",
    Password: "",
    TypeOfuser: "",
    },
     validationSchema: userdetailValidationSchema,
    onSubmit: (newuserdetail) => {
      // console.log("onSubmit", newMovie);
      adduserdetail(newuserdetail);
    },
  }); 
// https://cdn.123telugu.com/content/wp-content/uploads/2022/02/FIR-2.jpg
<iframe width="1280" height="720" src="https://www.youtube.com/embed/eVKIjoK7FnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  const adduserdetail = (newuserdetail) => { 
    // const newMovie = {  
    //    name: name,
    //    poster: poster,
    //    rating: rating,
    //    summary: summary,
    //    trailer: trailer, 
    //    };
           // 1. method must be POST  
           // 2. body - JSON data
           // 3. headers - JSON data
           // After POST is complete ->  movie to /movies
       console.log("onSubmit", newuserdetail);
       fetch(`${API}/userdetails/`, {
       method: "POST",
       body: JSON.stringify(newuserdetail),
       headers: {
         "Content-Type": "application/json", 
          },   
          }).then(() => history.push("/userdetails"));
          // setMovieList([...movieList, newMovie]); 
        };
   return (
    <form onSubmit = {formik.handleSubmit} className="add-userdetail-form">
      <TextField
        label="FirstName"
        name="firstname"
        id="name"        
        type="text"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.firstname}
        onBlur = {formik.handleBlur}
        error = {formik.touched.firstname && formik.errors.firstname}
        helperText = {formik.touched.firstname && formik.errors.firstname ? formik.errors.firstname : ""}
         // onChange={(event) => setName(event.target.value)}    
        />
              {/* <input
             type = "text"
             onChange = {(event) => setName(event.target.value)}
             placeholder = "Name"
              /> */}
      <TextField
        type = "text"
        label="LastName"
        id = "name"
        name="lastname"
        variant="outlined"
        // placeholder = "Poster"
        onChange={formik.handleChange}
        value={formik.values.lastname}
        onBlur = {formik.handleBlur}
        error = {formik.touched.lastname && formik.errors.lastname}
        helperText = {
          formik.touched.lastname && formik.errors.lastname ? formik.errors.lastname : ""
        }
         />
         
        
      <TextField
        text = "text"
        label="Email"
        id="email"
        name="email"
        //placeholder = "Rating" 
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur = {formik.handleBlur}
        variant="outlined" 
        error = {formik.touched.email && formik.errors.email}
        helperText = {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
         />
       
      <TextField
        type= "text"
        label="Password"
        id="password"
        name="password"
        // placeholder = "Summary"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur = {formik.handleBlur}
        variant="outlined"
        error = {formik.touched.password && formik.errors.password}
        helperText = {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
        />
        
      <TextField
        type="text"
        label="TypeOfuser"
        id="TypeOfuser"
        name="TypeOfuser"
        onChange={formik.handleChange}
        value={formik.values.TypeOfuser}
        onBlur = {formik.handleBlur}
        // onChange={(event) => setTrailer(event.target.value)}
        variant="outlined" 
        error = {formik.touched.TypeOfuser && formik.errors.TypeOfuser}
        helperText = {formik.touched.TypeOfuser && formik.errors.TypeOfuser ? formik.errors.TypeOfuser : ""}
        />
      {/* <button onClick = {() => console.log(name, poster, rating, summary)}>Add Movie</button> */}
      {/* Copy the movieList and add new movie to it */}
     {/* <Button onClick = {() => addMovie()} variant = "contained"> */}
     <Button type="submit" variant = "contained">
        Add UserDetail 
      </Button>
  </form>
);
}



