import "./DisplayJarPage.scss";
import { useParams } from "react-router-dom";

function DisplayJarPage() {
  const params = useParams();

  return (
    <>
      <div className="jar">
        <h1>Display test</h1>
        <p>Show movies from jar with id of {params.jarid}</p>
      </div>
    </>
  );
}

export default DisplayJarPage;
