import react from "react";
import { useParams } from "react-router-dom";

function Terms({ onTerms }) {
  const params = useParams()

  return (
    <h3 className="terms">{onTerms[params.termId]}</h3>
  )


}

export default Terms