const express = require('express');
const router = express();


router.get("/", (req, res) => {
  res.json({ message: "Sup from server!" });
});

module.exports = router;