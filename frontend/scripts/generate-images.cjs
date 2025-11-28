// Génère 17 SVG placeholders nommés art-1.svg ... art-17.svg
// Usage: node generate-images.js
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'img');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const names = [
  "Boucherie Dumont","Au pain chaud","Chocolaterie Labbé","Traiteur Truchon",
  "Orville Salmons","Mont Blanc Électricité","Boutot & fils","Vallis Bellemare",
  "Claude Quinn","Amitee Lécuyer","Ernest Carignan","Royden Charbonneau",
  "Leala Dennis","C'est Sup'hair","Le monde des fleurs","Valérie Laderoute","CM Graphisme"
];

const colors = [
  "#0B5FFF","#0066A6","#004E7C","#007A5A","#A64D79","#F5A623",
  "#D57C00","#5C6BC0","#7B1FA2","#00897B","#C62828","#2E7D32",
  "#1976D2","#FF7043","#8E24AA","#AD1457","#3949AB"
];

for (let i=0;i<names.length;i++) {
  const id = i+1;
  const text = names[i];
  const color = colors[i % colors.length];
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="100%" height="100%" fill="${color}" rx="12"/>
    <g transform="translate(40,40)">
      <rect x="0" y="0" width="720" height="520" fill="rgba(255,255,255,0.08)" rx="10"/>
      <text x="360" y="270" font-family="Helvetica, Arial, sans-serif" font-size="36" fill="#fff" text-anchor="middle" font-weight="700">${text}</text>
      <text x="360" y="310" font-family="Helvetica, Arial, sans-serif" font-size="18" fill="#fff" text-anchor="middle">Artisan • ${text.split(' ')[0]}</text>
    </g>
  </svg>
  `;
  const filename = path.join(outDir, `art-${id}.svg`);
  fs.writeFileSync(filename, svg.trim());
  console.log("Wrote", filename);
}
console.log("Done — 17 images generated in", outDir);