import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { ReceitaFederalHandler } from "../src/handlers/receitaFederalHandler"
import { validateCNPJDocument } from "../src/utils/validateCNPJDocument";

const GetReceitaFederal: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function received a request.');
    let document = req.params.document;
    const api = new ReceitaFederalHandler();
    
    try {

        if(validateCNPJDocument(document)) {
            var data = await api.getReceitaFederal(document);
            context.res = {
                status: 200,
                body: data
            };
        }
        else {
            context.res = {
                status: 400,
                body: 'CNPJ inválido!'
            };
        }
        
    } catch (error) {
        context.res = {
            status: error.response.status,
            body: JSON.stringify(error.response.data, null, 2)
        };
    }
    context.log('HTTP trigger function processed a request.');
};

export default GetReceitaFederal;