export const createStudent = async (req: Request, res: Response) => {
    try {
        const studentData = req.body.student;

        // creating schema validation using joi
        // const { error, value } = studentValidationSchema.validate(studentData, {
        //     abortEarly: false,
        // });

        // if (error) {
        //     return res.status(400).json({
        //         success: false,
        //         errors: error.details.map(d => d.message),
        //     });
        // }

        // const newStudent = await StudentModel.create(studentData);


        // creating schema validation using jod
        const zodValidatedData = studentZodValidationSchema.parse(studentData);

        const newStudent = await StudentServices.createStudentIntoDB(zodValidatedData);

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
