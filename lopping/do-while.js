// do-while sedikit berbeda dari while tetapi klo kita tidak tau perbedaanny, kode kita tidak akan bekerja dengan benar

var a = [];
var i = 0;

do{
    a.push(i);
    i++;
}while(i < 4);

console.log(a);

// klo pake while doank
// klo while nya false  
var b = [];
var i = 5;
//lain carita klo var i nya dibawah 4 atau sebaliknya
while (i < 4){
    b.push(i);
    i++;
}

console.log(b);

//klo pake Do While
var a = [];
var i = 5;

do {
    a.push(i);
    i++;
} while (i < 4);

console.log(a);


