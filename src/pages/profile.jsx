import { useDispatch } from "react-redux";

import { userProfile } from "../actions/user";

import ProfilHero from "../components/ProfilHero";
import ProfilBody from "../components/ProfilBody";

function Profile() {
  const dispatch = useDispatch();

  dispatch(userProfile());

  return (
    <main className="main bg-dark">
      <ProfilHero />
      <ProfilBody />
    </main>
  );
}

export default Profile;
