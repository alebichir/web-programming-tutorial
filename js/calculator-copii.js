function CatFacAdunareaNumerelor(a, b) {
    console.info("Primul numar este " + a);
    console.info("Al doilea numar este " + b);
    var max = b;
    var min = a;
    if (a > b) {
        console.info(a + " este mai mare ca " + b);
        max = a;
        min = b;
    } else {
        max = b;
        min = a;
    }
    console.info("Numarul cel mai mare este " + max);
    console.info("Vom numara " + min + " degetele");
    //min--;
    //min- = 1;
    //min+ = -1;
    //min = min - 1;
    for (min-- ; min >= 0; min--) {
        //Aici vrem sa numaram
        max++;
        console.info("Avem " + max + " degetele" + ", au ramas " + min + " degetele" );
    }
    return max;
}
var rezultat;
console.info(rezultat);

rezultat = CatFacAdunareaNumerelor(3, 5);
console.info(rezultat);

rezultat = CatFacAdunareaNumerelor(7, 2);
console.info(rezultat);





