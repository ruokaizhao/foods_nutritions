import React, { useState } from "react";
import { Route, useRouteMatch } from "react-router-dom"
import TermsList from "./TermsList"
import Terms from "./Terms"

function TermsExplain() {
  const match = useRouteMatch()

  const [terms, setTerms] = useState({
    calorie: "An ideal daily intake of calories varies depending on age, metabolism and levels of physical activity, among other things. Generally, the recommended daily calorie intake is 2,000 calories a day for women and 2,500 for men.",
    protein: "The recommended dietary allowance to prevent deficiency for an average sedentary adult is 0.8 g per kg of body weight. For example, a person who weighs 75 kg (165 pounds) should consume 60 g of protein a day.",
    carbohydrate: "The Dietary Guidelines for Americans recommends that carbohydrates make up 45 to 65 percent of your total daily calories. So, if you get 2,000 calories a day, between 900 and 1,300 calories should be from carbohydrates. That translates to between 225 and 325 grams of carbohydrates a day.",
    fat: "Total fat. The dietary reference intake (DRI) for fat in adults is 20% to 35% of total calories from fat. That is about 44 grams to 77 grams of fat per day if you eat 2,000 calories a day."
  })

  

  return (
    <div>
      <TermsList terms={terms} />
      <Route path={`${match.url}/:termId`}>
        <Terms onTerms={terms} />
      </Route>
    </div>
    )
}

export default TermsExplain