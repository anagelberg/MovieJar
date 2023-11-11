import "./LandingPage.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserFeedback from "../../components/UserFeedback/UserFeedback";

function LandingPage({ currentJar, setDefaultJar, jars }) {

  const navigate = useNavigate();


  // Come back to -- somewhat messy
  useEffect(() => {
    // default to first jar 
    setDefaultJar();
    (Object.keys(currentJar).length !== 0)
      && navigate(`/jar/${currentJar?.jarId}`)
  }, [jars, currentJar])


  return <UserFeedback message="Welcome to movie jar! Create some jars and and search for movies to add to get started." />;

}

export default LandingPage;
