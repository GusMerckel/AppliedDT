# IB DP Design Technology — Curriculum Website

A static website for the **IB DP Design Technology** new curriculum (first assessment 2027), built for G11 & G12 students at UWC Thailand.

## Folder Structure

```
index.html              ← Homepage with full navigation
css/
  style.css             ← Shared stylesheet (Aleo font, yellow/black theme)
js/
  nav.js                ← Navigation, mobile menu, sidebar scroll highlighting
topics/
  a1-1.html … c4-1.html ← 24 topic pages (all subtopics included)
ia/
  overview.html         ← IA Overview & Requirements
  topic.html            ← Choosing your IA Topic
  timeline.html         ← Timeline & Deadlines
  criterion-a.html      ← Criterion A: Identifying a need
  criterion-b.html      ← Criterion B: Conceptual design
  criterion-c.html      ← Criterion C: Prototype development
  criterion-d.html      ← Criterion D: Testing & evaluation
  criterion-e.html      ← Criterion E: Impact & sustainability
  exemplars.html        ← Exemplar Projects
  research.html         ← Research & Citation Guide
projects/
  brief-challenges.html ← Brief-Based Design Challenges
  case-studies.html     ← Case Study Analysis
  3d-printing.html      ← 3D Printing Projects
  laser-cutting.html    ← Laser Cutting Projects
  electronics.html      ← Electronics Projects
  structures.html       ← Structural Projects
  community.html        ← Community Design
  sustainability.html   ← Sustainability Challenges
```

## Deploying on GitHub Pages

1. Push all files to your GitHub repo — **keep the folder structure intact**
2. Go to **Settings → Pages**
3. Set Source: `main` branch, `/ (root)` folder
4. Your site will be live at `https://yourusername.github.io/your-repo-name/`

## Adding Google Slides Presentations

Each topic page has a presentation embed zone. To add yours:

1. Open your Google Slides
2. **File → Share → Publish to web → Embed**
3. Copy the `<iframe>` code
4. In the topic `.html` file, find the `presentation-placeholder` div and replace it:

```html
<!-- Replace this: -->
<div class="presentation-placeholder"> ... </div>

<!-- With your iframe: -->
<iframe src="https://docs.google.com/presentation/d/YOUR_ID/embed?start=false&loop=false"
        allowfullscreen></iframe>
```

## Adding Content to Pages

Every subtopic section has a `content-placeholder` div — replace it with your notes, embedded videos, images, or additional resources:

```html
<!-- Replace this: -->
<div class="content-placeholder">Add your notes...</div>

<!-- With your content: -->
<p>Your teaching notes here...</p>
<img src="../images/your-diagram.png" alt="Diagram description"/>
```

## Design

- **Font:** Aleo (Google Fonts)
- **Colours:** Black `#111111` on Yellow `#FFD600`
- **HL-only topics:** marked with orange `HL` badges
- **No frameworks, no build tools** — pure HTML/CSS/JS, works offline

## Curriculum Map

New IB DP Design Technology — first assessment 2027

| Strand | Theme 1: People | Theme 2: Process | Theme 3: Product | Theme 4: Production |
|--------|----------------|-----------------|-----------------|-------------------|
| **A** Theory | A1.1 | A2.1, A2.2 | A3.1–A3.4 | A4.1 HL |
| **B** Practice | B1.1 | B2.1, B2.2 | B3.1–B3.4 | B4.1 HL |
| **C** Context | C1.1–C1.3 | C2.1, C2.2 | C3.1, C3.2 | C4.1 HL |
