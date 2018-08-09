import { NgPackagedPage } from './app.po';
import { DATA, DATARAW, DATAERROR } from '../src/app/demo/demo.component';

describe('ng-packaged App', () => {
  let page: NgPackagedPage;

  const makeForm = function (key, data) {
    page.sendKeys(key + 'mask-cpf', data.cpf);
    page.sendKeys(key + 'mask-cnpj', data.cnpj);
    page.sendKeys(key + 'mask-rg', data.rg);
    page.sendKeys(key + 'mask-telefone', data.telefone);
    page.sendKeys(key + 'mask-cep', data.cep);
    page.sendKeys(key + 'mask-inscricaoestadual', data.inscricaoestadual);
    page.sendKeys(key + 'mask-currency', data.currency);
    page.sendKeys(key + 'mask-time', data.time);
    page.submit();
  };

  const checkErrors = function () {
    expect(page.getById('mask-cpf-error')).not.toEqual('');
    expect(page.getById('mask-cnpj-error')).not.toEqual('');
    expect(page.getById('mask-rg-error')).not.toEqual('');
    expect(page.getById('mask-inscricaoestadual-error')).not.toEqual('');
    expect(page.getById('mask-telefone-error')).not.toEqual('');
    expect(page.getById('mask-cep-error')).not.toEqual('');
    expect(page.getById('mask-currency-error')).not.toEqual('');
    expect(page.getById('mask-time-error')).not.toEqual('');
  };

  const checkNoErrors = function () {
    expect(page.getById('mask-cpf-error')).toEqual('');
    expect(page.getById('mask-cnpj-error')).toEqual('');
    expect(page.getById('mask-rg-error')).toEqual('');
    expect(page.getById('mask-inscricaoestadual-error')).toEqual('');
    expect(page.getById('mask-telefone-error')).toEqual('');
    expect(page.getById('mask-cep-error')).toEqual('');
    expect(page.getById('mask-currency-error')).toEqual('');
    expect(page.getById('mask-time-error')).toEqual('');
  };


  beforeEach(() => {
    page = new NgPackagedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Angular Brazil');
  });

  it('should pipe datatypes correctly', () => {
    expect(page.getById('pipe-cpf')).toEqual(DATA.cpf);
    expect(page.getById('pipe-cnpj')).toEqual(DATA.cnpj);
    expect(page.getById('pipe-rg')).toEqual(DATA.rg);
    expect(page.getById('pipe-inscricaoestadual')).toEqual(DATA.inscricaoestadual);
    expect(page.getById('pipe-telefone')).toEqual(DATA.telefone);
    expect(page.getById('pipe-cep')).toEqual(DATA.cep);
    expect(page.getById('pipe-currency')).toEqual(DATA.currency);
    expect(page.getById('pipe-time')).toEqual(DATA.time);
  });


  it('should validate datatypes when is wrong', () => {
    makeForm('', DATAERROR);
    checkErrors();
  });

  it('should mask datatypes correctly', () => {
    makeForm('', DATARAW);
    expect(page.getValueById('mask-cpf')).toEqual(DATA.cpf);
    expect(page.getValueById('mask-cnpj')).toEqual(DATA.cnpj);
    expect(page.getValueById('mask-rg')).toEqual(DATA.rg);
    expect(page.getValueById('mask-inscricaoestadual')).toEqual(DATA.inscricaoestadual);
    expect(page.getValueById('mask-telefone')).toEqual(DATA.telefone);
    expect(page.getValueById('mask-cep')).toEqual(DATA.cep);
    expect(page.getValueById('mask-currency')).toEqual(DATA.currency);
    expect(page.getValueById('mask-time')).toEqual(DATA.time);
    checkNoErrors();
  });


  it('should validate with no-mask datatypes correctly', () => {
    makeForm('no', DATARAW);
    expect(page.getValueById('nomask-cpf')).toEqual(DATARAW.cpf);
    expect(page.getValueById('nomask-cnpj')).toEqual(DATARAW.cnpj);
    expect(page.getValueById('nomask-rg')).toEqual(DATARAW.rg);
    expect(page.getValueById('nomask-inscricaoestadual')).toEqual(DATARAW.inscricaoestadual);
    expect(page.getValueById('nomask-telefone')).toEqual(DATARAW.telefone);
    expect(page.getValueById('nomask-cep')).toEqual(DATARAW.cep);
    expect(page.getValueById('nomask-currency')).toEqual(DATARAW.currency);
    expect(page.getValueById('nomask-time')).toEqual(DATARAW.time);
    checkNoErrors();
  });

});
