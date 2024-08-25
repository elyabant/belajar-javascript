let mhs = {
    name: "Fulan",
    age: 20,
    major: "TRMG",
    skills: ['Sysadmin', 'OOP', 'Design'],
    poor: true, // miskin
}
let mhs1 = {
    name: "Fulanah",
    age: 20,
    skills: ['OOP'],
    poor: true, // miskin
}
let mhs2 = {
    name: "acep",
    age: 18,
    skills: ["Desain"],
    poor: false, // miskin
}

// buka youtube ketik tutorial buat snipet
// console.log('Mahasiswa boleh daftar :', mhs.age > 17)

// if (mhs.major == "TRMG") {
//     console.log(mhs.name + "Jurusan TRMG")
// } else if (mhs.major == "TRKJ"){
//     console.log(mhs.name + "Jurusan TRKJ")
// } else if (mhs.major == "TRPL"){
//     console.log(mhs.name + "Jurusan TRPL")
// } else{
//     console.log(mhs.name + "Jurusan" + mhs.major);
// }

// console.log(mhs.major == "TRPL");

//Switch Case
// switch (mhs.major) {
//     case "TRMG":
//         console.log(mhs.name + "Jurusan TRMG");
//         break;
//     case "TRKJ":
//         console.log(mhs.name + "Jurusan TRKJ");
//         break;
//     case "TRPL":
//         console.log(mhs.name + "Jurusan TRPL");
//         break;
//     default:
//         console.log(mhs.name + "Bukan anak IDN");
// }

//conditional Function
// kriteria : umur kurang dari 21, miskin, skill lebih dari 2

function cekKelulusan(peserta) {
    let name = peserta.name;
    let age = peserta.age;
    let poor = peserta.poor;
    let skills = peserta.skills;
    if (age < 21, poor == true, skills.length > 2) {
        //peserta lulus
        console.log(name + "kamu lulus");
    } else if (age < 21, poor == true) {
        //peserta harus nonton youtube WPU dulu
        console.log(name + "harus nonton youtube WPU dulu");
    } else{
        //peserta tidak lulus
        console.log(name + "kamu tidak lulus");
    }
}
cekKelulusan(mhs)
cekKelulusan(mhs1)
cekKelulusan(mhs2)

