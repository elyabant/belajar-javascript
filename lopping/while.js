var a = [];
var i = 0;

while (i < 4) {
    a.push(i);

    i++;
}
console.log(a);

// bisa juga

var a = [];
var i = 0;

while(i++ < 4){
    a.push(i);
}
console.log(a);

// jika kit Menulisnya kebalik seperti ++i
var a = [];
var i = 0;

while (++i < 4){
    a.push(i);
};
console.log(a);

