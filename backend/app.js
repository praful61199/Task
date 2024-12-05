// const express = require("express");
// // const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const templatesRoute = require("./routes/templates");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());


// const mongoose = require("mongoose");

// const MONGO_URI = "mongodb+srv://7700063268ss:miPJIKG1BkLznUZj@praful61199.r60kb.mongodb.net/task";

// mongoose
//   .connect(MONGO_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));







const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const templatesRoute = require("./routes/templates"); // Assuming you have routes set up for templates

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection URI
const MONGO_URI = "mongodb+srv://7700063268ss:miPJIKG1BkLznUZj@praful61199.r60kb.mongodb.net/task";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

// Setup routes for templates (assuming templatesRoute contains routes like /api/templates)
app.use("/api/templates", templatesRoute);

// Start server on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


