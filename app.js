// https://www.omnicalculator.com/conversion/kg-to-gallons

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const volumeRadio = document.getElementById('volumeRadio');
const weightRadio = document.getElementById('weightRadio');

let volume;
let weight = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

volumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Weight';
  weight = v1;
  result.textContent = '';
});

weightRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume';
  volume = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(volumeRadio.checked)
    result.textContent = `Volume = ${computevolume().toFixed(5)}`;

  else if(weightRadio.checked)
    result.textContent = `Weight = ${computeweight().toFixed(5)}`;
})

// calculation

function computevolume() {
  return 0.264172 * Number(weight.value);
}

function computeweight() {
  return Number(volume.value) / 0.264172;
}