/* Start Import And Create Express App */

const express = require("express");

const app = express();

/* End Import And Create Express App */

/* Start Config The Server */

const cors = require("cors"),
    bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.json());

require('dotenv').config();

/* End Config The Server */

/* Start Running The Server */

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`The Server Is Running On: http://localhost:${PORT}`));

/* End Running The Server */

/* Start Handle The Routes */

const usersRouter = require("./routes/users.router"),
        textToImageGenerateRouter = require("./routes/textToImageGenerate.router");

app.use("/users", usersRouter);

app.use("/text-to-image-generate", textToImageGenerateRouter);

/* End Handle The Routes */