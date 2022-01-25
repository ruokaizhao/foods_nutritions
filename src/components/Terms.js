import react from "react";
import { useParams } from "react-router-dom";

function Terms({ terms }) {
  const params = useParams()

  return (
    <h3 className="terms">{terms[params.termId]}</h3>
  )


}

export default Terms