var p=()=>{let s=document.body,i=document.querySelector("nav"),r=document.createElement("div");r.setAttribute("data-scroll-watcher",""),i.before(r),new IntersectionObserver(o=>{i.classList.toggle("sticked",!o[0].isIntersecting)},{rootMargin:"100% 0px 0px 0px"}).observe(r);let e=document.getElementById("menuBtn"),t=document.querySelector("nav ul");e.addEventListener("click",()=>{e.classList.toggle("burger--open"),t.classList.toggle("open")}),t.querySelectorAll("nav a").forEach(o=>{o.addEventListener("click",()=>{t.classList.remove("open"),e.classList.remove("burger--open")})})};var g=()=>{let s=document.querySelector("header");if(!s)return;function i(e,t){let n=document.createElement("div");n.classList.add("heart"),n.innerText="\u2665",n.style.left=e+"px",n.style.top=t+"px";let o=Math.random()*2+1,c=Math.random()*2+1,l=Math.min(o,c,5);return n.style.animationDuration=`${l}s`,setTimeout(()=>{n.remove()},l*1e3),n}function r(){return Math.random()<.15}function d(e){if(!r())return;let t=Math.floor(e.clientX/20)*20,n=Math.floor(e.clientY/20)*20,o=i(t,n);s.appendChild(o)}s.addEventListener("mousemove",d)};function v(){let s=document.getElementById("mapElem");var i;let r={lat:49.415,lng:18.57},d={lat:49.41229,lng:18.5725},e={lat:49.41229,lng:18.5743};window.innerWidth<768?i=r:window.innerWidth>=768&&window.innerWidth<1200?i=d:i=e;let t=new google.maps.Map(s,{zoom:17,center:i,mapId:"1406e53bf9ae68ff",disableDefaultUI:!0,options:{gestureHandling:"cooperative"}}),o={main:{icon:"/dist/images/map-icons/"+"marker.svg"}},c=[{position:new google.maps.LatLng(49.412402,18.56988),type:"main",title:"Penzi\xF3n Kriv\xE1\u0148"}],l=new google.maps.InfoWindow({content:'<div class="map__widnow"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8gNB43uu0kQeLv784HwPOFhVMiAPwJkNmAGAQsgqfIADJS8yg0OVrJiSZCo0LQqhhR0&usqp=CAU" alt="Penzi\xF3n Kriv\xE1\u0148" loading="lazy"></img><address><strong>Penzi\xF3n Kriv\xE1\u0148</strong><br>Dub\xE1\u010Dovci 509, 023 21 Kor\u0148a<br>Slovensko</address></div>',ariaLabel:"Penzi\xF3n Kriv\xE1\u0148"}),m=()=>{l.close()};for(let a=0;a<c.length;a++){let u=new google.maps.Marker({position:c[a].position,icon:o[c[a].type].icon,map:t});u.addListener("click",()=>{l.open({anchor:u,map:t})})}window.addEventListener("click",a=>{s.contains(a.target)||m()}),t.addListener("click",()=>{m()})}v(),document.addEventListener("DOMContentLoaded",()=>{p(),g()});
//# sourceMappingURL=init.js.map
