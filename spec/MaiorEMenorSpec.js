describe ("Maior e Menor", function(){

    it("deve funcionar para números em ordem não sequancial", function(){
        let algoritmo = new MaiorEMenor();
        algoritmo.encontra([5,15,7,9]);

        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("deve funcionar para números em ordem decrescente",function(){
        let algoritmo = new MaiorEMenor();
        algoritmo.encontra([9,8,7,6]);

        expect(algoritmo.pegaMaior()).toEqual(9);
        expect(algoritmo.pegaMenor()).toEqual(6);
    });

    it("deve funcionar para números em ordem crescente",function(){
        let algoritmo = new MaiorEMenor();
        algoritmo.encontra([6,20,70,200]);

        expect(algoritmo.pegaMaior()).toEqual(200);
        expect(algoritmo.pegaMenor()).toEqual(6);
    });

    it("deve funcionar para vetor de 1 caracter",function(){
        let algoritmo = new MaiorEMenor();
        algoritmo.encontra([6]);

        expect(algoritmo.pegaMaior()).toEqual(6);
        expect(algoritmo.pegaMenor()).toEqual(6);
    });
});