import { Role } from "../role";

export interface SignupRequest {
  email: string;
  password: string;
  role: Role;
}
