// Mocha
// agrupacion de casos de test describe(nombre_test, funcion)
// it cada caso particular it (título, funcion)

// antes o despues de cada describe o it
// se puede ejecutar con: before(), beforeEach(), after(), afterEach()

describe('Test de suma', function () {
    before(function () {
        console.log('esto se corre antes del primer test')
    })
    beforeEach(function () {
        console.log('esto antes de cada test')
    })
    after(function () {
        console.log('esto se corre al finalizar el test')
    })
    it('resultado positivo', function () {
        
    })
    it('resultado negativo', function () {
        
    })
})

// Chai compara los valores
// should = debe

// expect = espera
var expect = chai.expect;
var nombre = "Maria";
expect(nombre).to.equal("Maria");   // que sea "Maria"
expect(miValor).to.equal(1);   // que sea 1
expect(nombre)to.be.a("string");    // que sea un string
expect([])to.be.an("array");    // que sea un array
expect({a: 1}).to.eql({a: 1}).but.not.equal({a: 1})  // que los dos objetos sean iguales con eql

// assert = afirma
var assert = chai.assert;
var nombre = "Juan";
assert.equal(nombre, "Juan");

var expect = chai.expect;
describe('Test de suma', function(){
    it('resultado positivo', function(){
            var resultado = suma(2,3);
            expect(resultado).to.be.above(0);
    })
    it('resultado negativo', function(){
            var resultado = suma(-1,-3);
            expect(0).to.be.above(resultado);
    })
})