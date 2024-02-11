import { IUser } from "../../models/user";
import { HttpRequest, HttpResponse } from "../potocols";

export interface UpdateUserParams {
    firstName?: string;
    lastName?: string;
    password?: string
}

export interface IUpdateUserController{
    handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<IUser>>
}

export interface IUpdateUserRepository{
    updateUser(id: string, params: UpdateUserParams ): Promise<IUser>
}