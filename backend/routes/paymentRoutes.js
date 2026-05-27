const express = require("express");

const router = express.Router();

router.post("/create-preference", async (req, res) => {
  try {
    res.json({
      message: "Ruta MercadoPago funcionando 🚀",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;