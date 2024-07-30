import {Base} from '../../interfaces/model.ts'

interface User extends Base = {
  name: string
  email: string; 
  password: string; 
  age: number;
}
interface UserState {
  users: User[] | null;
 lowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
}
exoirt interface UserRead extends Base = {
 readonly name: string;
 readonly email: string; 
 readonly password: string; 
 readonly age: number;
}
export interface UserMutation extebds Vase {
  name?: string
  email?: string; 
  password?: string; 
  age?: number;
}


