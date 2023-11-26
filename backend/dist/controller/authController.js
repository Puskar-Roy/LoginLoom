"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
exports.login = (0, catchAsync_1.default)(async (req, res) => {
    const { email, password } = req.body;
    res.status(200).json({ email, password });
});
//# sourceMappingURL=authController.js.map