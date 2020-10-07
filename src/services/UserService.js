import http from '../http-common';

export class UserService {
    create(data) {
        console.log('inside UserService create() method')
        // return http.post("/adduser", data)
        return Promise ('DUMMY USER CREATE METHOD') // we never see this
    }
}

export default new UserService();