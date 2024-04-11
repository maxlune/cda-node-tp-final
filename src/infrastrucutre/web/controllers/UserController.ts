import { Request, Response } from "express";
import env from "../../../config/env";
import bcrypt from "bcrypt";

import { UserRepository } from "../../repositories/UserRepository";

import { response } from "../../../utils/response";
import { AuthService } from "../../../domain/services/AuthService";

const { NODE_ENV } = env;

const userRepo = new UserRepository();
const authService = new AuthService();

/**
 * Connexion 'un utilisateur
 * @param req
 * @param res
 */
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = userRepo.getUserByUsername(username);

    if (!user)
      return response(res, {
        statusCode: 401,
        message: "Authentication failed",
      });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid)
      return response(res, {
        statusCode: 401,
        message: "Authentication failed",
      });

    const accessToken = authService.issueAccessToken(user.id as string);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: NODE_ENV === "production",
    });

    response(res, { statusCode: 200, message: "Authentication successful" });
  } catch (error) {
    console.error(error);
    response(res, { statusCode: 500, message: "Internal server error" });
  }
};

/**
 * Enregistre un nouvel utilisateur
 * @param req
 * @param res
 * @returns
 */
export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username?.trim() || !password?.trim())
      return response(res, {
        statusCode: 400,
        message: "Invalid username or password",
      });

    /**
     * Vérifie si l'username existe déjà
     */
    const existingUsername = userRepo.getUserByUsername(username);
    if (existingUsername)
      return response(res, {
        statusCode: 409,
        message: "Username already exists",
      });

    /**
     * Hashage du mot de passe
     */
    const hashedPassword = await bcrypt.hash(password, 12);

    userRepo.createUser({ username, password: hashedPassword });
    response(res, { statusCode: 201, message: "User created successfully" });
  } catch (error) {
    console.error(error);
    response(res, { statusCode: 500, message: "Internal server error" });
  }
};
