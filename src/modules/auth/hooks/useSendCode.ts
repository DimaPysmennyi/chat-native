import { Response } from "../../../shared/types"

export async function useSendCode(email: string){
    try{
        const response = await fetch('http://192.168.0.51:8000/api/user/send-code', {
            method: 'POST',
            body: JSON.stringify({
                email: email
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const result: Response<string> = await response.json();
        if (result.status == "error"){
            console.error("Result error:", result.message);
            return;
        }
        console.log(result.data);
    } catch(error){
        console.error("Caught error", error);
    }

}