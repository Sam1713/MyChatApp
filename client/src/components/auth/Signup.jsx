import { Button, Card, Checkbox, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import axios from 'axios'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profilePic: null,
  });
  const [loading,setLoading]=useState(false)

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    profilePic: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  const handleFileChange = (e) => {
  const pic=e.target.files[0]
    setLoading(true)
    if(pic===undefined){
    console.log("Pics Undefined")
    }
    if(pic.type==="image/jpeg"||pic.type==="image/png"){
      const data=new FormData()
      data.append("file",pic)
      data.append("upload_preset","chatApp") 
      data.append("cloud_name","dl4gzvqvr")
      fetch("https://api.cloudinary.com/v1_1/dl4gzvqvr/image/upload",{
        method:'post',
        body:data,
      }).then((res)=>res.json())
      .then((data)=>{
        console.log('dara',data)
        setFormData({ ...formData, profilePic: data.url.toString() });
        setLoading(false)
        setErrors({ ...errors, profilePic: "" })
      })
         }else{
          console.log('Error happended')
         }
    // setFormData({ ...formData, profilePic: e.target.files[0] });
    // setErrors({ ...errors, profilePic: "" }); // Clear error on file change
  };
  console.log('form',formData)

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (!formData.profilePic) newErrors.profilePic = "Profile picture is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
    //https://api.cloudinary.com/v1_1/dl4gzvqvr/image/upload
      // Create a FormData object
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("profilePic", formData.profilePic);
  
      try {
        const response = await axios.post('http://localhost:5000/user/signupUser',  {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          profilePic: formData.profilePic, 
        });
        console.log("Signup successful:", response.data);
        alert("Signup successful! Please log in.");
      } catch (error) {
        console.error("Signup error:", error);
        alert("Signup failed. Please try again.");
      }
    }
  };
  

  return (
    <Card color="transparent" shadow={false} className="bg-gray-100 p-4 md:p-6 rounded-xl">
      <Typography variant="h4" color="blue-gray" className="mb-2">
        Sign Up
      </Typography>
      <Typography color="gray" className="mb-4 text-sm font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-3 flex flex-col gap-2">
          {/* Name */}
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="John Doe"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
            />
            {errors.name && <Typography color="red" className="text-sm mt-1">{errors.name}</Typography>}
          </div>

          {/* Email */}
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
            />
            {errors.email && <Typography color="red" className="text-sm mt-1">{errors.email}</Typography>}
          </div>

          {/* Password */}
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
            />
            {errors.password && <Typography color="red" className="text-sm mt-1">{errors.password}</Typography>}
          </div>

          {/* Profile Picture */}
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              Profile Picture
            </Typography>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              error={!!errors.profilePic}
              className="file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-gray-200 file:text-sm file:font-medium file:text-gray-700 hover:file:bg-gray-300"
            />
            {errors.profilePic && <Typography color="red" className="text-sm mt-1">{errors.profilePic}</Typography>}
          </div>
        </div>

        {/* Terms and Conditions */}
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree to the
              <a href="#" className="font-medium transition-colors hover:text-gray-900">
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />

        {/* Submit Button */}
        <Button className="mt-4" type="submit" fullWidth>
          Sign Up
        </Button>

        {/* Sign In Link */}
        <Typography color="gray" className="mt-3 text-center text-sm font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
};

export default Signup;
