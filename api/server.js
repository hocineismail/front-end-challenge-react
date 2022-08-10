const express = require("express");
const data = require("./api");
const app = express();

require("dotenv").config();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.get("/api/v1/absences", async (req, res) => {
  const absenceData = await data.absences();
  const memberData = await data.members();
  const memberMap = {};
  memberData.forEach((member) => {
    memberMap[member.userId] = member;
  });

  const types = [];
  const sortedData = absenceData.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const slicedPart = sortedData.map((absence) => {
    const isDuplicate = types.includes(absence.type);
    if (!isDuplicate) {
      types.push(absence.type);
    }
    let status = "Requested";
    if (absence.rejectedAt) {
      status = "Rejected";
    }
    if (absence.confirmedAt) {
      status = "Confirmed";
    }
    let memberDetails = memberMap[absence.userId];
    let { name } = memberDetails;
    return { ...absence, name, status };
  });
  res.status(200).json({
    types: types,
    absences: slicedPart,
  });
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
