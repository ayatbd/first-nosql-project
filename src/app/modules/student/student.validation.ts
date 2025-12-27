import z from "zod";

// Guardian
const guardianValidationSchema = z.object({
    fatherName: z.string().min(1, "Father name is required"),
    fatherOccupation: z.string().min(1, "Father occupation is required"),
    fatherContactNo: z.string().min(1, "Father contact number is required"),
    motherName: z.string().min(1, "Mother name is required"),
    motherOccupation: z.string().min(1, "Mother occupation is required"),
    motherContactNo: z.string().min(1, "Mother contact number is required"),
});

// Local Guardian
const localGuardianValidationSchema = z.object({
    fatherName: z.string().min(1, "Local guardian name is required"),
    occupation: z.string().min(1, "Occupation is required"),
    contactNo: z.string().min(1, "Contact number is required"),
    address: z.string().min(1, "Address is required"),
});

// Name
const userNameValidationSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    middleName: z.string().optional(),
    lastName: z.string().min(1, "Last name is required"),
});

// ---------- Student Schema ----------

export const studentZodValidationSchema = z.object({
    id: z.string().min(1, "Student ID is required"),

    name: userNameValidationSchema,

    gender: z.enum(["male", "female", "other"]),

    dateOfBirth: z.string().min(1, "Date of birth is required"),

    email: z.string().email("Invalid email address"),

    contactNo: z.string().min(1, "Contact number is required"),

    emergencyContactNo: z.string().min(1, "Emergency contact number is required"),

    bloodGroup: z
        .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
        .optional(),

    presentAddress: z.string().min(1, "Present address is required"),

    permanentAddress: z.string().min(1, "Permanent address is required"),

    guardian: guardianValidationSchema,

    localGuardian: localGuardianValidationSchema,

    profileImg: z.string().url().optional(),

    isActive: z.enum(["active", "inActive"]).default("active"),
});

export default studentZodValidationSchema;