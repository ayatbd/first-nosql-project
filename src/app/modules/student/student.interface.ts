import { Schema, model, connect } from 'mongoose';

export type Guardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
}

export type LocalGuardian = {
    fatherName: string;
    occupation: string;
    contactNo: string;
    address: string
}

export type UserName = {
    firstName: String;
    middleName: String;
    lastName: String
};


export type Student = {
    id: String;
    name: UserName;
    gender: "male" | "female" | "other";
    dateOfBirth: String;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian;
    localGuardian: LocalGuardian
    profileImg?: string
    isActive: "active" | "inActive"
}