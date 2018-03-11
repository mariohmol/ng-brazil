
/**
 * BASED ON https://github.com/gammasoft/ie/
 */

function eIndefinido(objeto) {
    return typeof objeto === typeof undefined;
}

function tamanhoNaoE(string, tamanho = 9) {
    if (eIndefinido(tamanho)) {
        tamanho = 9;
    }

    return string.length !== tamanho;
}

function tamanhoE(string, tamanho) {
    return !tamanhoNaoE(string, tamanho);
}

function serie(de, ate) {
    const resultado = [];

    while (de <= ate) {
        resultado.push(de++);
    }

    return resultado;
}

function primeiros(string, quantidade = 8) {
    if (eIndefinido(quantidade)) {
        quantidade = 8;
    }

    return string.substring(0, quantidade);
}

function substracaoPor11SeMaiorQue2CasoContrario0(valor) {
    return valor < 2 ? 0 : 11 - valor;
}

function mod(valor, multiplicadores = serie(2, 9), divisor = 11) {
    if (eIndefinido(divisor)) {
        divisor = 11;
    }

    if (eIndefinido(multiplicadores)) {
        multiplicadores = serie(2, 9);
    }

    let i = 0;

    return valor.split('').reduceRight(function (anterior, atual) {
        if (i > multiplicadores.length - 1) {
            i = 0;
        }

        return (multiplicadores[i++] * parseInt(atual, 10)) + anterior;
    }, 0) % divisor;
}

function calculoTrivial(valor, base = null, validarTamanho = null) {
    if (!validarTamanho && tamanhoNaoE(valor)) {
        return false;
    }

    if (eIndefinido(base)) {
        base = primeiros(valor);
    }

    const digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));

    return valor === base + digito;
}

function naoComecaCom(string, valor) {
    return string.substring(0, valor.length) !== valor;
}

function entre(valor, limiteInferior, limiteSuperior) {
    if (typeof valor === 'string') {
        valor = parseInt(valor, 10);
    }

    return valor >= limiteInferior && valor <= limiteSuperior;
}

const funcoes = {
    ba: function (valor) {
        if (tamanhoNaoE(valor, 8) && tamanhoNaoE(valor)) {
            return false;
        }

        const base = primeiros(valor, valor.length - 2);
        let primeiroDigito, segundoDigito;

        const segundoMultiplicador = serie(2, 7);
        const primeiroMultiplicador = serie(2, 8);

        let primeiroResto, segundoResto;
        let digitoComparacao = valor.substring(0, 1);

        if (tamanhoE(valor, 9)) {
            segundoMultiplicador.push(8);
            primeiroMultiplicador.push(9);
            digitoComparacao = valor.substring(1, 2);
        }

        if ('0123458'.split('').indexOf(digitoComparacao) !== -1) {
            segundoResto = mod(base, segundoMultiplicador, 10);
            segundoDigito = segundoResto === 0 ? 0 : 10 - segundoResto;

            primeiroResto = mod(base + segundoDigito, primeiroMultiplicador, 10);
            primeiroDigito = primeiroResto === 0 ? 0 : 10 - primeiroResto;
        } else {
            segundoResto = mod(base, segundoMultiplicador);
            segundoDigito = substracaoPor11SeMaiorQue2CasoContrario0(segundoResto);

            primeiroResto = mod(base + segundoDigito, primeiroMultiplicador);
            primeiroDigito = substracaoPor11SeMaiorQue2CasoContrario0(primeiroResto);
        }

        return valor === base + primeiroDigito + segundoDigito;
    },

    se: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }

        return calculoTrivial(valor);
    },

    al: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }

        if (naoComecaCom(valor, '24')) {
            return false;
        }

        //
        // Removi a validação do tipo da empresa abaixo
        // devido a ambiguidade entre a especificação do
        // Sintegra (http://www.sintegra.gov.br/Cad_Estados/cad_AL.html) e do
        // site do da Sefaz do Alagoas (http://www.sefaz.al.gov.br/sintegra/cad_AL.asp).
        // Veja o issue #4 - https://github.com/gammasoft/ie/issues/4
        //
        // if('03578'.split('').indexOf(valor.substring(2, 3)) === -1) {
        //     return false;
        // }

        const base = primeiros(valor);

        let resto = mod(base) * 10;

        const resT = resto / 11
        resto = resto - (resT * 11);
        const digito = resto === 10 ? 0 : resto;

        return valor === base + digito;
    },

    pb: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }

        return calculoTrivial(valor);
    },

    rn: function (valor) {
        if (tamanhoNaoE(valor) && tamanhoNaoE(valor, 10)) {
            return false;
        }

        if (naoComecaCom(valor, '20')) {
            return false;
        }

        const base = valor.substring(0, valor.length - 1);

        const multiplicadores = serie(2, 9);
        if (tamanhoE(valor, 10)) {
            multiplicadores.push(10);
        }

        const resto = (mod(base, multiplicadores) * 10) % 11;
        const digito = resto === 10 ? 0 : resto;

        return valor === base + digito;
    },

    ap: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }

        if (naoComecaCom(valor, '03')) {
            return false;
        }

        const base = primeiros(valor);

        let p, d;

        if (entre(base, 3000001, 3017000)) {
            p = 5;
            d = 0;
        } else if (entre(base, 3017001, 3019022)) {
            p = 9;
            d = 1;
        } else {
            p = 0;
            d = 0;
        }

        const resto = mod(p + base, [2, 3, 4, 5, 6, 7, 8, 9, 1]);

        let digito;
        if (resto === 1) {
            digito = 0;
        } else if (resto === 0) {
            digito = d;
        } else {
            digito = 11 - resto;
        }

        return valor === base + digito;
    },

    rr: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }

        if (naoComecaCom(valor, '24')) {
            return false;
        }

        const base = primeiros(valor);
        const digito = mod(base, [8, 7, 6, 5, 4, 3, 2, 1], 9);

        return valor === base + digito;
    },

    am: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }

        return calculoTrivial(valor);
    },

    ro: function (valor) {
        let base, digito, resultadoMod;

        if (tamanhoE(valor, 9)) {
            base = valor.substring(3, 8);
            digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));

            return valor === valor.substring(0, 3) + base + digito;
        } else if (tamanhoE(valor, 14)) {
            base = primeiros(valor, 13);
            resultadoMod = mod(base);
            digito = resultadoMod <= 1 ? 1 : 11 - resultadoMod;

            return valor === base + digito;
        } else {
            return false;
        }
    },

    rj: function (valor) {
        if (tamanhoNaoE(valor, 8)) {
            return false;
        }

        const base = primeiros(valor, 7);
        const digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base, serie(2, 7)));

        return valor === base + digito;
    },

    sc: function (valor) {
        return calculoTrivial(valor);
    },

    pi: function (valor) {
        return calculoTrivial(valor);
    },

    es: function (valor) {
        return calculoTrivial(valor);
    },

    pr: function (valor) {
        if (tamanhoNaoE(valor, 10)) {
            return false;
        }

        const base = primeiros(valor);

        const restoPrimeiro = mod(base, serie(2, 7));
        const primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;

        const restoSegundo = mod(base + primeiro, serie(2, 7));
        const segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;

        return valor === base + primeiro + segundo;
    },

    pa: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }

        if (naoComecaCom(valor, '15')) {
            return false;
        }

        return calculoTrivial(valor);
    },

    ce: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        return calculoTrivial(valor);
    },

    pe: function (valor) {
        const base = valor.substring(0, valor.length - 2);

        const restoPrimeiro = mod(base);
        const primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;

        const restoSegundo = mod(base + primeiro);
        const segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;

        return valor === base + primeiro + segundo;
    },

    ma: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }

        if (naoComecaCom(valor, '12')) {
            return false;
        }

        return calculoTrivial(valor);
    },

    ac: function (valor) {
        if (tamanhoNaoE(valor, 13)) {
            return false;
        }

        if (naoComecaCom(valor, '01')) {
            return false;
        }

        const base = primeiros(valor, 11);

        const primeiroDigito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
        const segundoDigito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base + primeiroDigito));

        return valor === base + primeiroDigito + segundoDigito;
    },

    rs: function (valor) {
        if (tamanhoNaoE(valor, 10)) {
            return false;
        }

        const base = primeiros(valor, 9);
        return calculoTrivial(valor, base, true);
    },

    mt: function (valor) {
        if (tamanhoNaoE(valor, 11) && tamanhoNaoE(valor)) {
            return false;
        }

        const base = tamanhoE(valor, 11) ? valor.substring(0, 10) : primeiros(valor);
        return calculoTrivial(valor, base, true);
    },

    sp: function (valor) {
        valor = valor.toUpperCase();

        let segundaBase;

        if (valor.substr(0, 1) === 'P') {
            if (tamanhoNaoE(valor, 13)) {
                return false;
            }

            const base = valor.substring(1, 9);
            segundaBase = valor.substring(10, 13);
            const resto = mod(base, [10, 8, 7, 6, 5, 4, 3, 1]).toString();
            const digito = resto.length > 1 ? resto[1] : resto[0];

            return valor === 'P' + base + digito + segundaBase;
        } else {
            if (tamanhoNaoE(valor, 12)) {
                return false;
            }

            const primeiraBase = primeiros(valor);
            segundaBase = valor.substring(9, 11);

            const primeiroResto = mod(primeiraBase, [10, 8, 7, 6, 5, 4, 3, 1]).toString();
            const primeiro = primeiroResto.length > 1 ? primeiroResto[1] : primeiroResto[0];

            const segundoResto = mod(primeiraBase + primeiro + segundaBase, serie(2, 10)).toString();
            const segundo = segundoResto.length > 1 ? segundoResto[1] : segundoResto[0];

            return valor === primeiraBase + primeiro + segundaBase + segundo;
        }
    },

    mg: function (valor) {
        if (tamanhoNaoE(valor, 13)) {
            return false;
        }

        const base = primeiros(valor, 11);

        const baseComZero = valor.substring(0, 3) + '0' + valor.substring(3, 11);

        let i = 0;
        const produtorioLiteral = baseComZero.split('').reduceRight(function (anterior, atual) {
            if (i > [2, 1].length - 1) {
                i = 0;
            }

            return ([2, 1][i++] * parseInt(atual, 10)).toString() + anterior.toString();
        }, '').split('').reduce(function (anterior, atual) {
            return anterior + parseInt(atual, 10);
        }, 0);

        let primeiro = ((Math.floor(produtorioLiteral / 10) + 1) * 10) - produtorioLiteral;
        if (primeiro === 10) {
            primeiro = 0;
        }

        const segundo = substracaoPor11SeMaiorQue2CasoContrario0(mod(base + primeiro, serie(2, 11)));

        return valor === base + primeiro + segundo;
    },

    to: function (valor) {
        if (tamanhoNaoE(valor) && tamanhoNaoE(valor, 11)) {
            return false;
        }

        let base;

        if (tamanhoE(valor, 11)) {
            if (['01', '02', '03', '99'].indexOf(valor.substring(2, 4)) === -1) {
                return false;
            }

            base = valor.substring(0, 2) + valor.substring(4, 10);
        } else {
            base = primeiros(valor);
        }

        const digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));

        return valor === valor.substring(0, valor.length - 1) + digito;
    },

    go: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }

        if (['10', '11', '15'].indexOf(valor.substring(0, 2)) === -1) {
            return false;
        }

        const base = primeiros(valor);

        if (base === '11094402') {
            return valor.substr(8) === '1' || valor.substr(8) === '0';
        }

        const resto = mod(base);
        let digito;

        if (resto === 0) {
            digito = 0;
        } else if (resto === 1) {
            if (entre(base, 10103105, 10119997)) {
                digito = 1;
            } else {
                digito = 0;
            }
        } else {
            digito = 11 - resto;
        }

        return valor === base + digito;
    },

    ms: function (valor) {
        if (naoComecaCom(valor, '28')) {
            return false;
        }

        return calculoTrivial(valor);
    },

    df: function (valor) {
        if (tamanhoNaoE(valor, 13)) {
            return false;
        }

        if (naoComecaCom(valor, '07')) {
            return false;
        }

        const base = primeiros(valor, 11);

        const primeiro = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
        const segundo = substracaoPor11SeMaiorQue2CasoContrario0(mod(base + primeiro));

        return valor === base + primeiro + segundo;
    }
};

function lookup(ie) {
    const resultado = [];

    for (const estado in funcoes) {
        if (funcoes[estado](ie)) {
            resultado.push(estado);
        }
    }

    if (tamanhoE(resultado, 0)) {
        return false;
    } else {
        return resultado;
    }
}

export function validar(ie, estado) {
    if (eIndefinido(estado) || estado === null) {
        estado = '';
    }

    estado = estado.toLowerCase();

    if (estado !== '' && !(estado in funcoes)) {
        throw new Error('estado não é válido');
    }

    if (eIndefinido(ie)) {
        throw new Error('ie deve ser fornecida');
    }

    if (Array.isArray(ie)) {
        return ie.map(function (i) { return validar(i, estado); });
    }

    if (typeof ie !== 'string') {
        throw new Error('ie deve ser string ou array de strings');
    }

    if (ie.match(/^ISENTO$/i)) {
        return true;
    }

    ie = ie.replace(/[\.|\-|\/|\s]/g, '');

    if (estado === '') {
        return lookup(ie);
    }

    if (/^\d+$/.test(ie) || estado === 'sp') {
        return funcoes[estado](ie);
    }

    return false;
}

export const IEMASKS = {
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