let pc = {
    proc: "celoron",
    ram: ['2gb', '8gb'],
    slotRam: 2,
    mobo: {
        chip: "B450",
        socket: "LGA1abcd",
        dualChannel: true
    }
};
// console.log(pc['proc'])
console.log(pc.mobo.chip)