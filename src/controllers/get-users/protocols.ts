import { IUser } from "../../models/user";
import { HttpResponse } from "../potocols";

export interface IGetUsersController {
    
    handle(): Promise<HttpResponse<IUser[]>>;

}

export interface IGetUsersRepository{
    getUsers(): Promise<IUser[]>
}
