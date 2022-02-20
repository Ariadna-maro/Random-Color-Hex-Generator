const btn = document.getElementById('btn');
const body = document.querySelector('body');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hex_value = document.getElementById('hex');
const cpy = document.getElementById('myCopy');
body.style.backgroundColor = "#ffffff";
hex_value.innerHTML = '#ffffff';
btn.addEventListener('click', function(){
    let hexKey = '#';
    for (let i=0; i<6; i++){
        const index = Math.floor(Math.random() * hex.length);
        hexKey = hexKey + hex[index];
    }

    hex_value.innerHTML = hexKey;

    document.getElementById('myHex').value = hexKey;
    body.style.background = hexKey;

});
cpy.addEventListener('click', function(){
    let hex = document.getElementById('myHex');

    hex.select();
    hex.setSelectionRange(0, 99999);

    alert('Copied Hex Color : ' + hex.value);
});
