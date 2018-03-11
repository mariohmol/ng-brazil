export const MASKS = {
    cpf: {
        text: '000.000.000-00',
        textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    cnpj: {
        text: '00.000.000/0000-00',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    telefone: {
        text: '(00) 0000-0000',
        textMask: ['(', /\d/, /\d/, ')',' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        textMaskFunction: function mask(userInput) {
            const DDD5digits = {'11': 'sp'}
            let ddd;
            const numbers = userInput.match(/\d/g);
            let numberLength = 0;
            if (numbers) {
                numberLength = numbers.join('').length;
            }
            if (userInput.length > 2) {
                const splits = userInput.split('');
                ddd = splits[1] + splits[2];
            }

            if (!userInput || numberLength > 10 || ddd in DDD5digits) {
                return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            } else {
                return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            }
        }
    },
    inscricaoestadual: {
        ce: {
            text: '06.000001-5',
            textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
        },
        rn: {
            text: '20.040.040-1',
            textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]
        },
        pa: {
            text: '06000001-5',
            textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
        },
        pe: {
            text: '0192310-24',
            textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
        },
        al: {
            text: '240000048',
            textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
        },
        se: {
            text: '27123456-3'
        },
        ba: {
            text: '123456-63'
        },
        ro: {
            text: '101.62521-3'
        },
        ac: {
            text: '01.004.823/001-12'
        },
        am: {
            text: '041458710'
        },
        rr: {
            text: '24006628-1'
        },
        rs: {
            text: '024/0440013',
            textMask: [/\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
        },
        mg: {
            text: '00181926300-48',
            textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
        },
        es: {
            text: '082.560.67-6'
        },
        sp: {
            text: '114.814.878.119',
            textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/]
        },
        ma: {
            text: '12.104.376-2',
            textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
        },
        pi: {
            text: '19.301.656-7',
            textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
        }
    }
}

export function isPresent(obj: any): boolean {
    return obj !== undefined && obj !== null;
}

// http://www.geradorcnpj.com/javascript-validar-cnpj.htm
/*
//if (val.match(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/) != null) {
*/
export function validate_cnpj(cnpj) {

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj === '') {
        return false;
    }

    if (cnpj.length !== 14) {
        return false;
    }

    // Elimina CNPJs invalidos conhecidos
    if (cnpj === '00000000000000' ||
        cnpj === '11111111111111' ||
        cnpj === '22222222222222' ||
        cnpj === '33333333333333' ||
        cnpj === '44444444444444' ||
        cnpj === '55555555555555' ||
        cnpj === '66666666666666' ||
        cnpj === '77777777777777' ||
        cnpj === '88888888888888' ||
        cnpj === '99999999999999') {
        return false;
    }

    // Valida DVs
    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0, tamanho);
    const digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }

    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(0), 10)) {
        return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(1), 10)) {
        return false;
    }

    return true;
}

// http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
export function validate_cpf(strCPF) {
    strCPF = strCPF.replace(/./g, '').replace(/-/g, '');
    let soma;
    let resto;
    soma = 0;
    if (strCPF === '00000000000') {
        return false;
    }

    for (let i = 1; i <= 9; i++) {
        // tslint:disable-next-line:radix
        soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(strCPF.substring(9, 10), 10)) {
        return false;
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCPF.substring(i - 1, i), 10) * (12 - i);
    }
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    if (resto !== parseInt(strCPF.substring(10, 11), 10)) {
        return false;
    }
    return true;
}

export function validaTelefone(tel) {
    tel = tel.replace(/_/g, '');
    const exp = /\(\d{2}\)\ \d{4}\-\d{4}/;
    const exp5 = /\(\d{2}\)\ \d{5}\-\d{4}/;
    if (!exp.test(tel) && !exp5.test(tel)) {
        return false;
    }
    return true;
}
