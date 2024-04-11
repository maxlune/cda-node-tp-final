import { User } from "../../domain/entities/User";
import fs from "fs";
import path from "path";
import crypto from "crypto";

export class UserRepository {
  private filePath = path.join(__dirname, "..", "data", "users.json");

  /**
   * Récupère tous les utilisateurs
   */
  getAllUsers(): User[] {
    const data = fs.readFileSync(this.filePath, "utf-8");
    return JSON.parse(data);
  }

  /**
   * Récupère un utilisateur en fonction de son username
   * @param username
   */
  getUserByUsername(username: string) {
    const users = this.getAllUsers();
    return users.find((user) => user.username === username);
  }

  /**
   * Création d'un nouvel utilisateur
   * @param user
   */
  createUser(user: User) {
    const users = this.getAllUsers();
    users.push({
      ...user,
      id: crypto.randomUUID(),
    });

    fs.writeFileSync(this.filePath, JSON.stringify(users, null, 2));
  }
}
