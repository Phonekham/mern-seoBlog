import Link from "next/link";
import { useEffect, useState } from "react";
import Router from "next/router";
import { getCookie, isAuth } from "../../actions/auth";
import { getProfile, update } from "../../actions/user";

const ProfileUpdate = () => {
  const [values, setValues] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    error: false,
    success: false,
    loading: false,
    photo: "",
    userData: ""
  });

  const token = getCookie("token");
  const {
    username,
    name,
    email,
    password,
    error,
    success,
    loading,
    photo,
    userData
  } = values;

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    getProfile(token).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          username: data.username,
          name: data.name,
          email: data.email,
          about: data.about
        });
      }
    });
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-4">image</div>
          <div className="col-md-8">
            update form {JSON.stringify({ username, email })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileUpdate;
