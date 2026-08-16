import React, { useState } from "react";
import axios from "axios";

function CreateUsers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const Submit = async (e) => {
    e.preventDefault();

    if (!name || !email || !age) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      const result = await axios.post(
        "https://mern-crud-production.up.railway.app/users",
        {
          name,
          email,
          age,
        }
      );

      console.log(result.data);

      setMessage("User added successfully!");

      setName("");
      setEmail("");
      setAge("");
    } catch (err) {
      console.log(err);
      setMessage("Error adding user. Please try again.");
    }
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add User</h2>

          {message && (
            <div className="alert alert-info">
              {message}
            </div>
          )}

          <div className="mb-2">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="age">Age</label>

            <input
              type="number"
              id="age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUsers;