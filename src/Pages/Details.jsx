
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = ({ detail, setId }) => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
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
      .get(`https://665724a99f970b3b36c81f26.mockapi.io/api/users/${detail}`)
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container">
      <form className="row g-3" onSubmit={() => handleSubmit(info.id)}>
        <legend>BASIC INFORMATION</legend>

        <div className="col-6 col-md-4">
          <label className="form-label">ID :</label>
          <input
            type="text"
            className="form-control"
            placeholder={info.id}
            readOnly
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Name :</label>
          <input
            type="text"
            className="form-control"
            placeholder={info.name}
            readOnly
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Users Name :</label>
          <input
            type="text"
            className="form-control"
            placeholder={info.username}
            readOnly
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Email :</label>
          <input
            type="text"
            className="form-control"
            placeholder={info.email}
            readOnly
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Phone :</label>
          <input
            type="text"
            className="form-control"
            placeholder={info.phone}
            readOnly
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Website :</label>
          <input
            type="text"
            className="form-control"
            placeholder={info.website}
            readOnly
          />
        </div>
        <hr />
        <legend>ADDRESS</legend>
        <div className="col-6 col-md-4">
          <label className="form-label">Street :</label>
          <input
            type="text"
            className="form-control"
            placeholder={info.address.street}
            readOnly
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Suite :</label>
          <input
            type="text"
            className="form-control"
            placeholder={info.address.suite}
            readOnly
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">City :</label>
          <input
            type="text"
            className="form-control"
            placeholder={info.address.city}
            readOnly
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Zipcode :</label>
          <input
            type="text"
            className="form-control"
            placeholder={info.address.zipcode}
            readOnly
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Latitude :</label>
          <input
            type="text"
            className="form-control"
            placeholder={info.address.geo.lat}
            readOnly
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Longitude :</label>
          <input
            type="text"
            className="form-control"
            placeholder={info.address.geo.lng}
            readOnly
          />
        </div>
        <hr />
        <legend>COMPANY PROFILE DETAILS</legend>
        <div className="col-6 col-md-4">
          <label className="form-label">Name :</label>
          <input
            type="text"
            className="form-control"
            placeholder={info.company.name}
            readOnly
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Catch Phrase :</label>
          <input
            type="text"
            className="form-control"
            placeholder={info.company.catchPhrase}
            readOnly
          />
        </div>
        <div className="col-6 col-md-4">
          <label className="form-label">Company BS :</label>
          <input
            type="text"
            className="form-control"
            placeholder={info.company.bs}
            readOnly
          />
        </div>
        <hr />
        <div className="d-grid gap-2 d-md-flex">
          <button type="submit" className="btn btn-warning">
            Edit
          </button>

          <button
            type="button"
            className="btn btn-info"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Details;
