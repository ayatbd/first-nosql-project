import { Schema, model } from "mongoose";
import { Student } from "./student.interface";

// ---------- Sub Schemas ----------

// Guardian Schema
const GuardianSchema = new Schema({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
});

// Local Guardian Schema
const LocalGuardianSchema = new Schema({
    fatherName: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
});

// Name Schema
const UserNameSchema = new Schema({
    firstName: { type: String, required: true },
    middleName: { type: String }, // optional
    lastName: { type: String, required: true },
});

// ---------- Student Schema ----------

const StudentSchema = new Schema(
    {
        id: { type: String, required: true, unique: true },

        name: { type: UserNameSchema, required: true },

        gender: {
            type: String,
            enum: ["male", "female"],
            required: true,
        },

        dateOfBirth: { type: String, required: true },

        email: { type: String, required: true, unique: true },

        contactNo: { type: String, required: true },

        emergencyContactNo: { type: String, required: true },

        bloodGroup: {
            type: String,
            enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        },

        presentAddress: { type: String, required: true },

        permanentAddress: { type: String, required: true },

        guardian: { type: GuardianSchema, required: true },

        localGuardian: { type: LocalGuardianSchema, required: true },

        profileImg: { type: String },

        isActive: {
            type: String,
            enum: ["active", "inActive"],
            default: "active",
        },
    },
    {
        timestamps: true,
    }
);

// ---------- Export Model ----------
export const StudentModel = model<Student>("Student", StudentSchema);
