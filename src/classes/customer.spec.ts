import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Rodrigo', 'Lomar', '144.756.627-02');
    expect(sut.firstName).toBe('Rodrigo');
    expect(sut.lastName).toBe('Lomar');
    expect(sut.cpf).toBe('144.756.627-02');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Rodrigo', 'Lomar', '144.756.627-02');
    expect(sut.getName()).toBe('Rodrigo Lomar');
    expect(sut.getIDN()).toBe('144.756.627-02');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Fixdate', '133.532.2131-0001/22');
    expect(sut.name).toBe('Fixdate');
    expect(sut.cnpj).toBe('133.532.2131-0001/22');
  });

  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Fixdate', '133.532.2131-0001/22');
    expect(sut.getName()).toBe('Fixdate');
    expect(sut.getIDN()).toBe('133.532.2131-0001/22');
  });
});
