export type Guardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
};

export type LocalGuardian = {
    fatherName: string;
    occupation: string;
    contactNo: string;
    address: string;
};

export type UserName = {
    firstName: string;
    middleName?: string;   // ✅ optional
    lastName: string;
};

export type Student = {
    id: string;            // ✅ primitive
    name: UserName;
    gender: "male" | "female" | "other"; // ⚠️ removed "other" to match Mongoose
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian;
    localGuardian: LocalGuardian;
    profileImg?: string;
    isActive: "active" | "inActive";
};
