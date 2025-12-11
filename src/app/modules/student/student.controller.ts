import { Request, Response } from "express";
import { StudentServices } from "./student.service";

// -------------------------
// CREATE STUDENT
// -------------------------
export const createStudent = async (req: Request, res: Response) => {
    try {
        const studentData = req.body.student;
        console.log("REQ BODY:", req.body);

        // const newStudent = await StudentModel.create(studentData);

        const newStudent = await StudentServices.createStudentIntoDB(studentData);

        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: newStudent,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to create student",
            error: error.message,
        });
    }
};



// -------------------------
// GET ALL STUDENTS
// -------------------------
export const getAllStudents = async (req: Request, res: Response) => {
    try {
        const students = await StudentServices.getAllStudentsFromDB();

        res.status(200).json({
            success: true,
            message: "All students retrieved successfully",
            data: students,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve students",
            error: error.message,
        });
    }
};



// -------------------------
// GET ALL STUDENTS
// -------------------------
export const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;
        const result = await StudentServices.getSingleStudentFromDB(studentId);

        res.status(200).json({
            success: true,
            message: "Single student retrieved successfully",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve students",
            error: error.message,
        });
    }
};


export const StudentController = {
    createStudent,
    getAllStudents,
    getSingleStudent
}