//primul script
console.info("salut");
function getInfo(name) {
    var msg = "Hello " +  name + "," + " welcome at FastTrackIT.";
    return msg;
}
var info = getInfo("Alexandra");
console.info(info);
console.info(2 + 3);
function adunaNumerele(a, b) {
    console.info("primul numar este " + a);
    console.info("al doilea numar este " + b);
    var rezultat = a + b;
    rezultat = rezultat * 0.9;
    return rezultat;
}
var calculat = adunaNumerele(2,3);
console.info(calculat);




