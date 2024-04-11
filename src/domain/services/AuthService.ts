import jwt from "jsonwebtoken";
import env from "../../config/env";

const { JWT_SECRET } = env;

export class AuthService {
  /**
   * Génère un JWT
   * @param id
   */
  public issueAccessToken(id: string): string {
    return jwt.sign({ userId: id }, JWT_SECRET, { expiresIn: "15m" });
  }
}
