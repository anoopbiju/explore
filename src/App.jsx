// function App() {
//   const handleClick =()=> {
//     alert("Button Clicked!");
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//       <br></br>
//       <button onClick={() => { console.log("Button clicked")}}>Click</button>
//     </div>
//   )
// }

// export default App;



// import React from "react";
// import { useState } from "react";
// function App() {

//   const [forData,setFormData]=useState({
//     name:"",
//     email:"",
//     password: "",
//     gender:"",
//     course:"",
//     agree: false,
//   })
//   const [errors,setErrors]=useState9({});
//   const handleChange = (e) = {
//     const {name,value,type,cheecked } =e.target;
//     setFormData({
//       ...formData,
//       [name]:type === "checkbox" ? checked :value,
//     });
//   };

//   const validate = () => {
//     let newErrors = {};
    
//     if (!formData.name) {
//       newErrors.name = "Name is required";
//     }
//     if (!formData.email.includes("@")){
//       newErrors.email = "valid email required";
//     }
//     if (formData.passsword.length < 6) {
//       newErrors.password = "Password must be 6+ chars";
//     }
//     if (!formData.gender) {
//       newErrors.gender = "Select gender";
//     }
//     if (!formData.course) {
//       newErrors.course = "Select course";
//     }
//     if(!formData.agree){
//       newErrors.agree = "You must agree";
//     }
//     return newErrors;
//   };

//   return (
//     <div>
//       <h2>Student Registration Form</h2>

//       <form>
//         {/*Name*/}
//         <input type="text" name="name" placeholder="Enter name"/>
//         <br />
//         <br />

//         {/*Email */}
//         <input type="email" name="email" placeholder="Enter Email" />
//         <br />
//         <br />

//         {/* Password */}
//         <input type="password" name="password" placeholder="Enter Password" />
//         <br />
//         <br />

//         {/*Gender */}
//         <div>
//           <label>
//             <input type="radio" name="gender" value="Male" />
//             Male
//           </label>

//           <label>
//             <input type="radio" name="gender" value="Female" />
//             Female
//           </label>
//         </div>
//         <br />
//         {/* course */}
//         <select name="course">
//           <option value="">Select Course</option>
//           <option value="Flutter">Flutter</option>
//           <option value="React">React</option>
//           <option value="MERN">MERN</option>
//         </select>
//         <br />
//         <br />
//         {/* Checkbox */}
//         <label>
//           <input type="checkbox" name="agree" />
//           I agree to terms
//         </label>
//         <br />
//         <br />

//         {/* Submit */}
//         <button type ="submit">Register</button>
//         </form>
//         </div>
//   );
// }
// export default App;

import React from "react";
import{ useState } from "react";
function App(){
const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    courise: "",
    agree: false,
  });import React from "react";
import{ useState } from "react";
funct

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  // validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Valid email required";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be 6+ chars";
    }
    if (!formData.gender) {
      newErrors.gender = "Select gender";
    }
    if (!formData.course) {
      newErrors.course = "Select course";
    }
    if (!formData.agree) {
      newErrors.agree = "You must agree";
    }

    return newErrors;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const validationErrors = validate();
  //   setErrors(validationErrors);

  //   if (Object.keys(validationErrors).length === 0) {
  //     alert("Form submitted successfully!");
  //     console.log(formData);
  //   }
  // };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0){
      setErrors(validationErrors);
    }else{
      alert("Form Submitted Successfully!");
      console.log(formData);
      
      // Reset form
    setFormData({
      name:"",
      email:"",
    password:"",
    gender:"",
    couse:"",
    agree:false,    
});
setErrors({});
    }
  };

  return (
    <div style={{maxWidth:"400px",margin:"auto"}}>
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
        />
        <p style={{color:"red"}}>{errors.name}</p>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <p style={{ color:"red"}}>{errors.email}</p>
      

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        <p style={{ color: "red"}}>{errors.password}</p>

        {/* Gender */}
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <p style={{color:"red" }}>{errors.gender}</p>

        {/* Course */}
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="Flutter">Flutter</option>
          <option value="React">React</option>
          <option value="MERN">MERN</option>
        </select>
        <p style={{color: "red"}}>{errors.course}</p>

        {/* Checkbox */}
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          I agree to terms
        </label>
        <p style={{ color:"red"}}>{errors.agree}</p>

        {/* Submit */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;