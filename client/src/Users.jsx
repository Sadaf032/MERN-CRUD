import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/users")
            .then((result) => {
                console.log(result.data);
                setUsers(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">

                <Link to="/create" className="btn btn-success mb-2">
                    Add +
                </Link>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link
                                        to={`/update/${user._id}`}
                                        className="btn btn-success me-2"
                                    >
                                        Update
                                    </Link>

                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            axios
                                                .delete(`http://localhost:5000/users/${user._id}`)
                                                .then(() => {
                                                    setUsers(users.filter((u) => u._id !== user._id));
                                                })
                                                .catch((err) => {
                                                    console.log(err);
                                                    alert("Error deleting user");
                                                });
                                        }}>
                                        Delete
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Users;