import http from "http";
import app from "./app.js";
import { PORT } from "./src/db/serverConfig.js";
import connectDB from "./src/db/db.js";



const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
