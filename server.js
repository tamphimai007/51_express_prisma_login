// Step 1 Import ...
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { readdirSync } = require("fs");
const cors = require('cors')
// import router
// const authRouter =  require('./routers/auth')
// const userRouter = require('./routers/user')

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors())
// Step 3 Routing
readdirSync("./routers")
.map((c) => app.use("/api", require("./routers/" + c)));
// app.use('/api',authRouter)
// app.use('/api',userRouter)

// Step 2 Start Server
app.listen(5000, () => console.log("Server is running on port 5000"));
