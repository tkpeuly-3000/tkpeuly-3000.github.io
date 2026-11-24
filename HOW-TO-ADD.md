# How to add new things to your website

You never edit code. Just upload files to the right folder on GitHub
(Add file → Upload files → Commit changes). The site picks them up in about 1 to 2 minutes.

To make a new folder on GitHub: Add file → Upload files, then drag in a whole folder
from your computer. GitHub keeps the folder name.

---

## New CAD design → `cad/`

Make a folder for the design and put the pictures inside:

```
cad/
  2026-12-01 gearbox/
    1.png          ← first picture is the cover
    2.png
    drawing.pdf    ← optional, adds an "Open drawing" button
    info.txt       ← optional
```

* Folder name becomes the title ("2026-12-01 gearbox" → "Gearbox").
* Start the folder name with the date (year-month-day) so the newest shows first.
* Name a picture `cover.png` if you want that one to be the cover.

**info.txt** (every line is optional):

```
title: Planetary Gearbox
type: Assembly
software: SolidWorks
featured: yes
description: Three stage planetary gearbox with a 64:1 ratio.
```

* `type`: Part, Assembly or Drawing (makes the filter buttons)
* `featured: yes` puts it on the main page with a ★. Leave it out to put it under "Show more".

---

## New certificate → `certificates/`

Upload the PDF or image, named like this (two underscores between parts):

```
Name of certificate__Who gave it__Month Year.pdf
CSWA__Dassault Systemes__Nov 2026.pdf
```

**Star your best ones (main page shows only starred):**

* Put the file inside `certificates/featured/` instead of `certificates/`

```
certificates/
  featured/
    CSWA__Dassault Systemes__Nov 2026.pdf      ← ★ on the main page
  Excel Basics__LinkedIn Learning__Dec 2026.pdf  ← under "Show more"
```

* Keep about 3 or 4 starred. Everything else waits under the "Show more certificates" button.
* To unstar one, move it out of `featured/` (or delete it there and upload it to `certificates/`).
* If the certificate is already listed on the site, the file just attaches to it as a
  "View certificate" button instead of making a second card.

---

## New app or website → `apps/`

```
apps/
  degree-flow/
    screenshot.png
    info.txt
```

**info.txt**:

```
title: Degree Flow
description: Turns a degree flowchart into a draggable semester plan.
tags: Web app, JavaScript
link: https://tkpeuly-3000.github.io/degree-flow/
```

---

## New big project → `projects/`

```
projects/
  bionic-hand/
    cover.jpg
    2.jpg
    info.txt
```

**info.txt**:

```
title: EMG Bionic Hand
label: Personal project
status: Complete
tags: SolidWorks, ESP32, Python
description: A 3D printed hand that opens and closes with muscle signals.
link: https://github.com/tkpeuly-3000/bionic-hand
```

`status` can be anything: Complete, Building now, In design, 1st Place...
"Building now" gets a pulsing dot, and "Place" or "Award" gets a gold badge.

---

## Still in data.js (edit only when they change)

Your intro, about text, quick facts, skills, experience and the RoadRebound spotlight.

## Resume

Your resume is not posted on the site. The "Request resume" buttons open your LinkedIn profile,
so people message you there and you choose who gets it.
