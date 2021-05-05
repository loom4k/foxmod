"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAPIRequest = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const config_1 = require("../config");
async function makeAPIRequest(path, method, body) {
    return new Promise((resolve, reject) => {
        node_fetch_1.default(`${config_1.CONFIG.API_URL}${path}`, {
            method,
            body: JSON.stringify(body),
            headers: {
                Authorization: `Bot ${config_1.CONFIG.TOKEN}`,
                "Content-Type": "application/json",
            },
        })
            .then(resolve)
            .catch(reject);
    });
}
exports.makeAPIRequest = makeAPIRequest;
