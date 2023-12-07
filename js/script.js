function hitung(){
    let tinggi = document.getElementById("input-tinggi").value;
    let alas = document.getElementById("input-alas").value;
    let hasil = (parseInt(alas) * (0.5)) * parseInt(tinggi);
    hasil = document.getElementById("hasil").value;
    document.getElementById("hasil").value = (parseInt(alas) * (0.5)) * parseInt(tinggi);
    console.log (hasil)
}

function reset(){
    let tinggi = document.getElementById("input-tinggi").value;
    let alas = document.getElementById("input-alas").value;
    let hasil =  (parseInt(alas) * (0.5)) * parseInt(tinggi);
    document.getElementById("input-tinggi").value = null;
    document.getElementById("input-alas").value = null;
    document.getElementById("hasil").value = null;
}

function hitungk(){
    let sisi1 = document.getElementById("input-sisi-1").value;
    let sisi2 = document.getElementById("input-sisi-2").value;
    let sisi3 = document.getElementById("input-sisi-3").value;
    let hasil = parseInt(sisi1)+ parseInt(sisi2) + parseInt(sisi3);
    hasil = document.getElementById("hasilk").value;
    document.getElementById("hasilk").value = parseInt(sisi1)+ parseInt(sisi2) + parseInt(sisi3);
    console.log (hasil)
}

function resetk(){
    let sisi1 = document.getElementById("input-sisi-1").value;
    let sisi2 = document.getElementById("input-sisi-2").value;
    let sisi3 = document.getElementById("input-sisi-3").value;
    let hasil = parseInt(sisi1)+ parseInt(sisi2) + parseInt(sisi3);
    document.getElementById("input-sisi-1").value = null;
    document.getElementById("input-sisi-2").value = null;
    document.getElementById("input-sisi-3").value = null;
    document.getElementById("hasilk").value = null;
}
