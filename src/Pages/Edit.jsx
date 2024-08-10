import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState({
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
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`https://665724a99f970b3b36c81f26.mockapi.io/api/users/${id}`)
      .then((res) => setEdit(res.data))
      .catch((err) => console.log(err));
  };

  // Handles for specific input fields

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit((cvalue) => ({ ...cvalue, [name]: value }));
  };
  const handleAddress = (e) => {
    const { name, value } = e.target;
    setEdit((addvalue) => ({
      ...addvalue,
      address: {
        ...addvalue.address,
        [name]: value,
      },
    }));
  };

  const handleAddressSub = (e) => {
    const { name, value } = e.target;
    setEdit((geovalue) => ({
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
    setEdit((addvalue) => ({
      ...addvalue,
      company: {
        ...addvalue.company,
        [name]: value,
      },
    }));
  };

  // Handle for submit the editted value
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://665724a99f970b3b36c81f26.mockapi.io/api/users/${id}`, edit)
      .then((res) => res.data)
      .catch((err) => err);

    navigate("/users");
  };

  return (
    <div className="container">
      {/* Form for the Specific id to edit the details */}
      <form className="row g-3" onSubmit={handleSubmit}>
        <legend>BASIC PROFILE INFORMATION</legend>

        <div className="col-6 col-md-4">
          <label className="form-label">ID :</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={edit.id}
            onChange={handleChange}
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Name :</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={edit.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Users Name :</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={edit.username}
            onChange={handleChange}
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Email :</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={edit.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Phone :</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={edit.phone}
            onChange={handleChange}
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Website :</label>
          <input
            type="text"
            className="form-control"
            name="website"
            value={edit.website}
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
            value={edit.address.street}
            onChange={handleAddress}
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Suite :</label>
          <input
            type="text"
            className="form-control"
            name="suite"
            value={edit.address.suite}
            onChange={handleAddress}
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">City :</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={edit.address.city}
            onChange={handleAddress}
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Zipcode :</label>
          <input
            type="text"
            className="form-control"
            name="zipcode"
            value={edit.address.zipcode}
            onChange={handleAddress}
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Latitude :</label>
          <input
            type="text"
            className="form-control"
            name="lat"
            value={edit.address.geo.lat}
            onChange={handleAddressSub}
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Longitude :</label>
          <input
            type="text"
            className="form-control"
            name="lng"
            value={edit.address.geo.lng}
            onChange={handleAddressSub}
          />
        </div>
        <hr />
        <legend>COMPANY DETAILS</legend>
        <div className="col-6 col-md-4">
          <label className="form-label">Name :</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={edit.company.name}
            onChange={handleCompany}
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Catch Phrase :</label>
          <input
            type="text"
            className="form-control"
            name="catchPhrase"
            value={edit.company.catchPhrase}
            onChange={handleCompany}
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Company BS :</label>
          <input
            type="text"
            className="form-control"
            name="bs"
            value={edit.company.bs}
            onChange={handleCompany}
          />
        </div>
        <hr />
        {/* Buttons for Update and Go back */}
        <div className="d-grid gap-2 d-md-flex">
          <button type="submit" className="btn btn-success">
            Update
          </button>

          <button
            type="button"
            className="btn btn-info"
            onClick={() => navigate("/users")}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;