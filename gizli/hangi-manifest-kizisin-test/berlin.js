const questions = [
  { q:"Sabah ilk iş ne yaparsın?", options:[
    {text:"Alarmı ertelerim", val:"Sueda"},
    {text:"Müzik açarım", val:"Mina"},
    {text:"Aynaya bakarım", val:"Lidya"},
    {text:"Spor yaparım", val:"Hilal"},
    {text:"Dans ederim", val:"Esin"},
    {text:"Kahvemi içerim", val:"Zeynep"}
  ]},
  { q:"En sevdiğin kombin hangisi?", options:[
    {text:"Simli elbise", val:"Mina"},
    {text:"Deri ceket", val:"Lidya"},
    {text:"Takım elbise", val:"Hilal"},
    {text:"Renkli tayt", val:"Esin"},
    {text:"Sade elbise", val:"Zeynep"},
    {text:"Hoodie & sneaker", val:"Sueda"}
  ]},
  { q:"Sahneye çıksan ne yaparsın?", options:[
    {text:"Dans şovu yaparım", val:"Esin"},
    {text:"Duygusal şarkı söylerim", val:"Mina"},
    {text:"Stilimle büyülerim", val:"Lidya"},
    {text:"Grubu yönetirim", val:"Hilal"},
    {text:"Müziği hissederim", val:"Zeynep"},
    {text:"Enerji saçarım", val:"Sueda"}
  ]},
  { q:"Boş zamanlarında ne yaparsın?", options:[
    {text:"Dans pratiği yaparım", val:"Esin"},
    {text:"Şarkı söylerim", val:"Mina"},
    {text:"Moda ile ilgilenirim", val:"Lidya"},
    {text:"Plan yaparım", val:"Hilal"},
    {text:"Kitap okurum", val:"Zeynep"},
    {text:"Arkadaşlarla oyun oynarım", val:"Sueda"}
  ]},
  { q:"Sahne kostümü tercihin?", options:[
    {text:"Renkli ve enerjik", val:"Esin"},
    {text:"Parlak ve dikkat çekici", val:"Mina"},
    {text:"Şık ve karizmatik", val:"Lidya"},
    {text:"Düz ve profesyonel", val:"Hilal"},
    {text:"Sade ve zarif", val:"Zeynep"},
    {text:"Rahat ve spor", val:"Sueda"}
  ]},
  { q:"Müziğe bakış açın?", options:[
    {text:"Dans ve hareket", val:"Esin"},
    {text:"Duygular ve sözler", val:"Mina"},
    {text:"Stil ve imaj", val:"Lidya"},
    {text:"Organizasyon ve liderlik", val:"Hilal"},
    {text:"Huzur ve his", val:"Zeynep"},
    {text:"Enerji ve eğlence", val:"Sueda"}
  ]},
  { q:"Arkadaş ortamında nasıl görünürsün?", options:[
    {text:"Enerjik ve neşeli", val:"Sueda"},
    {text:"Romantik ve duygusal", val:"Mina"},
    {text:"Cool ve tarz sahibi", val:"Lidya"},
    {text:"Lider ve organize", val:"Hilal"},
    {text:"Sakin ve naif", val:"Zeynep"},
    {text:"Yaratıcı ve hareketli", val:"Esin"}
  ]},
  { q:"Favori aktivite?", options:[
    {text:"Dans etmek", val:"Esin"},
    {text:"Şarkı söylemek", val:"Mina"},
    {text:"Alışveriş ve stil", val:"Lidya"},
    {text:"Planlama ve yönetim", val:"Hilal"},
    {text:"Kitap okumak", val:"Zeynep"},
    {text:"Oyun ve eğlence", val:"Sueda"}
  ]}
];

const results = {
  "Sueda": {text:"✨ Sueda Uluca: Enerjik ve yaratıcı bir ruhsun. Dans senin yaşam tarzın!", img:"https://i.imgur.com/sueda.jpg"},
  "Mina": {text:"🎤 Mina Solak: Duygusal ve içten bir yapın var. Kalpten söylersin!", img:"https://i.imgur.com/mina.jpg"},
  "Lidya": {text:"💅 Lidya Pınar: Tarzınla sahnede ışıldarsın. Tam bir ikon!", img:"https://i.imgur.com/lidya.jpg"},
  "Hilal": {text:"🧠 Hilal Yelekçi: Doğuştan lider, her ortamda düzen kurarsın!", img:"https://i.imgur.com/hilal.jpg"},
  "Esin": {text:"🔥 Esin Bahat: Sahne senin evin. Yaratıcılığınla büyülersin!", img:"https://i.imgur.com/esin.jpg"},
  "Zeynep": {text:"🌸 Zeynep Sude Oktay: Naif ama güçlü bir ruhsun. Kalplerin sahibisin!", img:"https://i.imgur.com/zeynep.jpg"}
};

let currentQ = 0;
let answers = [];

const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const questionText = document.getElementById('question-text');
const optionsDiv = document.getElementById('options');
const resultDiv = document.getElementById('result');

startBtn.addEventListener('click', () => {
  startScreen.style.display='none';
  questionScreen.style.display='block';
  currentQ = 0;
  answers = [];
  showQuestion();
});

function showQuestion() {
  const q = questions[currentQ];
  questionText.innerText = q.q;
  optionsDiv.innerHTML = "";
  q.options.forEach(opt=>{
    const btn = document.createElement('button');
    btn.innerText = opt.text;
    btn.addEventListener('click', ()=>{
      answers.push(opt.val);
      currentQ++;
      if(currentQ < questions.length){
        showQuestion();
      } else {
        showResult();
      }
    });
    optionsDiv.appendChild(btn);
  });
}

function showResult() {
  questionScreen.style.display='none';
  resultDiv.style.display='block';
  
  const counts = {};
  answers.forEach(a=>counts[a]=(counts[a]||0)+1);
  let topMembers = [], max=0;
  for(let m in counts){
    if(counts[m]>max){ max=counts[m]; topMembers=[m]; }
    else if(counts[m]===max) topMembers.push(m);
  }
  const topAnswer = topMembers[Math.floor(Math.random()*topMembers.length)];
  const res = results[topAnswer];
  
  resultDiv.innerHTML = `<img src="${res.img}" alt="${topAnswer}"><p>${res.text}</p>`;
  const restartBtn = document.createElement('button');
  restartBtn.innerText = "Testi Yeniden Başlat";
  restartBtn.addEventListener('click', ()=>{
    resultDiv.style.display='none';
    startScreen.style.display='block';
  });
  resultDiv.appendChild(restartBtn);
}