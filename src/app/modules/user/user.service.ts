import { User } from "./user.model";

const createStudentIntoDB = async (student: Student) => {
    const result = await User.create(student);
    return result;
}

export const UserServices = {
    createStudentIntoDB,
} 