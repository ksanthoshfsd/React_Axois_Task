import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setDetail }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const handleDetail = (id) => {
    setDetail(id);
    navigate(`/detail/${id}`);
  };

  const fetchData = async () => {
    await axios
      .get("https://665724a99f970b3b36c81f26.mockapi.io/api/users")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container-fluid head-home ">
      <div className="row ">
        <div className="col-6 user-body">
          <legend>Dashboard</legend>
        </div>
        <div className="col-6">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              className="btn btn-primary user-body"
              onClick={() => {
                navigate("/create");
              }}
            >
              Create New Profile
            </button>
          </div>
        </div>
      </div>
      <div className="container main-home">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {user.map((element, index) => {
            return (
              <div key={index}>
                <div className="col">
                  <div className="card h-100">
                    <div className="card-header">
                      <h4>{element.name}</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">User ID : {element.id}</p>
                      <p className="card-text">
                        Company : {element.company.name}
                      </p>
                      <p className="card-text">Phone : {element.phone}</p>
                    </div>
                    <div className="card-footer">
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => {
                          handleDetail(element.id);
                        }}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;