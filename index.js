"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lineupList_1 = __importDefault(require("./lineupList"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use(express_1.default.json());
console.log((_a = require.main) === null || _a === void 0 ? void 0 : _a.filename);
app.get('/', (_req, res) => {
    res.json(lineupList_1.default);
});
app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`);
});
