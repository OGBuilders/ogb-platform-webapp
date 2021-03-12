const express = require("express");
const path = require("path");
const app = express();
var helmet = require('helmet');
var vhost = require('vhost');

var partnerRouter = express.Router();
partnerRouter.use(express.static("Partner/client/build"));
partnerRouter.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, "Partner", "client", "build", "index.html"));
});

var customerRouter = express.Router();
customerRouter.use(express.static("Customer/client/build"));
customerRouter.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "Customer", "client", "build", "index.html"));
});

app
.use(vhost('partner.*', partnerRouter))
.use(vhost('customer.*', customerRouter))
.use(vhost('*', customerRouter))
.use(helmet())
.listen(process.env.PORT || 80, () => console.log(`
  ┌───────────────────────────────────────────────────┐
  │                                                   │
  │   Serving OGB Web Application!                    │
  │                                                   │
  │   - Ports:            80 (Prod) / 5000 (Dev)      |
  │   - Local:            http://localhost:5000       │
  │   - 🌎 Global:        http://35.208.15.141        │
  │                                                   │
  │                                                   │
  └───────────────────────────────────────────────────┘
`));
