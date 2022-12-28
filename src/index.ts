import app from "./app";
import connect from "./database/connect";


const bootstrap = () => {
  app.listen(app.get("port"), async () => {
    console.log(`Server on port ${app.get("port")}`);
    await connect();
  });
};

bootstrap();

