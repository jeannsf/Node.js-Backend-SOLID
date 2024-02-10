import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { MongoClient } from "../../database/mongo";
import { IUser} from "../../models/user"

export class MongoGetUsersRepository implements IGetUsersRepository {
    async getUsers(): Promise<IUser[]> {
        const users = await MongoClient.db.collection<User>('users').find({}).toArray;
        users[0]._
        
        
        return [
            {
            firstName: 'Jean',
            lastName: 'Freitas',
            email: 'jean@gmail.com',
            password: '123'
        },
    ]
    }
}