/* DATOS : edita aquí con la información real del equipo */
const EQUIPO = "Taller Libre";
const MIEMBROS = [
    ["Carlos Ricardo Martínez", "Coordinador general", "img/carlos.jpeg"],
    ["Zoila Elizabeth Alejo", "Responsable de contenido", "img/zoila.jpeg"],
    ["Jonathan Ely Saravia", "Editor de video", "img/ely.jpeg"],
    ["Ali Nahum Hernández", "Editor de video", "img/ali nahum.jpeg"],
    ["Jorge Alexander Aguillón", "Programador Front-end", "img/jorge.jpeg"],
    ["José Moisés Escalante", "Diseñador UI/UX", "img/jose moises.jpeg"],
    ["Fátima Anahí Vásquez", "Diseñadora UI/UX", "img/fatima.jpeg"],
    ["César Gabriel Alvarado", "Diseñador UI/UX", "img/gabriel_formal.jpeg"],
    ["Moisés Iván Claros", "Programador Front-end", "img/moises ivan.jpeg"]
];

const COLORES = {GIMP:"#C6A15B",Inkscape:"#D9BF8A",Audacity:"#B98A93",OpenShot:"#E3CFA6"};
// tipo: imagen | audio | video. Para audio pon la ruta del MP3; para video, la URL embed (YouTube/Drive) o ruta.
const TRABAJOS = [
  {t:"El tiempo cura todo",cat:"GIMP",tipo:"imagen",img:"img/tiempo-cura-todo.jpg",autor:"Carlos Martínez",d:"Ilustración con efectos de luz neón y texto, armada por capas. Aprendimos modos de fusión y brillo.",link:"img/tiempo-cura-todo.jpg"},
  {t:"Doble exposición: Ánima",cat:"GIMP",tipo:"imagen",img:"img/doble-exposicion.jpg",pos:"center 30%",autor:"Jorge Aguillón",d:"Retrato fusionado con un bosque mediante máscaras de capa. Aprendimos a combinar dos fotografías.",link:"img/doble-exposicion.jpg"},
  {t:"Mirada cósmica",cat:"GIMP",tipo:"imagen",img:"img/mirada-cosmica.jpg",autor:"Jorge Aguillón",d:"Fotomontaje de un ojo con una galaxia en la pupila. Aprendimos selecciones y composición.",link:"img/mirada-cosmica.jpg"},
  {t:"Dibujo vectorial",cat:"Inkscape",tipo:"imagen",img:"img/dibujo.svg",pos:"center top",autor:"Ely Saravia",d:"Ilustración vectorial hecha con formas y trazados. Aprendimos a trabajar con nodos y colores.",link:"img/dibujo.svg"},
  {t:"Diseño vectorial",cat:"Inkscape",tipo:"imagen",img:"img/inkscape-jorge.svg",pos:"center top",autor:"Jorge Aguillón",d:"Diseño vectorial en Inkscape. Aprendimos a construir gráficos que no pierden calidad al escalar.",link:"img/inkscape-jorge.svg"},
  {t:"Composición vectorial: Lámina",cat:"Inkscape",tipo:"imagen",img:"img/Lamina2Zoila_Alejo.svg",pos:"center top",autor:"Zoila Alejo",d:"Composición gráfica desarrollada en Inkscape. Aprendimos a estructurar elementos vectoriales, tipografía y color.",link:"img/Lamina2Zoila_Alejo.svg"},
  {t:"Cartel: La invasión invisible",cat:"Inkscape",tipo:"documento",img:"img/invasion invisible.png",pos:"center top",autor:"Ali Hernández",d:"Cartel informativo diseñado con gráficos vectoriales. Aprendimos maquetación, jerarquía visual y exportación vectorial.",link:"img/cartel_la_invasion_invisible_editable (2).pdf"},
  {t:"Cuña radial: Ofertas académicas",cat:"Audacity",tipo:"audio",src:"audio/cuna-radial-ofertas-academicas.mp3",dur:"5:00",autor:"Carlos Martínez, Zoila Alejo, Ely Saravia, Ali Hernández y Jorge Aguillón",d:"Cuña radial con voz y música de fondo. Aprendimos a mezclar pistas y ajustar volumen.",link:"audio/cuna-radial-ofertas-academicas.mp3"},
  {t:"El Carnaval de San Miguel: reportaje",cat:"Audacity",tipo:"audio",src:"audio/carnaval-san-miguel-reportaje.mp3",dur:"5:47",autor:"Moisés Escalante y Ely Saravia",d:"Reportaje de audio sobre el carnaval. Aprendimos a cortar, ordenar y limpiar grabaciones.",link:"audio/carnaval-san-miguel-reportaje.mp3"},
  {t:"Video navideño (versión final)",cat:"OpenShot",tipo:"video",src:"video/video-navideno-5min-final.mp4",img:"img/poster-video-navideno-final.jpg",dur:"5:00",autor:"Ali Hernández",d:"Versión final de 5 minutos con ajustes de edición y exportación para web.",link:"video/video-navideno-5min-final.mp4"},
  {t:"Cuña Radial: Ofertas académicas",cat:"OpenShot",tipo:"video",src:"video/Cuna_Radial_UNAB.mp4  ",img:"img/miniatura_ofertas_academicas.png",dur:"5:01",autor:"Carlos Martínez, Zoila Alejo, Ely Saravia, Ali Hernández y Jorge Aguillón",d:"Promoción de ofertas academicas de la Universidad Dr.Andres Bello. Aprendimos mezclar video y audio en OpenShot",link:"video/Cuna_Radial_UNAB.mp4"}
];

/* Navegacion*/
document.getElementById("navNombre").textContent = EQUIPO;
document.getElementById("heroNombre").textContent = EQUIPO;
const burger = document.getElementById("burger"), menu = document.getElementById("menu");
burger.onclick = () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); };
menu.querySelectorAll("a").forEach(a => a.onclick = () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); });

// resalta el enlace de la sección visible
const links = [...menu.querySelectorAll("a")];
const obs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
}), {rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("main section").forEach(s => obs.observe(s));

/* Equipo */
const tonos = Object.values(COLORES);
document.getElementById("team").innerHTML = MIEMBROS.map(([n, r, foto], i) => {
  const ini = n.split(" ").slice(0, 2).map(p => p[0]).join("");
  const av = foto
    ? `<img class="avatar" src="${foto}" alt="Foto de ${n}" loading="lazy">`
    : `<div class="avatar" style="background:${tonos[i % tonos.length]}">${ini}</div>`;
  return `<article class="member">${av}<h3>${n}</h3><p>${r}</p></article>`;
}).join("");
// Fotos: agrega la ruta como tercer valor de cada integrante, ej. ["Ana López","Rol","fotos/ana.jpg"]

/* Portafolio Y Filtro*/
const cats = ["Todos", "GIMP", "Inkscape", "Audacity", "OpenShot"];
const filters = document.getElementById("filters"), grid = document.getElementById("grid"), empty = document.getElementById("empty");
filters.innerHTML = cats.map((c, i) => `<button data-c="${c}" aria-pressed="${i === 0}">${c}</button>`).join("");
function pintar(cat) {
  const lista = TRABAJOS.map((w, i) => ({...w, i})).filter(w => cat === "Todos" || w.cat === cat);
  grid.innerHTML = lista.map(w => `<button class="work" data-i="${w.i}">
    <div class="thumb" style="background:${COLORES[w.cat]}">${w.img ? `<img src="${w.img}" alt="Vista previa de ${w.t}" loading="lazy" style="object-position:${w.pos || "center"}">` : w.cat}</div>
    <div class="info"><h3>${w.t}</h3><p>${w.d.slice(0, 70)}${w.d.length > 70 ? "…" : ""}</p></div></button>`).join("");
  empty.hidden = lista.length > 0;
}
filters.onclick = e => {
  const b = e.target.closest("button"); if (!b) return;
  filters.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b));
  pintar(b.dataset.c);
};
pintar("Todos");

/* Modal*/
const modal = document.getElementById("modal");
let ultimo = null;
grid.onclick = e => {
  const c = e.target.closest(".work"); if (!c) return;
  const w = TRABAJOS[c.dataset.i]; ultimo = c;
  mTitulo.textContent = w.t; mDesc.textContent = w.d; mTool.textContent = w.cat; mAutor.textContent = w.autor;
  mThumb.hidden = true;
  mThumb.style.display = "none";
  mThumb.textContent = "";
  mLink.href = w.link || "#";
  let media = "";
  if (w.tipo === "imagen") media = `<img class="vista" src="${w.img}" alt="${w.t}">`;
  if (w.tipo === "documento") media = `<img class="vista" src="${w.img}" alt="${w.t}">`;
  if (w.tipo === "audio") { mThumb.hidden = false; mThumb.style.display = ""; mThumb.textContent = w.cat; mThumb.style.background = COLORES[w.cat];
    media = `<p><strong>Duración:</strong> ${w.dur || "—"}</p><audio controls preload="none" src="${w.src}"></audio>`; }
  if (w.tipo === "video") media = `<video controls preload="none" poster="${w.img || ""}" src="${w.src}"></video>`;
  mMedia.innerHTML = media;
  modal.classList.add("open"); document.body.style.overflow = "hidden"; mClose.focus();
};
function cerrar() {
  modal.classList.remove("open"); document.body.style.overflow = ""; mMedia.innerHTML = ""; // detiene audio/video
  if (ultimo) ultimo.focus();
}
mClose.onclick = cerrar;
modal.onclick = e => { if (e.target === modal) cerrar(); };
document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open")) cerrar(); });