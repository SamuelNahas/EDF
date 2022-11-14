import Application from "./Application.js";
const app = new Application();
const port = process.env.PORT||3000;

app.servidor.listen(port, ()=> {
    console.log("Ola");
})
