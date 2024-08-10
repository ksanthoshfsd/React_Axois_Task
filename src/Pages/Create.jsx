
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  //Navigation hook install
  const navigate = useNavigate();
  //Setting the new data's using useState Hook
  const [create, setCreate] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  //handle function for specific purpose
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreate((cvalue) => ({ ...cvalue, [name]: value }));
  };
  const handleAddress = (e) => {
    const { name, value } = e.target;
    setCreate((addvalue) => ({
      ...addvalue,
      address: {
        ...addvalue.address,
        [name]: value,
      },
    }));
  };

  const handleAddressSub = (e) => {
    const { name, value } = e.target;
    setCreate((geovalue) => ({
      ...geovalue,
      address: {
        ...geovalue.address,
        geo: {
          ...geovalue.address.geo,
          [name]: value,
        },
      },
    }));
  };

  const handleCompany = (e) => {
    const { name, value } = e.target;
    setCreate((addvalue) => ({
      ...addvalue,
      company: {
        ...addvalue.company,
        [name]: value,
      },
    }));
  };

  //Handle for submit the form's data to create the user information
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`https://665724a99f970b3b36c81f26.mockapi.io/api/users`, create)
      .then((res) => res.data)
      .catch((err) => err);

    navigate("/users");
  };

  return (
    <div className="container">
      {/* Form for Entering User Information Required Details */}
      <form className="row g-3" onSubmit={handleSubmit}>
        <legend>BASIC PROFILE INFORMATION</legend>

        <div className="col-6 col-md-4">
          <label className="form-label">ID :</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={create.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Name :</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={create.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Users Name :</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={create.username}
            onChange={handleChange}
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Email :</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={create.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Phone :</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={create.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Website :</label>
          <input
            type="text"
            className="form-control"
            name="website"
            value={create.website}
            onChange={handleChange}
          />
        </div>
        <hr />
        <legend>ADDRESS</legend>
        <div className="col-6 col-md-4">
          <label className="form-label">Street :</label>
          <input
            type="text"
            className="form-control"
            name="street"
            value={create.address.street}
            onChange={handleAddress}
            required
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Suite :</label>
          <input
            type="text"
            className="form-control"
            name="suite"
            value={create.address.suite}
            onChange={handleAddress}
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">City :</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={create.address.city}
            onChange={handleAddress}
            required
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Zipcode :</label>
          <input
            type="text"
            className="form-control"
            name="zipcode"
            value={create.address.zipcode}
            onChange={handleAddress}
            required
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Latitude :</label>
          <input
            type="text"
            className="form-control"
            name="lat"
            value={create.address.geo.lat}
            onChange={handleAddressSub} 
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Longitude :</label>
          <input
            type="text"
            className="form-control"
            name="lng"
            value={create.address.geo.lng}
            onChange={handleAddressSub}
          />
        </div>
        <hr />
        <legend>COMPANY DETAILS</legend>
        <div className="col-6 col-md-4">
          <label className="form-label">Company Name :</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={create.company.name}
            onChange={handleCompany}
            required
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Company Catch Phrase :</label>
          <input
            type="text"
            className="form-control"
            name="catchPhrase"
            value={create.company.catchPhrase}
            onChange={handleCompany}
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Company BS :</label>
          <input
            type="text"
            className="form-control"
            name="bs"
            value={create.company.bs}
            onChange={handleCompany}
          />
        </div>
        {/* Buttons for create and going back */}
        <div className="d-grid gap-2 d-md-flex">
          <button type="submit" className="btn btn-info">
            Create
          </button>

          <button
            type="button"
            className="btn btn-warning"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
