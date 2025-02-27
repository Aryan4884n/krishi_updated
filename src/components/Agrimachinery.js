import React, { useState } from "react";
import Navbar from "./Navbar";

export const Agrimachinery = ({ addAgri }) => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactNo: "",
    address: "",
    District: "",
    state: "",
    pincode: "",
    machine:"",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, contactNo, address, District, state, pincode,machine } = data;
    console.log(firstname, lastname, email, contactNo, address, District, state, pincode, machine);
    fetch("http://localhost:8080/agris", {
      method: "POST",
      crossDomain: true,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        contactNo,
        address,
        District,
        state,
        pincode,
        machine,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        window.location.href('/mach')
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
    <Navbar/>
      <div
        className=" d-flex align-items-center justify-content-center "
        style={{ color: "#34495E ", paddingTop: "5rem" }}
      >
        <div
          className=" card auth-card input-field align-items-center "
          style={{
            width: "50rem",
            paddingBottom: "10px",
            color: "#212F3D",
            backgroundColor: "#979A9A",
          }}
        >
          <h2>Apply for Agri AgriMachinery</h2>
          <p> *filled only if you have AgriMachinery</p>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="firstname" className="form-label">First Name</label>
              <input type="text" value={data.firstname} onChange={handleOnChange} className="form-control" placeholder="First Name" id="firstname" name="firstname" />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastname" className="form-label">Last Name</label>
              <input type="text" value={data.lastname} onChange={handleOnChange} className="form-control" placeholder="Last name" id="lastname" name="lastname" />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" value={data.email} onChange={handleOnChange} className="form-control" placeholder="Email" id="email" name="email" />
            </div>
            <div className="col-md-6">
              <label htmlFor="contactNo" className="form-label">Contact Number</label>
              <input type="Number" value={data.contactNo} onChange={handleOnChange} className="form-control" placeholder="Contact Number" id="contactNo" name="contactNo" />
            </div>
            <div className="col-12">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" value={data.address} onChange={handleOnChange} className="form-control" id="address" placeholder="Residential address" name="address" />
            </div>
            <div className="col-md-4">
              <label htmlFor="District" className="form-label">District</label>
              <input type="text" value={data.District} onChange={handleOnChange} className="form-control" placeholder="Your District" id="District" name="District" />
            </div>
            <div className="col-md-4">
              <label htmlFor="state" className="form-label">State</label>
              <select id="state" value={data.state} onChange={handleOnChange} className="form-select" name="state">
                <option selected>Choose...</option>
                <option>UttarPradesh</option>
                <option>MadhyaPradesh</option>
                <option>AndhraPradesh</option>
                <option>ArunachalPradesh</option>
                <option>Gujrat</option>
                <option>Maharashtra</option>
                <option>Rajasthan</option>
                <option>Bihar</option>
                <option>Punjab</option>
                <option>HimachalPradesh</option>
                <option>Haryana</option>
                <option>Delhi</option>
                <option>Uttarakhand</option>
                <option>Jammu&Kashmir</option>
                <option>WestBengal</option>
                <option>Goa</option>
                <option>Kerela</option>
                <option>Orrisa</option>
                <option>Jharkhand</option>
                <option>Telengana</option>
                <option>Karnataka</option>
                <option>Tamilnadu</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="inputZip" className="form-label">Pincode</label>
              <input type="text" value={data.pincode} className="form-control" placeholder="Enter Valid Six-Digit code" id="inputZip" onChange={handleOnChange} name="pincode" />
            </div>

            <div className="col-md-4">
              <label htmlFor="machine" className="form-label">
                Machines you Have for
              </label>
              <select id="machine" name="machine" value={data.machine} onChange={handleOnChange}  className="form-select">
                <option selected>Choose...</option>
                <option>Soil/land preparation</option>
                <option>Sowing</option>
                <option>Manuring</option>
                <option>Irrigation</option>
                <option>Protecting the weeds/Crops</option>
                <option>Harvesting</option>
                <option>Weeding</option>
                <option>Crop Storage</option>
              </select>
            </div>

            <div className="col-12">
              <button type="button" onClick={handleSubmit} className="btn btn-primary"> Apply  </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Agrimachinery;
