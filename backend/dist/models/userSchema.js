"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
}, { timestamps: true });
userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password") && !user.isModified("cpassword"))
        return next();
    try {
        const salt = await bcryptjs_1.default.genSalt(10);
        if (user.isModified("password")) {
            const hashedPassword = await bcryptjs_1.default.hash(user.password, salt);
            user.password = hashedPassword;
        }
        if (user.isModified("cpassword")) {
            const hashedCPassword = await bcryptjs_1.default.hash(user.cpassword, salt);
            user.cpassword = hashedCPassword;
        }
        return next();
    }
    catch (error) {
        return next(error);
    }
});
const UserModel = (0, mongoose_1.model)("User", userSchema);
exports.default = UserModel;
//# sourceMappingURL=userSchema.js.map