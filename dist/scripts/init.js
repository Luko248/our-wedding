var E = () => { let e = document.querySelector("body"), i = document.querySelector(".header__anim"), c = 1900; new Date > new Date("2023-09-02T13:00:00") && document.querySelectorAll(".header__anim span").forEach((g, l) => { let s = `anim_part-${l + 1}_after`; g.setAttribute("data-localize", s) }), window.setTimeout(() => { i?.remove(), e?.classList.remove("start") }, c) }; var y = () => { let e = document.body, i = document.querySelector("nav"), c = document.createElement("div"), d = window.innerWidth <= 768; c.setAttribute("data-scroll-watcher", ""), i.before(c); let m = new IntersectionObserver(n => { i.classList.toggle("sticked", !n[0].isIntersecting) }, { rootMargin: "100% 0px 0px 0px" }); d || m.observe(c); let u = document.getElementById("menuBtn"), g = document.getElementById("langSwitchBtn"), l = document.querySelector("nav ul"), s = l.querySelectorAll("nav a"), o = () => { u.classList.remove("burger--open"), l.classList.remove("open"), e.classList.remove("overflow-hidden") }, t = n => { n.preventDefault(); let h = n.target.getAttribute("href")?.substring(1), p = document.getElementById(h || ""); if (s.forEach(L => { L.classList.remove("active") }), n.target.classList.add("active"), p) { let L = p.getBoundingClientRect().top + window.pageYOffset; window.scrollTo({ top: L, behavior: "smooth" }) } o() }; u.addEventListener("click", () => { u.classList.toggle("burger--open"), l.classList.toggle("open"), e.classList.toggle("overflow-hidden") }), s.forEach(n => { n.addEventListener("click", t) }), document.addEventListener("click", n => { u && n.target !== u && n.target !== g && o() }); let a = n => { let h = n.getBoundingClientRect(), p = window.innerHeight || document.documentElement.clientHeight; return h.top < p / 2 }, r = () => { document.querySelectorAll("section").forEach((h, p) => { let L = s[p]; a(h) && (s.forEach(H => { H.classList.remove("active") }), L.classList.add("active")) }) }; (() => { let n = !1, h = () => { r(), n = !1 }; window.addEventListener("scroll", () => { n || (n = !0, requestAnimationFrame(h)) }) })() }; var w = () => { let e = document.getElementById("langSwitchBtn"), i = document.querySelector(".lang-switch__pop-up"); e.addEventListener("click", () => { i.classList.toggle("open") }), document.addEventListener("click", c => { c.target !== e && i.classList.remove("open") }) }; var b = () => { let e = document.querySelector("header"); if (!e || window.innerWidth < 768) return; let i; function c(s, o) { let t = document.createElement("div"); t.classList.add("heart"), t.innerText = "\u2665", t.style.left = s + "px", t.style.top = o + "px"; let a = Math.random() * 2 + 1, r = Math.random() * 2 + 1, v = Math.min(a, r, 5); return t.style.animationDuration = `${v}s`, setTimeout(() => { t.remove() }, v * 1e3), t } function d() { return Math.random() < .2 } function m(s) { if (!d()) return; let o = Math.floor(s.clientX / 20) * 20, t = Math.floor(s.clientY / 20) * 20, a = c(o, t); e.appendChild(a) } function u(s) { m(s) } function g(s) { cancelAnimationFrame(i), i = requestAnimationFrame(() => u(s)) } function l() { cancelAnimationFrame(i), e.removeEventListener("mousemove", g) } e.addEventListener("mouseenter", () => { e.addEventListener("mousemove", g) }), e.addEventListener("mouseleave", l) }; function f() { let e = document.querySelector(".counter"), i = document.querySelector("#days"), c = document.querySelector("#hours"), d = document.querySelector("#minutes"), m = document.querySelector("#seconds"), u = new Date("2023-09-02T13:00:00"), g = new Date, l = u.getTime() - g.getTime(), s = Math.floor(l / (1e3 * 60 * 60 * 24)), o = Math.floor(l % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)), t = Math.floor(l % (1e3 * 60 * 60) / (1e3 * 60)), a = Math.floor(l % (1e3 * 60) / 1e3); if (l <= 0) { let r = document.querySelector(".counter"); r && r.remove(); return } e && (i.innerText = s.toString(), c.innerText = o.toString(), d.innerText = t.toString(), m.innerText = a.toString()), setTimeout(f, 1e3) } function S() { let e = document.getElementById("mapElem"); var i; let c = { lat: 49.415, lng: 18.57 }, d = { lat: 49.41229, lng: 18.5725 }, m = { lat: 49.41229, lng: 18.5743 }; window.innerWidth < 768 ? i = c : window.innerWidth >= 768 && window.innerWidth < 1200 ? i = d : i = m; let u = new google.maps.Map(e, { zoom: 17, center: i, mapId: "1406e53bf9ae68ff", disableDefaultUI: !0, options: { gestureHandling: "cooperative" } }), l = { main: { icon: "/dist/images/map-icons/" + "marker.svg" } }, s = [{ position: new google.maps.LatLng(49.412402, 18.56988), type: "main", title: "Penzi\xF3n Kriv\xE1\u0148" }], o = new google.maps.InfoWindow({ content: '<div class="map__widnow"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8gNB43uu0kQeLv784HwPOFhVMiAPwJkNmAGAQsgqfIADJS8yg0OVrJiSZCo0LQqhhR0&usqp=CAU" alt="Penzi\xF3n Kriv\xE1\u0148" loading="lazy"></img><address><strong>Penzi\xF3n Kriv\xE1\u0148</strong><br>Dub\xE1\u010Dovci 509, 023 21 Kor\u0148a<br>Slovensko</address></div>', ariaLabel: "Penzi\xF3n Kriv\xE1\u0148" }), t = () => { o.close() }; for (let a = 0; a < s.length; a++) { let r = new google.maps.Marker({ position: s[a].position, icon: l[s[a].type].icon, map: u }); r.addListener("click", () => { o.open({ anchor: r, map: u }) }) } window.addEventListener("click", a => { e.contains(a.target) || t() }), u.addListener("click", () => { t() }) } var T = () => { let e = document.getElementById("themeBtn"), i = window.matchMedia("(prefers-color-scheme: dark)"), c = localStorage.getItem("theme"), d = document.body, m = c || "light"; function u() { i.matches ? (d?.classList.toggle("light-theme"), m = d?.classList.contains("light-theme") || !1 ? "light" : "dark") : (d?.classList.toggle("dark-theme"), m = d?.classList.contains("dark-theme") || !1 ? "dark" : "light"), localStorage.setItem("theme", m), g() } function g() { e?.classList.toggle("theme-switch--light", m === "light"), e?.classList.toggle("theme-switch--dark", m === "dark") } function l() { e?.classList.remove("theme-switch--dark", "theme-switch--light"), m === "dark" ? (d?.classList.add("dark-theme"), e?.classList.add("theme-switch--dark")) : m === "light" && (d?.classList.add("light-theme"), e?.classList.add("theme-switch--light")) } e && e.addEventListener("click", u), l() }; var M = () => { let e = document.getElementById("guestList"), i = document.getElementById("guestsSelect"), c = document.getElementById("clearSelect"), d = () => { i.value.trim().length >= 1 ? c.style.display = "inline-block" : c.style.display = "none" }; i.addEventListener("input", () => { d() }); let m = () => { fetch("/scripts/guests.json").then(o => o.json()).then(o => { let { guests: t } = o; Array.isArray(t) ? t.forEach(a => { let r = document.createElement("option"); r.value = a.fullname, r.textContent = a.fullname, r.id = a.id, e.appendChild(r) }) : console.error("Invalid JSON data: not an array") }).then(() => u()).then(() => g()).catch(o => console.error(o)) }, u = () => { let o = document.querySelector(".table--main"), t = document.querySelector(".table--1"), a = document.querySelector(".table--2"), r = document.querySelector(".table--3"), v = e.querySelectorAll("option"); for (let n = 1; n <= v.length; n++) { let h = document.createElement("button"), p = v[n - 1]; h.classList.add("chair"), h.setAttribute("data-number", `${n}`), h.setAttribute("title", p.value), n <= 7 ? o.appendChild(h) : n > 7 && n <= 27 ? t.appendChild(h) : n > 27 && n <= 47 ? a.appendChild(h) : r.appendChild(h) } }, g = () => { document.querySelectorAll(".chair").forEach(t => { t.addEventListener("click", a => { s(a), d() }) }) }; m(), i.addEventListener("input", () => { let o = document.querySelectorAll(".chair"), t = e.querySelectorAll("option"), a = i.value.toLowerCase(); o.forEach(r => { r.classList.remove("chair--selected") }); for (let r = 0; r < t.length; r++)if (t[r].value.toLowerCase().startsWith(a)) { o[r].classList.add("chair--selected"); break } }); let l = () => { document.querySelectorAll(".chair").forEach(t => { t.classList.remove("chair--selected") }) }; c.addEventListener("click", () => { i.value = "", c.style.display = "none", l() }); let s = o => { l(); let t = o.target, a = t.getAttribute("data-number"), r = e.querySelectorAll("option"); for (let v = 0; v < r.length; v++) { let n = r[v]; if (n?.value && n?.id?.toString() === a) { i.value = n.value, t.classList.add("chair--selected"); break } } } }; document.addEventListener("DOMContentLoaded", () => { T(), E(), y(), w(), b(), f(), S(), M() });
//# sourceMappingURL=init.js.map
