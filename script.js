{
  const $ = (id) => document.getElementById(id);
  let LOADED = false;

  /* ---------- HERO ---------- */
  $("tagline").innerHTML = SITE.tagline.join(" &nbsp;·&nbsp; ");
  $("firstName").textContent = SITE.firstName;
  $("lastName").textContent = SITE.lastName;
  $("subtitle").textContent = SITE.subtitle;
  $("grad").textContent = SITE.gradLabel;
  $("intro").textContent = SITE.intro;
  $("photo").src = SITE.photo;
  document.querySelectorAll(".js-resume").forEach((a) => (a.href = SITE.linkedin));

  /* ---------- ABOUT ---------- */
  $("aboutHeading").textContent = ABOUT.heading;
  $("aboutText").innerHTML = ABOUT.paragraphs.map((p) => `<p>${p}</p>`).join("");
  $("focus").innerHTML = ABOUT.focus.map((f) => `<li>${f}</li>`).join("");
  $("facts").innerHTML = FACTS.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");

  /* ---------- PROJECTS ---------- */
  const glyphs = [
    // road
    `<path d="M120 230 L180 70 M280 230 L220 70" /><path d="M200 220v-25 M200 175v-22 M200 135v-18 M200 102v-14 M200 80v-8" stroke-dasharray="0"/>
     <circle cx="200" cy="60" r="10"/>`,
    // finger
    `<rect x="170" y="150" width="60" height="70" rx="22"/><rect x="174" y="100" width="52" height="46" rx="20"/>
     <rect x="178" y="58" width="44" height="38" rx="18"/><path d="M200 225v-170" stroke-dasharray="4 6"/>
     <circle cx="200" cy="148" r="4"/><circle cx="200" cy="98" r="4"/>`,
    // brace blocks
    `<rect x="130" y="70" width="60" height="44" rx="6"/><rect x="210" y="70" width="60" height="44" rx="6"/>
     <rect x="130" y="128" width="60" height="44" rx="6"/><rect x="210" y="128" width="60" height="44" rx="6"/>
     <rect x="130" y="186" width="140" height="40" rx="6"/>
     <circle cx="148" cy="70" r="6"/><circle cx="172" cy="70" r="6"/><circle cx="228" cy="70" r="6"/><circle cx="252" cy="70" r="6"/>`,
  ];
  const placeholder = (i, num) => `
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><pattern id="g${i}" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M20 0H0V20" fill="none" stroke="#4d382c" stroke-width="1"/></pattern></defs>
      <rect width="400" height="300" fill="url(#g${i})"/>
      <g fill="none" stroke="#B8987A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${glyphs[i % glyphs.length]}</g>
      <text x="380" y="282" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="12" fill="#B8987A">FIG. ${num}</text>
    </svg>`;

  if (SPOTLIGHT.show) {
    $("spotlight").innerHTML = `
      <button class="spot-photo" id="spotPhoto" aria-label="View winning photo"><img src="${SPOTLIGHT.photo}" alt="${SPOTLIGHT.title} award photo" loading="lazy"></button>
      <div class="spot-text">
        <span class="spot-badge"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h8v4a4 4 0 0 1-8 0zM8 5H4a3 3 0 0 0 4 4M16 5h4a3 3 0 0 1-4 4M12 11v5M8 21h8M10 16h4v5h-4z"/></svg>${SPOTLIGHT.badge}</span>
        <h3>${SPOTLIGHT.title}</h3>
        <p>${SPOTLIGHT.text}</p>
        <p class="spot-meta">${SPOTLIGHT.team}<br>${SPOTLIGHT.where}</p>
      </div>`;
    $("spotPhoto").addEventListener("click", () => openLb([SPOTLIGHT.photo], SPOTLIGHT.title, 0));
  } else $("spotlight").remove();

  const renderProjects = () => {
  $("projectList").innerHTML = PROJECTS.map((p, i) => {
    const live = /building/i.test(p.status) ? "live" : "";
    const win = /place|winner|award/i.test(p.status) ? "win" : "";
    const imgs = p.images || [];
    const media = imgs.length ? `<img src="${imgs[0]}" alt="${p.title}" loading="lazy">` : placeholder(i, p.num);
    const views = imgs.length > 1 ? `<span class="proj-views">${imgs.length} images</span>` : "";
    const open = p.link ? `<a href="${p.link}" target="_blank" rel="noopener" style="text-decoration:none">` : "";
    const close = p.link ? "</a>" : "";
    return `${open}<article class="proj reveal${LOADED ? " in" : ""}">
      <div class="proj-img ${imgs.length ? "zoom" : ""}" data-p="${i}">${media}<span class="status ${live} ${win}">${p.status}</span>${views}</div>
      <div class="proj-body">
        <span class="proj-num">${p.num}</span>
        <h3>${p.title}</h3>
        <p class="proj-label">${p.label}</p>
        <p class="desc">${p.description}</p>
        <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      </div></article>${close}`;
  }).join("");

  $("projectList").querySelectorAll(".proj-img.zoom").forEach((d) => d.addEventListener("click", (e) => {
    e.preventDefault(); const p = PROJECTS[+d.dataset.p]; openLb(p.images, p.title, 0);
  }));

  };
  renderProjects();

  const renderOthers = () => {
  $("otherList").innerHTML = OTHER_PROJECTS.map((o, i) => {
    const thumb = o.image ? `<button class="other-thumb" data-o="${i}" aria-label="View ${o.title} screenshot"><img src="${o.image}" alt="${o.title} screenshot" loading="lazy"></button>` : "";
    const tags = o.tags && o.tags.length ? `<div class="tags">${o.tags.map((t) => `<span>${t}</span>`).join("")}</div>` : "";
    const action = o.link
      ? `<a class="other-open" href="${o.link}" target="_blank" rel="noopener">Open app <span class="arrow">↗</span></a>`
      : `<span class="other-open off">Link coming soon</span>`;
    return `<div class="other reveal${LOADED ? " in" : ""} ${o.image ? "has-thumb" : ""}">${thumb}
      <div class="other-body"><h4>${o.title}</h4><p>${o.description}</p>${tags}${action}</div></div>`;
  }).join("");
  $("otherList").querySelectorAll(".other-thumb").forEach((b) => b.addEventListener("click", () => {
    const o = OTHER_PROJECTS[+b.dataset.o]; openLb([o.image], o.title, 0);
  }));
  };
  renderOthers();

  /* ---------- CAD WORK ---------- */
  const cadSketch = (i) => {
    const shapes = [
      `<rect x="150" y="150" width="100" height="90" rx="30"/><rect x="156" y="88" width="88" height="58" rx="26"/><rect x="162" y="40" width="76" height="44" rx="22"/>
       <circle cx="200" cy="148" r="5"/><circle cx="200" cy="86" r="5"/><path d="M200 240V40" stroke-dasharray="5 6"/>
       <path d="M120 40v200M114 40h12M114 240h12"/><text x="108" y="145" transform="rotate(-90 108 145)">82.0</text>`,
      `<rect x="110" y="70" width="80" height="60" rx="8"/><rect x="210" y="70" width="80" height="60" rx="8"/>
       <rect x="110" y="150" width="180" height="60" rx="8"/><circle cx="135" cy="70" r="9"/><circle cx="165" cy="70" r="9"/>
       <circle cx="235" cy="70" r="9"/><circle cx="265" cy="70" r="9"/><path d="M110 236h180M110 230v12M290 230v12"/><text x="200" y="256" text-anchor="middle">40.0 × 4</text>`,
    ];
    return `<svg viewBox="0 0 400 290" aria-hidden="true"><defs><pattern id="cg${i}" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M16 0H0V16" fill="none" stroke="#E3D6C3"/></pattern></defs>
      <rect width="400" height="290" fill="url(#cg${i})"/><g fill="none" stroke="#7A5240" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" font-family="JetBrains Mono, monospace" font-size="11">${shapes[i % shapes.length]}</g></svg>`;
  };
  let cadType = "All", cadAll = false;
  const CAD_SHOW = 6;
  const renderCad = () => {
    let list = CAD_PROJECTS.map((c, i) => ({ ...c, i })).filter((c) => cadType === "All" || c.type === cadType).reverse();
    const starred = list.filter((c) => c.featured), rest = list.filter((c) => !c.featured);
    list = [...starred, ...rest];
    const shown = starred.length ? starred.length : Math.min(list.length, CAD_SHOW);
    $("cadMore").hidden = cadAll || list.length <= shown;
    $("cadMore").textContent = `Show ${list.length - shown} more design${list.length - shown === 1 ? "" : "s"}`;
    if (!cadAll) list = list.slice(0, shown);
    $("cadList").innerHTML = list.map((c) => {
      const has = c.images && c.images.length;
      const media = has ? `<img src="${c.images[0]}" alt="${c.title} CAD model" loading="lazy">` : cadSketch(c.i);
      const count = has && c.images.length > 1 ? `<span class="cad-count">${c.images.length} views</span>` : "";
      const status = c.status ? `<span class="cad-status">${c.status}</span>` : "";
      const star = c.featured ? `<span class="cad-star" title="Featured design">★ Featured</span>` : "";
      const file = c.file ? `<a class="cad-file" href="${c.file}" target="_blank" rel="noopener">Open drawing ↗</a>` : "";
      return `<article class="cad-card reveal in${c.featured ? " featured" : ""}">
        <button class="cad-media" data-i="${c.i}" ${has ? "" : "disabled"} aria-label="View ${c.title} images">${media}${status}${count}</button>${star}
        <div class="cad-info"><h3>${c.title}</h3><p>${c.description}</p>${file}</div>
        <div class="cad-block"><span><small>Type</small>${c.type}</span><span><small>Software</small>${c.software}</span><span><small>No.</small>CAD ${String(c.i + 1).padStart(2, "0")}</span></div>
      </article>`;
    }).join("") || `<p class="cad-empty">No ${cadType.toLowerCase()} models yet.</p>`;
    $("cadList").querySelectorAll(".cad-media:not([disabled])").forEach((b) => b.addEventListener("click", () => { const c = CAD_PROJECTS[+b.dataset.i]; openLb(c.images, c.title, 0); }));
  };
  const buildCadFilter = () => {
    cadType = "All";
    const types = ["All", ...new Set(CAD_PROJECTS.map((c) => c.type))];
    $("cadFilter").innerHTML = types.length > 2 ? types.map((t) => `<button class="${t === "All" ? "on" : ""}" data-t="${t}">${t}</button>`).join("") : "";
    $("cadFilter").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
      cadType = b.dataset.t;
      $("cadFilter").querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
      renderCad();
    }));
  };
  buildCadFilter();
  $("cadMore").addEventListener("click", () => { cadAll = !cadAll; renderCad(); if (cadAll) $("cadMore").hidden = false, $("cadMore").textContent = "Show featured only"; else $("cad").scrollIntoView({ behavior: "smooth" }); });
  renderCad();

  /* lightbox */
  const lb = $("lightbox"); let lbList = [], lbTitle = "", lbIdx = 0;
  const showLb = () => {
    $("lbImg").src = lbList[lbIdx]; $("lbImg").alt = lbTitle;
    $("lbCap").textContent = lbList.length > 1 ? `${lbTitle} · ${lbIdx + 1} of ${lbList.length}` : lbTitle;
    $("lbPrev").hidden = $("lbNext").hidden = lbList.length < 2;
  };
  function openLb(list, title, j) { lbList = list; lbTitle = title; lbIdx = j; showLb(); lb.hidden = false; document.body.style.overflow = "hidden"; }
  const closeLb = () => { lb.hidden = true; document.body.style.overflow = ""; };
  const step = (d) => { const n = lbList.length; lbIdx = (lbIdx + d + n) % n; showLb(); };
  $("lbClose").addEventListener("click", closeLb);
  $("lbPrev").addEventListener("click", () => step(-1));
  $("lbNext").addEventListener("click", () => step(1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb(); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1);
  });

  /* ---------- EXPERIENCE ---------- */
  $("expList").innerHTML = EXPERIENCE.map((e) => `
    <li class="reveal"><span class="exp-dates">${e.dates}</span><h3>${e.role}</h3>
    <p class="exp-org">${e.org}</p><ul>${e.points.map((p) => `<li>${p}</li>`).join("")}</ul></li>`).join("");

  const ICONS = {
    cube: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>',
    printer: '<path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8-1.3-1.3a4 4 0 0 1-5-5L13 2l1.7 1.7z"/><path d="M4 20l5-5"/>',
    people: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2A5 5 0 0 1 21.5 19"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
    code: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  };
  $("skillList").innerHTML = SKILLS.map((g, i) => `
    <article class="skill-card reveal">
      <div class="skill-head"><span class="skill-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[g.icon] || ICONS.gear}</svg></span>
        <div><h3>${g.group}</h3>${g.note ? `<small>${g.note}</small>` : ""}</div>
        <span class="skill-num">${String(i + 1).padStart(2, "0")}</span></div>
      <div class="chips">${g.items.map((x) => `<span>${x}</span>`).join("")}</div>
    </article>`).join("");

  const certIcon = `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="20" r="13"/><circle cx="24" cy="20" r="7"/><path d="M16 30l-4 14 7-4 5 6 2-12M32 30l4 14-7-4-5 6"/></svg>`;
  let certAll = false;
  const CERT_SHOW = 4;
  const renderCerts = () => {
    const starred = CERTIFICATIONS.filter((c) => c.featured), rest = CERTIFICATIONS.filter((c) => !c.featured);
    const ordered = [...starred, ...rest];
    const shownCount = starred.length ? starred.length : Math.min(ordered.length, CERT_SHOW);
    const list = certAll ? ordered : ordered.slice(0, shownCount);
    const hidden = ordered.length - shownCount;
    $("certList").innerHTML = list.map((c) => {
      const url = c.file || c.link;
      const btn = url
        ? `<a class="cert-btn" href="${url}" target="_blank" rel="noopener">${c.file ? "View certificate" : "Verify"} ↗</a>`
        : `<span class="cert-btn off">Certificate on request</span>`;
      const star = c.featured ? `<span class="cert-star">★ Featured</span>` : "";
      return `<article class="cert reveal in${c.featured ? " featured" : ""}">${star}
        <div class="cert-top"><span class="cert-icon">${certIcon}</span><span class="cert-date">${c.date}</span></div>
        <h3>${c.name}</h3>
        <p class="cert-issuer">${c.issuer}</p>
        ${c.credentialId ? `<p class="cert-id">Credential ID · ${c.credentialId}</p>` : ""}
        ${btn}</article>`;
    }).join("") + (certAll || hidden <= 0 ? `<div class="cert cert-next reveal in"><span class="cert-plus">+</span><p>More on the way</p></div>` : "");
    const more = $("certMore");
    more.hidden = hidden <= 0;
    more.textContent = certAll ? "Show featured only" : `Show ${hidden} more certificate${hidden === 1 ? "" : "s"}`;
  };
  $("certMore").addEventListener("click", () => {
    certAll = !certAll; renderCerts();
    if (!certAll) $("certificates").scrollIntoView({ behavior: "smooth" });
  });
  renderCerts();

  /* ---------- CONTACT + FOOTER ---------- */
  const mail = "mailto:" + SITE.email;
  $("emailBtn").href = mail; $("fEmail").href = mail;
  $("emailText").textContent = SITE.email;
  $("linkedinBtn").href = SITE.linkedin; $("heroLinkedin").href = SITE.linkedin; $("fLinkedin").href = SITE.linkedin;
  $("fGithub").href = SITE.github;
  $("year").textContent = new Date().getFullYear();

  /* ---------- MOBILE MENU ---------- */
  const menu = $("menu"), btn = $("menuBtn");
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    menu.classList.remove("open"); btn.classList.remove("open");
  }));

  /* ---------- GEAR TRACKER ---------- */
  const gearPath = (() => {
    const teeth = 8, cx = 50, cy = 50, rOut = 46, rIn = 36;
    let d = "";
    for (let i = 0; i < teeth; i++) {
      const a = (i / teeth) * Math.PI * 2, w = Math.PI / teeth;
      const pts = [[rIn, a - w * 0.9], [rOut, a - w * 0.45], [rOut, a + w * 0.45], [rIn, a + w * 0.9]];
      pts.forEach(([r, t], j) => {
        const x = (cx + r * Math.cos(t)).toFixed(1), y = (cy + r * Math.sin(t)).toFixed(1);
        d += (i === 0 && j === 0 ? "M" : "L") + x + " " + y + " ";
      });
    }
    return d + "Z M50 36 A14 14 0 1 0 50 64 A14 14 0 1 0 50 36 Z";
  })();

  const sections = [...document.querySelectorAll("main section[data-name]")];
  const gears = $("gears");
  gears.innerHTML = sections.map((s) => `
    <button class="gear-btn" data-target="${s.id}" aria-label="Go to ${s.dataset.name}">
      <svg viewBox="0 0 100 100"><path d="${gearPath}" fill-rule="evenodd"/></svg>
      <span class="tip">${s.dataset.name}</span>
    </button>`).join("");
  gears.querySelectorAll(".gear-btn").forEach((b) =>
    b.addEventListener("click", () => $(b.dataset.target).scrollIntoView({ behavior: "smooth" })));

  const setActive = (id) => {
    gears.querySelectorAll(".gear-btn").forEach((b) => b.classList.toggle("active", b.dataset.target === id));
    menu.querySelectorAll("a[href^='#']").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
  };
  const onScroll = () => {
    const mid = window.innerHeight * 0.4;
    let current = sections[0].id;
    sections.forEach((s) => { if (s.getBoundingClientRect().top <= mid) current = s.id; });
    setActive(current);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- HERO GEAR ---------- */
  const makeGear = () => {
    const c = 100, P = (r, t) => (c + r * Math.cos(t)).toFixed(2) + " " + (c + r * Math.sin(t)).toFixed(2);
    const teeth = 26, rOut = 98, rRoot = 88, pitch = (Math.PI * 2) / teeth;
    let d = "";
    for (let i = 0; i < teeth; i++) {
      const a = i * pitch;
      d += (i ? "L" : "M") + P(rRoot, a - pitch * 0.30) + " L" + P(rOut, a - pitch * 0.17) + " L" + P(rOut, a + pitch * 0.17) + " L" + P(rRoot, a + pitch * 0.30) + " ";
      d += "A" + rRoot + " " + rRoot + " 0 0 1 " + P(rRoot, a + pitch * 0.70) + " ";
    }
    d += "Z ";
    const spokes = 6, rA = 72, rB = 34, gap = 0.17;
    for (let k = 0; k < spokes; k++) {
      const t0 = (k / spokes) * Math.PI * 2 + gap, t1 = ((k + 1) / spokes) * Math.PI * 2 - gap;
      const g2 = gap * rA / rB * 0.55;
      d += "M" + P(rA, t0) + " A" + rA + " " + rA + " 0 0 1 " + P(rA, t1) + " L" + P(rB, t1 - g2 + gap) + " A" + rB + " " + rB + " 0 0 0 " + P(rB, t0 + g2 - gap) + " Z ";
    }
    d += `M${c + 15} ${c} A15 15 0 1 0 ${c - 15} ${c} A15 15 0 1 0 ${c + 15} ${c} Z`;
    return d;
  };
  const rimLine = `<circle cx="100" cy="100" r="79" fill="none" stroke="#EDE3D3" stroke-opacity=".18" stroke-width="1.2"/>
    <circle cx="100" cy="100" r="25" fill="none" stroke="#EDE3D3" stroke-opacity=".18" stroke-width="1.2"/>`;
  $("heroGear").innerHTML = `<svg viewBox="0 0 200 200"><path d="${makeGear()}" fill-rule="evenodd"/>${rimLine}</svg>`;
  const gearEl = $("heroGear").firstElementChild;
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let angle = 0, lastY = window.scrollY, lastT = performance.now();
  const spinGear = (t) => {
    const dt = Math.min(t - lastT, 50); lastT = t;
    const dy = window.scrollY - lastY; lastY = window.scrollY;
    angle += dt * 0.006 + dy * 0.25;
    gearEl.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(spinGear);
  };
  if (!still) requestAnimationFrame(spinGear);

  /* ---------- REVEAL ON SCROLL ---------- */
  document.querySelectorAll(".band > .eyebrow, .big, .card, .huge").forEach((el) => el.classList.add("reveal"));
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); revealObs.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

  /* ---------- AUTO LOAD FROM GITHUB FOLDERS ----------
     Reads the folder list of your GitHub repository, so new files you
     drop into cad/, certificates/ and projects/ show up by themselves. */
  const IMG = /\.(jpe?g|png|webp|gif)$/i;
  const nice = (name) => name.replace(/\.[^.]+$/, "").replace(/^\d{4}[-_ ]\d{2}([-_ ]\d{2})?[-_ ]*/, "")
    .replace(/[-_]+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase()).trim();
  const datePart = (name) => (name.match(/^(\d{4}[-_ ]\d{2}(?:[-_ ]\d{2})?)/) || [])[1] || "";
  const enc = (path) => path.split("/").map(encodeURIComponent).join("/");
  const readInfo = async (path) => {
    try {
      const r = await fetch(enc(path), { cache: "no-cache" });
      if (!r.ok) return {};
      const info = {};
      (await r.text()).split(/\r?\n/).forEach((line) => {
        const m = line.match(/^\s*([a-zA-Z]+)\s*:\s*(.*)$/);
        if (m) info[m[1].toLowerCase()] = m[2].trim();
      });
      return info;
    } catch { return {}; }
  };
  const yes = (v) => /^(yes|true|y|1|star|featured)$/i.test(v || "");
  const getTree = async () => {
    const key = "peuly-tree";
    try {
      const c = JSON.parse(sessionStorage.getItem(key) || "null");
      if (c && Date.now() - c.t < 5 * 60 * 1000) return c.paths;
    } catch {}
    const r = await fetch(`https://api.github.com/repos/${SITE.repo}/git/trees/${SITE.branch}?recursive=1`);
    if (!r.ok) throw new Error("GitHub " + r.status);
    const paths = (await r.json()).tree.filter((x) => x.type === "blob").map((x) => x.path);
    try { sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), paths })); } catch {}
    return paths;
  };
  const groupFolder = (paths, root) => {
    const groups = {}, loose = [];
    paths.filter((p) => p.startsWith(root + "/")).forEach((p) => {
      const rest = p.slice(root.length + 1), parts = rest.split("/");
      if (parts.length === 1) loose.push(p);
      else (groups[parts[0]] = groups[parts[0]] || []).push(p);
    });
    return { groups, loose };
  };
  const sortImgs = (list) => list.filter((p) => IMG.test(p))
    .sort((a, b) => (/\/cover\./i.test(b) - /\/cover\./i.test(a)) || a.localeCompare(b, undefined, { numeric: true }));

  const autoLoad = async () => {
    if (!SITE.repo || !(/github\.io$/.test(location.hostname) || /[?&]auto/.test(location.search))) return;
    let paths;
    try { paths = await getTree(); } catch (e) { console.warn("Auto load skipped:", e.message); return; }
    LOADED = true;

    /* CAD: cad/<design folder>/images + info.txt, or single images in cad/ */
    const cad = groupFolder(paths, "cad");
    const cadItems = [];
    for (const [folder, files] of Object.entries(cad.groups)) {
      const images = sortImgs(files);
      if (!images.length) continue;
      const info = files.some((f) => /\/info\.txt$/i.test(f)) ? await readInfo(`cad/${folder}/info.txt`) : {};
      const drawing = files.find((f) => /\.pdf$/i.test(f));
      cadItems.push({
        title: info.title || nice(folder), type: info.type || "Part", software: info.software || "SolidWorks",
        status: info.status || "", featured: yes(info.featured), description: info.description || "",
        images, file: info.file || drawing || "", sortKey: info.date || datePart(folder),
      });
    }
    sortImgs(cad.loose).forEach((f) => cadItems.push({
      title: nice(f.split("/").pop()), type: "Part", software: "SolidWorks", status: "", featured: false,
      description: "", images: [f], file: "", sortKey: datePart(f.split("/").pop()),
    }));
    if (cadItems.length) {
      cadItems.sort((a, b) => (b.sortKey || "").localeCompare(a.sortKey || "") || a.title.localeCompare(b.title));
      CAD_PROJECTS.length = 0;
      CAD_PROJECTS.push(...cadItems.reverse());
      buildCadFilter(); renderCad();
    }

    /* CERTIFICATES: certificates/Name__Issuer__Date.pdf (or .jpg/.png) */
    const certFiles = paths.filter((p) => /^certificates\/(featured\/)?[^/]+\.(pdf|jpe?g|png|webp)$/i.test(p));
    certFiles.forEach((f) => {
      const featured = /^certificates\/featured\//i.test(f);
      const base = f.split("/").pop().replace(/\.[^.]+$/, "");
      const parts = base.split("__").map((x) => x.replace(/[-_]+/g, " ").trim());
      const star = parts.some((x) => /^star$/i.test(x));
      const [name, issuer = "", date = ""] = parts.filter((x) => !/^star$/i.test(x));
      const match = CERTIFICATIONS.find((c) => c.file === f || c.name.toLowerCase() === name.toLowerCase());
      if (match) { if (!match.file) match.file = f; if (featured || star) match.featured = true; return; }
      CERTIFICATIONS.push({ name, issuer, date, credentialId: "", file: f, link: "", featured: featured || star });
    });
    if (certFiles.length) renderCerts();

    /* PROJECTS: projects/<project folder>/info.txt + images */
    const proj = groupFolder(paths, "projects");
    let added = 0;
    for (const [folder, files] of Object.entries(proj.groups).sort()) {
      if (PROJECTS.some((p) => p.folder === folder)) continue;
      const info = files.some((f) => /\/info\.txt$/i.test(f)) ? await readInfo(`projects/${folder}/info.txt`) : {};
      PROJECTS.push({
        folder, num: String(PROJECTS.length + 1).padStart(3, "0"), title: info.title || nice(folder),
        label: info.label || "", status: info.status || "Complete", description: info.description || "",
        tags: (info.tags || "").split(",").map((t) => t.trim()).filter(Boolean),
        images: sortImgs(files), link: info.link || "",
      });
      added++;
    }
    if (added) renderProjects();

    /* APPS: apps/<app folder>/info.txt + screenshot */
    const apps = groupFolder(paths, "apps");
    let appsAdded = 0;
    for (const [folder, files] of Object.entries(apps.groups).sort()) {
      const info = files.some((f) => /\/info\.txt$/i.test(f)) ? await readInfo(`apps/${folder}/info.txt`) : {};
      const title = info.title || nice(folder);
      if (OTHER_PROJECTS.some((o) => o.title.toLowerCase() === title.toLowerCase())) continue;
      OTHER_PROJECTS.push({
        title, description: info.description || "", link: info.link || "", image: sortImgs(files)[0] || "",
        tags: (info.tags || "").split(",").map((t) => t.trim()).filter(Boolean),
      });
      appsAdded++;
    }
    if (appsAdded) renderOthers();
  };
  autoLoad();
}
