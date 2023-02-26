import { ReceitaFederal } from "../entities/receitaFederal";
import { BaseURL } from "../constants";
import { BaseHandler, ClientArgs } from "./base";
import { AxiosError, AxiosResponse } from "axios";

export class ReceitaFederalHandler extends BaseHandler {
  constructor(clientOptions?: ClientArgs) {
    super(clientOptions);
  }

  public async getReceitaFederal(document: string): Promise<ReceitaFederal> {
    return new Promise<ReceitaFederal>((resolve, reject) => {
      this.api
        .get<ReceitaFederal>(`${BaseURL.REST}/${document}`)
        .then((response: AxiosResponse<ReceitaFederal>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
