// Generates the Open Graph share image (public/og.png, 1200x630) in the
// blueprint-maker style defined in DESIGN.md. Run with: node scripts/generate-og.mjs
import sharp from 'sharp';

const W = 1200;
const H = 630;
const BG = '#fbfbf7';
const INK = '#232433';
const MUTED = '#5b5c6b';
const GRID = '#e6e6de';
const LIME = '#c6f000';

// Blueprint grid lines every 28px.
let grid = '';
for (let x = 28; x < W; x += 28) {
  grid += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="${GRID}" stroke-width="1"/>`;
}
for (let y = 28; y < H; y += 28) {
  grid += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="${GRID}" stroke-width="1"/>`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${BG}"/>
  ${grid}
  <rect x="48" y="48" width="${W - 96}" height="${H - 96}" fill="none" stroke="${INK}" stroke-width="3"/>

  <rect x="96" y="104" width="392" height="46" fill="${LIME}"/>
  <text x="116" y="135" font-family="'Courier New', monospace" font-size="22" font-weight="700" letter-spacing="1.5" fill="${INK}">ASSOCIATION · NANTES · FR</text>

  <text x="94" y="330" font-family="'Helvetica Neue', Arial, sans-serif" font-size="140" font-weight="700" letter-spacing="-5" fill="${INK}">Naomakers</text>

  <text x="96" y="410" font-family="'Helvetica Neue', Arial, sans-serif" font-size="38" font-weight="500" fill="${MUTED}">On fait rayonner le numérique et la tech,</text>
  <text x="96" y="458" font-family="'Helvetica Neue', Arial, sans-serif" font-size="38" font-weight="500" fill="${MUTED}">à Nantes.</text>

  <line x1="96" y1="516" x2="${W - 96}" y2="516" stroke="${INK}" stroke-width="1.5"/>
  <text x="96" y="556" font-family="'Courier New', monospace" font-size="21" letter-spacing="1" fill="${INK}">HACKATHONS · MEETUPS · CONFÉRENCES · COMMUNAUTÉ</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('Wrote public/og.png');
