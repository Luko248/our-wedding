var L=()=>{let r=document.querySelector("body"),i=document.querySelector(".header__anim"),d=1900;new Date>new Date("2023-09-02T13:00:00")&&document.querySelectorAll(".header__anim span").forEach((s,a)=>{let t=`anim_part-${a+1}_after`;s.setAttribute("data-localize",t)}),window.setTimeout(()=>{i?.remove(),r?.classList.remove("start")},d)};var E=()=>{let r=document.body,i=document.querySelector("nav"),d=document.createElement("div"),h=window.innerWidth<=768;d.setAttribute("data-scroll-watcher",""),i.before(d);let u=new IntersectionObserver(e=>{i.classList.toggle("sticked",!e[0].isIntersecting)},{rootMargin:"100% 0px 0px 0px"});h||u.observe(d);let c=document.getElementById("menuBtn"),s=document.querySelector("nav ul"),a=s.querySelectorAll("nav a"),t=()=>{c.classList.remove("burger--open"),s.classList.remove("open"),r.classList.remove("overflow-hidden")},o=e=>{e.preventDefault();let m=e.target.getAttribute("href")?.substring(1),p=document.getElementById(m||"");if(a.forEach(v=>{v.classList.remove("active")}),e.target.classList.add("active"),p){let v=p.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:v,behavior:"smooth"})}t()};c.addEventListener("click",()=>{c.classList.toggle("burger--open"),s.classList.toggle("open"),r.classList.toggle("overflow-hidden")}),a.forEach(e=>{e.addEventListener("click",o)}),document.addEventListener("click",e=>{c&&e.target!==c&&t()});let l=e=>{let m=e.getBoundingClientRect(),p=window.innerHeight||document.documentElement.clientHeight;return m.top<p/2},n=()=>{document.querySelectorAll("section").forEach((m,p)=>{let v=a[p];l(m)&&(a.forEach(w=>{w.classList.remove("active")}),v.classList.add("active"))})};(()=>{let e=!1,m=()=>{n(),e=!1};window.addEventListener("scroll",()=>{e||(e=!0,requestAnimationFrame(m))})})()};var y=()=>{let r=document.querySelector("header");if(!r||window.innerWidth<768)return;function i(u,c){let s=document.createElement("div");s.classList.add("heart"),s.innerText="\u2665",s.style.left=u+"px",s.style.top=c+"px";let a=Math.random()*2+1,t=Math.random()*2+1,o=Math.min(a,t,5);return s.style.animationDuration=`${o}s`,setTimeout(()=>{s.remove()},o*1e3),s}function d(){return Math.random()<.15}function h(u){if(!d())return;let c=Math.floor(u.clientX/20)*20,s=Math.floor(u.clientY/20)*20,a=i(c,s);r.appendChild(a)}r.addEventListener("mousemove",h)};function f(){let r=document.querySelector(".counter"),i=document.querySelector("#days"),d=document.querySelector("#hours"),h=document.querySelector("#minutes"),u=document.querySelector("#seconds"),c=new Date("2023-09-02T13:00:00"),s=new Date,a=c.getTime()-s.getTime(),t=Math.floor(a/(1e3*60*60*24)),o=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),l=Math.floor(a%(1e3*60*60)/(1e3*60)),n=Math.floor(a%(1e3*60)/1e3);if(a<=0){let g=document.querySelector(".counter");g&&g.remove();return}r&&(i.innerText=t.toString(),d.innerText=o.toString(),h.innerText=l.toString(),u.innerText=n.toString()),setTimeout(f,1e3)}function b(){let r=document.getElementById("mapElem");var i;let d={lat:49.415,lng:18.57},h={lat:49.41229,lng:18.5725},u={lat:49.41229,lng:18.5743};window.innerWidth<768?i=d:window.innerWidth>=768&&window.innerWidth<1200?i=h:i=u;let c=new google.maps.Map(r,{zoom:17,center:i,mapId:"1406e53bf9ae68ff",disableDefaultUI:!0,options:{gestureHandling:"cooperative"}}),a={main:{icon:"/dist/images/map-icons/"+"marker.svg"}},t=[{position:new google.maps.LatLng(49.412402,18.56988),type:"main",title:"Penzi\xF3n Kriv\xE1\u0148"}],o=new google.maps.InfoWindow({content:'<div class="map__widnow"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8gNB43uu0kQeLv784HwPOFhVMiAPwJkNmAGAQsgqfIADJS8yg0OVrJiSZCo0LQqhhR0&usqp=CAU" alt="Penzi\xF3n Kriv\xE1\u0148" loading="lazy"></img><address><strong>Penzi\xF3n Kriv\xE1\u0148</strong><br>Dub\xE1\u010Dovci 509, 023 21 Kor\u0148a<br>Slovensko</address></div>',ariaLabel:"Penzi\xF3n Kriv\xE1\u0148"}),l=()=>{o.close()};for(let n=0;n<t.length;n++){let g=new google.maps.Marker({position:t[n].position,icon:a[t[n].type].icon,map:c});g.addListener("click",()=>{o.open({anchor:g,map:c})})}window.addEventListener("click",n=>{r.contains(n.target)||l()}),c.addListener("click",()=>{l()})}var S=()=>{let r=document.getElementById("guestList"),i=document.getElementById("guestsSelect"),d=document.getElementById("clearSelect");i.addEventListener("input",()=>{i.value.trim().length>=1?d.style.display="inline-block":d.style.display="none"});let h=()=>{fetch("/scripts/guests.json").then(t=>t.json()).then(t=>{let{guests:o}=t;Array.isArray(o)?o.forEach(l=>{let n=document.createElement("option");n.value=l.fullname,n.textContent=l.fullname,n.id=l.id,r.appendChild(n)}):console.error("Invalid JSON data: not an array")}).then(()=>u()).then(()=>c()).catch(t=>console.error(t))},u=()=>{let t=document.querySelector(".table--main"),o=document.querySelector(".table--1"),l=document.querySelector(".table--2"),n=document.querySelector(".table--3"),g=r.querySelectorAll("option");for(let e=1;e<=g.length;e++){let m=document.createElement("button"),p=g[e-1];m.classList.add("chair"),m.setAttribute("data-number",`${e}`),m.setAttribute("title",p.value),e<=7?t.appendChild(m):e>7&&e<=27?o.appendChild(m):e>27&&e<=47?l.appendChild(m):n.appendChild(m)}},c=()=>{document.querySelectorAll(".chair").forEach(o=>{o.addEventListener("click",l=>{a(l)})})};h(),i.addEventListener("input",()=>{let t=document.querySelectorAll(".chair"),o=r.querySelectorAll("option"),l=i.value.toLowerCase();t.forEach(n=>{n.classList.remove("chair--selected")});for(let n=0;n<o.length;n++)if(o[n].value.toLowerCase().startsWith(l)){t[n].classList.add("chair--selected");break}});let s=()=>{document.querySelectorAll(".chair").forEach(o=>{o.classList.remove("chair--selected")})};d.addEventListener("click",()=>{i.value="",d.style.display="none",s()});let a=t=>{s();let o=t.target,l=o.getAttribute("data-number"),n=r.querySelectorAll("option");for(let g=0;g<n.length;g++){let e=n[g];if(e?.value&&e?.id?.toString()===l){i.value=e.value,o.classList.add("chair--selected");break}}}};document.addEventListener("DOMContentLoaded",()=>{L(),E(),y(),b(),f(),S()});
//# sourceMappingURL=init.js.map
