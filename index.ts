import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});


// const walterWhite = { sayMyName: "Heisenberg" };

// const youKnowWhoIAm = (req, res) => {
//   res.json(walterWhite);
// };

// app.get("/who-are-you", youKnowWhoIAm);


const port = 3310;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




// CHALLENGE :
// import express from "express";

// const app = express();

// const data = ["lorem", "ipsum", "dolor", "sit", "amet"];

// app.get("/words", (req, res) => {
//   res.json(data);
// });

// const port = 3310;

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });