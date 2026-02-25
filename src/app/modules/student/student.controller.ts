import { Request, Response } from "express";
import { StudentServices } from "./student.service";

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
    getAllStudents,
    getSingleStudent
}