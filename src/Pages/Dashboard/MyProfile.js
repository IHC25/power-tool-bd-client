import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [updatedUser, setUpdatedUser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/my-profile/${user.email}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdatedUser(data);
      });
  }, [user, updatedUser]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = {
      name: user.displayName,
      email: user.email,
      education: e.target.education.value,
      location: e.target.location.value,
      phone: e.target.phone.value,
      linkedin: e.target.linkedin.value,
    };
    fetch(`http://localhost:5000/update-user/${user.email}`, {
      method: "PATCH",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("User Updated!");
      });
  };
  return (
    <div>
      <h2 className="text-4xl py-4 text-neutral font-bold uppercase">
        My Profile
      </h2>
      <div class="w-full bg-base-200">
        <div class="mx-auto w-1/2 py-14">
          <div class="card max-w-lg shadow-2xl bg-base-100">
            <div class="card-body w-full">
              <form onSubmit={handleUpdate} className="w-full" action="">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    value={user.displayName}
                    disabled
                    class="input input-bordered"
                  />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    class="input input-bordered"
                  />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Education</span>
                  </label>
                  <input
                    type="text"
                    name="education"
                    defaultValue={updatedUser[0]?.education}
                    placeholder="Add your eduction"
                    class="input input-bordered"
                  />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text">location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    defaultValue={updatedUser[0]?.location}
                    placeholder="Add your location"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    defaultValue={updatedUser[0]?.phone}
                    placeholder="Add your Phone Number"
                    class="input input-bordered"
                  />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text">LinkedIn</span>
                  </label>
                  <input
                    type="text"
                    name="linkedin"
                    defaultValue={updatedUser[0]?.linkedin}
                    placeholder="Add your LinkedIn Link"
                    class="input input-bordered"
                  />
                </div>

                <div class="form-control mt-6">
                  <button class="btn btn-neutral">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
