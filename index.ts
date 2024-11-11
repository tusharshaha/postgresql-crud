import express from "express";
import userRoute from "./routes/user.route";
import "dotenv/config";
import "colors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', userRoute);

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`.bgYellow);
});

// handle globaly unhandle Rejection
process.on("unhandledRejection", (error: Error) => {
  server.close(() => {
    process.exit(1);
  });
});
