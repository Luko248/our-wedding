function a(){let i=document.getElementById("mapElem"),n={lat:49.412402,lng:18.56988},e=new google.maps.Map(i,{zoom:17,center:n,mapId:"1406e53bf9ae68ff",disableDefaultUI:!0,options:{gestureHandling:"cooperative"}}),t=new google.maps.InfoWindow({content:'<div class="map__widnow"><strong>Penzi\xF3n Kriv\xE1\u0148<strong><br><span>Lucie & Luk\xE1\u0161 Svatba</span></div>',ariaLabel:"Penzi\xF3n Kriv\xE1\u0148"}),o=new google.maps.Marker({position:n,map:e,title:"Penzi\xF3n Kriv\xE1\u0148"});o.addListener("click",()=>{t.open({anchor:o,map:e})})}a();
//# sourceMappingURL=init.js.map
