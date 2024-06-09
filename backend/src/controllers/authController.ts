import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sql from 'mssql';
import pool from '../config/dbConfig';
import { User } from '../interfaces/userInterface';

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    const result = await pool.request()
      .input('Username', sql.NVarChar, username)
      .query('SELECT * FROM Users WHERE Username = @Username');

    if (result.recordset.length === 0) {
      res.status(400).send('Invalid username or password.');
      return;
    }

    const user: User = result.recordset[0];

    const validPassword = await bcrypt.compare(password, user.passwordHash);
    if (!validPassword) {
      res.status(400).send('Invalid username or password.');
      return;
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });

    res.status(200).send({ token });
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password, email, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.request()
      .input('Username', sql.NVarChar, username)
      .input('PasswordHash', sql.NVarChar, hashedPassword)
      .input('Email', sql.NVarChar, email)
      .input('Role', sql.NVarChar, role)
      .query('INSERT INTO Users (Username, PasswordHash, Email, Role) VALUES (@Username, @PasswordHash, @Email, @Role)');

    res.status(201).send('User registered successfully');
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
};