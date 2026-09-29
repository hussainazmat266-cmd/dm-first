const nums=document.getElementById("numbers"), recent=document.getElementById("recent"), history=document.getElementById("history"), timer=document.getElementById("timer"), period=document.getElementById("period");
let round=50821, seconds=30;
const colors={0:"violet",1:"green",2:"red",3:"green",4:"red",5:"violet",6:"red",7:"green",8:"red",9:"green"};
const initial=[6,6,7,3,1];

function makeNumbers(){
  for(let n=0;n<=9;n++){
    const b=document.createElement("button"); b.className="num "+colors[n]; b.textContent=n;
    b.onclick=()=>demoPick(n); nums.appendChild(b);
  }
}
function demoPick(n){ alert("Demo selection: "+n+"\\nNo real-money wager is placed."); }
function addHistory(n){
  const row=document.createElement("div"); row.className="row";
  row.innerHTML=`<span>${period.textContent}</span><span class="ball">${n}</span><span>${n>=5?"Big":"Small"}</span><span><i class="dot ${colors[n]}"></i></span>`;
  history.prepend(row); while(history.children.length>8) history.lastElementChild.remove();
}
function updateRecent(arr){recent.innerHTML=arr.slice(-5).map(n=>`<i>${n}</i>`).join("")}
let recentNums=[...initial]; updateRecent(recentNums);
function newRound(){
  round++; const n=Math.floor(Math.random()*10);
  period.textContent="20260929"+String(round).padStart(8,"0");
  recentNums.push(n); updateRecent(recentNums); addHistory(n); seconds=30;
}
period.textContent="202609290000"+round;
setInterval(()=>{seconds--; if(seconds<=0)newRound(); timer.textContent="00:"+String(seconds).padStart(2,"0")},1000);
makeNumbers();
initial.slice().reverse().forEach(n=>{period.textContent="202609290000"+round;addHistory(n);round--;});
round=50821; period.textContent="202609290000"+round;
