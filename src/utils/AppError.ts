export enum HtppCode{
    OK = 200,
    CREATED= 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    CONFLICT = 409,
    UNPROCESSABLE_SERVER_ERROR = 422,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    INTERNAL_SEVER_ERRO = 500,
    BAD_GATEWAY = 502,
    SERVICE_NOT_AVAILABLE = 503,
    GATE_TIMEOUT = 504,
}

interface ErrorArgs{
    name?:string;
    isOperational?:boolean;
    message:string;
    httpCode:HtppCode
}

export class AppError extends Error{
    public readonly name: string;
    public readonly isOperational :boolean = true;
    public readonly httpCode :HtppCode
    constructor(args:ErrorArgs){
        super(args.message)

        Object.setPrototypeOf(this,new.target.prototype)

        this.httpCode = args.httpCode
        this.name = args.name || "error"

        if(args.isOperational !== undefined){
            this.isOperational = args.isOperational
        }
        Error.captureStackTrace(this)
    }
}