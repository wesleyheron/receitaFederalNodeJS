import httpTrigger from "../../getReceitaFederal/receitaFederalFunction";
import { Context } from "@azure/functions";
import { StatusCodes } from 'http-status-codes';

describe("Test for ReceitaFederal Function", () => {
  let context: Context;

  beforeEach(() => {
    context = ({ log: jest.fn() } as unknown) as Context;
  });

  it("should return a 400", async () => {
    // Arrange
    const request = {
      params: { document: "05559238000100" },
    };

    // Action
    await httpTrigger(context, request);

    // Assertion
    expect(context.log).toBeCalledTimes(2);
    expect(context.res.status).toEqual(StatusCodes.BAD_REQUEST);
  });

  it("should return a result string with the value given in the request body", async () => {
    // Arrange
    const request = {
      params: { document: "05559238000100" },
    };
    const resultString =
          'CNPJ inválido!';

    // Action
    await httpTrigger(context, request);

    // Assertion
    expect(context.log).toBeCalledTimes(2);
    expect(context.res.body).toEqual(resultString);
  });

  it("should return a 200", async () => {
    // Arrange
    const request = {
      params: { document: "27343108000133" },
    };

    // Action
    await httpTrigger(context, request);

    // Assertion
    expect(context.log).toBeCalledTimes(2);
    expect(context.res.status).toEqual(StatusCodes.OK);
  });

  it("should return a 404", async () => {
    // Arrange
    const request = {
      params: { document: "63355940000113" },
    };   

    // Action
    await httpTrigger(context, request);

    // Assertion
    expect(context.log).toBeCalledTimes(2);
    expect(context.res.status).toEqual(StatusCodes.NOT_FOUND);
  });

});