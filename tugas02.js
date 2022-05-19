let angka1= '';
let angka2= '';
let op= '';

let angka = document.getElementsByClassName('angka');
for(let i = 0; i < angka.length; i++){
    angka[i].addEventListener('click', function(){
        if(op == ''){
            angka1 += angka[i].dataset.angka;
            document.getElementById('hasil').value = angka1;
        }else{
            angka2 += angka[i].dataset.angka;
            document.getElementById('hasil').value = angka2;
        }
        
    })
}

let btnOp = document.getElementsByClassName('operasi');
for(let x = 0; x < btnOp.length; x++){
    btnOp[x].addEventListener('click', function(){
        if(op == ''){
            document.querySelector('#hasil').value = '';
            op += btnOp[x].dataset.op
        }else{
            alert('Operasi sudah di pilih')
        }  
    })
}

document.querySelector(' .btnHapus').addEventListener('click', function(){
    angka1 = '';
    angka2 = '';
    op = '';
    document.querySelector('#hasil').value = '';
})

document.querySelector(' .btnHasil').addEventListener('click', function(){
    if(angka1 != '' && angka2 != ''){
        document.querySelector('#hasil').value = eval(parseInt(angka1)+op+parseInt(angka2));
    }
})