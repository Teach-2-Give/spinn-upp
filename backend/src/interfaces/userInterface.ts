export interface User {
    id: number;
    username: string;
    passwordHash: string;
    email: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
  }  