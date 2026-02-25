export type TUser = {
    id: string;
    password: string;
    needPasswordChange: boolean;
    role: 'student' | 'admin' | 'faculty';
    status: 'active' | 'inactive';
    isDeleted: boolean;
};