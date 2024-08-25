let mhs = ["Raihan", "Sabil", "Ukhasyah"];

let totalMhs = mhs.length 
mhs.push('Alip')//nambah di paling belakang
mhs.pop()//menghapus yang paling belakang
mhs.unshift("Ya'qub")//nambah di paling depan
mhs.splice(1, 0, "Taufiq")// angka 2 itu buat menambahkn taufiq didalam index ke 2, nah klo yang tengah itu buat menghapus klo 0 berarti tidak ada yang dihapus
console.log(mhs)