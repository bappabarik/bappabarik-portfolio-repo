import { Client, Functions, ExecutionMethod } from "appwrite";

export class Mail {
    client = new Client();
    functions;
    constructor(){
        this.client
            .setEndpoint(import.meta.env.VITE_APPWRITE_API_ENDPOINT)
            .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);
    
        this.functions = new Functions(this.client);
    }

    async sendMail(data){
        try {
            const response = await this.functions.createExecution(
              import.meta.env.VITE_APPWRITE_FUNCTION_ID, // Your function ID
              JSON.stringify(data),
              false, 
              '/',
              ExecutionMethod.POST,
              {
                  'Content-Type': 'application/json'
              },
              ''
            );
            return response
        } catch (error) {
            console.error('Error:', error);
            return error
        }
    }
}

const mail = new Mail()

export default mail