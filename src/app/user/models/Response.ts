import { User } from './user';

export class Response {

    detailMessage: string;
    code: number;
    timestamp: string;
    data: any;

    constructor() { }
    buildResponse(detailMessage: string, code: number, timestamp: string, data: any) {
        const response = new Response();
        response.detailMessage = detailMessage;
        response.code = code;
        response.timestamp = timestamp;
        response.data = data;
        return response;
    }
}