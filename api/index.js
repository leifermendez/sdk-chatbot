const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const { getDataIa } = require("./adapter/diaglogflow");

/**
 * Controller
 */

const chatController = (req, res) => {
  const { text } = req.body;
  return getDataIa(text, (bot) => {
    res.send(bot);
  });
};

const checkController = (req, res) => {
  //TODO Peudes usar validacion de origin para que solo funcione por el dominio
  const customer = req.headers.customer || null;

  const data = {
    leifer: {
      defaultMessage: "Hola bienvenido al bot de Leifer mendez",
    },
    clientePrueba: {
      defaultMessage:[
        `Hola estas interactuando con el CUSTOMER 'clientePrueba'`,
        `si quieres que explique la parte tecnica recuerda`, 
        `darle estrella al repositorio \n`,
        `https://www.youtube.com/leifermendez`
      ].join(' ')
    },
  };

  const response = {
    replyMessage: data[customer].defaultMessage,
  };

  res.send(response);
};

app.post("/send", chatController);

app.get("/check-customer", checkController);

console.log(process.env.MODE);

if (process.env.MODE === "dev") {
  app.listen(3000, () => {
    console.log("Ejecutandose en modo DEV por el puerto 3000");
  });
} else {
  exports.app = functions.https.onRequest(app);
}

// server.listen(port, () => console.log("LIsto por el puerto ", port));
