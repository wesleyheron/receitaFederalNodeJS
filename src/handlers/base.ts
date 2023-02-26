import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { BaseURL } from "../constants";

/**
 * ## Client Args
 * Used to pass configuration.
 */
export interface ClientArgs {  
/**
 * ## Base URL
 * Location of the ReceitaFederalWsAPI.
 */
baseURL?: string;
/**
 * ## Options
 * AxiosRequestConfig.   
 */
options?: AxiosRequestConfig;

}

/**
 * ### Base Handler
 */
export class BaseHandler {
    
    public api: AxiosInstance;

    constructor(clientOptions?: ClientArgs) {
    try {        
        this.api = axios.create({
            url: clientOptions?.baseURL ?? BaseURL.REST,
            headers: clientOptions?.options.headers,
            method: clientOptions?.options.method || 'GET',
            ...clientOptions?.options
        });
    } catch (error: any | AxiosError) {
        if (axios.isAxiosError(error)) {
            throw error.response
        }
    }
}}