// iniciar animações
AOS.init({
duration:1000,
once:true
});

// gráfico de exemplo
const ctx = document.getElementById('impactChart');

new Chart(ctx, {
type:'bar',
data:{
labels:['ChatGPT','Gemini','Claude'],
datasets:[{
label:'Impacto Energético Estimado',
data:[60,55,40],
backgroundColor:['#22c55e','#4ade80','#16a34a']
}]
},
options:{
plugins:{
legend:{display:false}
},
scales:{
y:{
beginAtZero:true
}
}
}
});
