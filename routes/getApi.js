var express = require("express");
var router = express.Router();

router.post("/getDetails", (request, response) => {
  const requestObject = request.body;
  const autoPrice = Number(requestObject.autoPrice);
  const userCreditScore = Number(requestObject.userCreditScore);
  const userYearlyIncome = Number(requestObject.userYearlyIncome);
  let message = "";
  if (autoPrice > 1000000) {
    message = "Bad request";
  } else if (autoPrice > userYearlyIncome / 5 || userCreditScore < 600) {
    message = "disqualified";
  } else {
    message = "qualified";
  }
  response.json({ msg: message });
});
module.exports = router;
