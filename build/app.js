"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config_1 = __importDefault(require("config"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
// Swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerOptions_1 = require("./swaggerOptions");
//init app. define and set port
const app = (0, express_1.default)();
const port = config_1.default.get("port");
app.set("port", port);
// Config whitelist
const whiteList = [process.env.ORIGIN1];
// Cors
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        console.log("Conectando=>", origin);
        if (!origin || whiteList.includes(origin)) {
            return callback(null, origin);
        }
        console.log("Conectando=>", origin);
        return "Error de CORS origin: " + origin + " No autorizado!";
    },
    credentials: true,
}));
//middlewares
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
//routes
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const plants_routes_1 = __importDefault(require("./routes/plants.routes"));
const reviews_routes_1 = __importDefault(require("./routes/reviews.routes"));
app.use("/docs/api/v1", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerOptions_1.specs));
app.use("/auth", user_routes_1.default);
app.use("/plants", plants_routes_1.default);
app.use("/reviews", reviews_routes_1.default);
//test
app.get("/", (req, res) => {
    console.log("E-Wallet API");
    res.status(200).send("E-Wallet API");
});
exports.default = app;
