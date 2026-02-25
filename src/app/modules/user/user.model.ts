import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const UserSchema = new Schema<TUser>(
    {
        id: { type: String, required: true },
        password: { type: String, required: true },
        needPasswordChange: { type: Boolean, default: true },
        role: { type: String, enum: ['student', 'admin', 'faculty'], required: true },
        status: { type: String, enum: ['active', 'inactive'], default: 'active' },
        isDeleted: { type: Boolean, default: false }
    },
    {
        timestamps: true
    }
);

export const User = model<TUser>("User", UserSchema);