import { Response } from "../types";

const BASE_URL = 'http://192.168.178.39:8000'

interface IRequestParams{
    endpoint: string,
    headers?: HeadersInit,
    token?: string,
    body?: any
}

export async function GET<T>(params: IRequestParams): Promise<Response<T>>{
    const {endpoint, headers, token} = params;
    const reqHeaders: {[key: string] : any} = {};
    if (token){
        reqHeaders['authorization'] = `Bearer ${token}`
    }
    console.log(reqHeaders)
    try{ 
        const result = await fetch(`${BASE_URL}/${endpoint}`, {
            headers: reqHeaders
        });
        const resultData: Response<T> = await result.json();
        return resultData;
    } catch(error){
        console.error(error);
        return {
            status: "error",
            message: "Network error"
        }
    }
}

export async function POST<T>(params: IRequestParams): Promise<Response<T>>{
    const {endpoint, headers, token, body} = params;
    const reqHeaders = new Headers(headers);

    reqHeaders.set('Content-Type', 'application/json');

    if (token){
        reqHeaders.set("Authorization", `Baerer ${token}`);
    }


    try {
        const result = await fetch(`${BASE_URL}/${endpoint}`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: reqHeaders,
        })

        const resultData = await result.json();
        return resultData;
    } catch(error){
        console.error(error);
        return {
            status: "error",
            message: "Network error"
        }
    }
}