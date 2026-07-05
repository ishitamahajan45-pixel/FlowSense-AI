const fs = require("fs");
const csv = require("csv-parser");

const uploadCSV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Please upload a CSV file",
      });
    }

    const results = [];

    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", (data) => {
        results.push(data);
      })
      .on("end", () => {

        const totalEvents = results.length;

        let score = 100;

        if (totalEvents < 5) {
          score = 65;
        } else if (totalEvents < 15) {
          score = 80;
        } else {
          score = 95;
        }

        res.json({
          success: true,
          totalEvents,
          healthScore: score,
          status: score >= 80 ? "Healthy Process" : "Needs Improvement",
        });
      });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }
};

module.exports = {
  uploadCSV,
};