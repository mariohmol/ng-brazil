import { NgPackagedPage } from './app.po';
import { DATA, DATARAW, DATAERROR } from '../src/app/demo/demo.component';




describe('ng-packaged App', () => {
  let page: NgPackagedPage;

  beforeEach(() => {
    page = new NgPackagedPage();
  });

  afterEach(() => {
    page.navigateTo();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Angular Brazil (ng-brazil)');
  });

  it('should pipe datatypes correctly', () => {
    expect(page.getById('pipe-cpf')).toEqual(DATA.cpf);
    expect(page.getById('pipe-cnpj')).toEqual(DATA.cnpj);
    expect(page.getById('pipe-rg')).toEqual(DATA.rg);
    expect(page.getById('pipe-inscricaoestadual')).toEqual(DATA.inscricaoestadual.mg);
    // expect(page.getById('pipe-telefone')).toEqual(DATA.telefone);
    expect(page.getById('pipe-cep')).toEqual(DATA.cep);
    expect(page.getById('pipe-currency')).toEqual(DATA.currency);
    expect(page.getById('pipe-time')).toEqual(DATA.time);
    expect(page.getById('pipe-placa')).toEqual(DATA.placa);
    expect(page.getById('pipe-titulo')).toEqual(DATA.titulo);
  });


  it('should validate datatypes when is wrong', () => {
    makeForm(page, '', DATAERROR);
    expect(page.getById('mask-cpf-error')).not.toEqual('');
    expect(page.getById('mask-cnpj-error')).not.toEqual('');
    // expect(page.getById('mask-rg-error')).not.toEqual('');
    // expect(page.getById('mask-inscricaoestadual-error')).not.toEqual('');
    expect(page.getById('mask-telefone-error')).not.toEqual('');
    expect(page.getById('mask-cep-error')).not.toEqual('');
    expect(page.getById('mask-currency-error')).not.toEqual('');
    expect(page.getById('mask-time-error')).not.toEqual('');
    expect(page.getById('mask-placa-error')).not.toEqual('');
    expect(page.getById('mask-titulo-error')).not.toEqual('');
  });

  it('should MASK datatypes correctly', () => {
    makeForm(page, '', DATARAW);
    // expect(page.getValueById('mask-cpf')).toEqual(DATA.cpf);
    expect(page.getValueById('mask-cnpj')).toEqual(DATA.cnpj);
    expect(page.getValueById('mask-rg')).toEqual(DATA.rg);
    expect(page.getValueById('mask-inscricaoestadual')).toEqual(DATA.inscricaoestadual.mg);
    // expect(page.getValueById('mask-telefone')).toEqual(DATA.telefone);
    expect(page.getValueById('mask-cep')).toEqual(DATA.cep);
    expect(page.getValueById('mask-currency')).toEqual(DATA.currency);
    expect(page.getValueById('mask-time')).toEqual(DATA.time);
    expect(page.getValueById('mask-placa')).toEqual(DATA.placa);
    expect(page.getValueById('mask-titulo')).toEqual(DATA.titulo);
    // checkNoErrors(page);
  });


  it('should validate with no-mask datatypes correctly', () => {
    makeForm(page, 'no', DATARAW);
    expect(page.getValueById('nomask-cpf')).toEqual(DATARAW.cpf);
    expect(page.getValueById('nomask-cnpj')).toEqual(DATARAW.cnpj);
    expect(page.getValueById('nomask-rg')).toEqual(DATARAW.rg);
    expect(page.getValueById('nomask-inscricaoestadual')).toEqual(DATARAW.inscricaoestadual.mg);
    expect(page.getValueById('nomask-telefone')).toEqual(DATARAW.telefone);
    expect(page.getValueById('nomask-cep')).toEqual(DATARAW.cep);
    expect(page.getValueById('nomask-currency')).toEqual(DATARAW.currency);
    expect(page.getValueById('nomask-time')).toEqual(DATARAW.time);
    expect(page.getValueById('nomask-placa')).toEqual(DATARAW.placa);
    expect(page.getValueById('nomask-titulo')).toEqual(DATARAW.titulo);
    // checkNoErrors(page);
  });

});


const checkNoErrors = function (page) {
  expect(page.getById('mask-cpf-error')).toEqual('');
  expect(page.getById('mask-cnpj-error')).toEqual('');
  expect(page.getById('mask-rg-error')).toEqual('');
  expect(page.getById('mask-inscricaoestadual-error')).toEqual('');
  // expect(page.getById('mask-telefone-error')).toEqual('');
  expect(page.getById('mask-cep-error')).toEqual('');
  expect(page.getById('mask-currency-error')).toEqual('');
  expect(page.getById('mask-time-error')).toEqual('');
  expect(page.getById('mask-placa-error')).toEqual('');
  expect(page.getById('mask-titulo-error')).toEqual('');
};

const makeForm = function (page, key, data) {
  page.sendKeys(key + 'mask-cpf', data.cpf);
  page.sendKeys(key + 'mask-cnpj', data.cnpj);
  page.sendKeys(key + 'mask-rg', data.rg);
  page.sendKeys(key + 'mask-telefone', data.telefone);
  page.sendKeys(key + 'mask-cep', data.cep);
  page.sendKeys(key + 'mask-inscricaoestadual', data.inscricaoestadual.mg);
  page.sendKeys(key + 'mask-currency', data.currency);
  page.sendKeys(key + 'mask-time', data.time);
  page.sendKeys(key + 'mask-placa', data.placa);
  page.sendKeys(key + 'mask-titulo', data.titulo);
  page.submit();
};
