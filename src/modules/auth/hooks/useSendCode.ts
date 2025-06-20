import { POST } from "../../../shared/tools/requests";
import { Response } from "../../../shared/types"

export async function useSendCode(email: string){
    try{
        const response = await POST({endpoint: '/api/users/send-code', body: {email}})
        if (response.status == "error"){
            console.error("Result error:", response.message);
            return;
        }
        console.log(response.data);
    } catch(error){
        console.error("Caught error", error);
    }

}