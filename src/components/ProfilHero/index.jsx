import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

import userService from "./../../services/user.service";

function ProfilHero() {
  function handleClickEdit() {
    setEdit(!edit);
    if (edit === true) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
  }

  function verifiedInput(e) {
    if (e.match("^[a-zA-Z ]*$") !== null) {
      return true;
    } else {
      return false;
    }
  }

  function handleClickSaving() {
    if (firstName.length > 0 && lastName.length > 0) {
      if (firstName !== user.firstName || lastName !== user.lastName) {
        userService.saveUserProfile(firstName, lastName);
        window.location.reload();
      }
    } else {
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
    setEdit(false);
  }

  const user = useSelector((state) => state.userProfile.user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
  }, [user]);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {!edit && `${firstName} ${lastName}`}
      </h1>
      {edit && (
        <Fragment>
          <form>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                if (verifiedInput(e.target.value)) {
                  setFirstName(e.target.value);
                }
              }}
            />
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => {
                if (verifiedInput(e.target.value)) {
                  setLastName(e.target.value);
                }
              }}
            />
            <br />
            <br />
            <button
              type="button"
              className="edit-button"
              onClick={handleClickSaving}
            >
              Saving
            </button>
            <button
              type="button"
              className="edit-button"
              onClick={handleClickEdit}
            >
              Cancel
            </button>
          </form>
        </Fragment>
      )}
      {!edit && (
        <button type="button" className="edit-button" onClick={handleClickEdit}>
          Edit Name
        </button>
      )}
    </div>
  );
}
export default ProfilHero;
