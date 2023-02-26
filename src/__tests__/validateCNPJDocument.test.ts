import { validateCNPJDocument } from "../utils/validateCNPJDocument";

describe('test validateCNPJDocument utils', () => {
    
  it('check if it returns true if cnpj is valid', async () => {
    // Arrange
    const document = '05559238000175';

    // Action
    const data = validateCNPJDocument(document);

    // Assertion
    expect(data).toBe(true);
  });

  it('check if it returns false if cnpj is invalid', async () => {
    // Arrange
    const document = '05559238000100';

    // Action
    const data = validateCNPJDocument(document);

    // Assertion
    expect(data).toBe(false);
  });  
  
});
