import { readFileSync } from 'fs';

// Simple PDF text extraction - looks for text between BT and ET markers
// and decodes basic PDF text strings
function extractTextFromPDF(buffer) {
  const text = buffer.toString('latin1');
  const lines = [];
  
  // Try to find text objects
  const textRegex = /\(([^)]*)\)/g;
  let match;
  while ((match = textRegex.exec(text)) !== null) {
    const decoded = match[1]
      .replace(/\\n/g, '\n')
      .replace(/\\r/g, '\r')
      .replace(/\\t/g, '\t')
      .replace(/\\\\/g, '\\')
      .replace(/\\([()])/g, '$1');
    if (decoded.trim() && decoded.length > 1 && !/^[\x00-\x1f]+$/.test(decoded)) {
      lines.push(decoded.trim());
    }
  }
  
  // Deduplicate and filter noise
  const seen = new Set();
  const filtered = lines.filter(l => {
    if (seen.has(l)) return false;
    if (l.length < 2) return false;
    if (/^[0-9.]+$/.test(l)) return false;
    seen.add(l);
    return true;
  });
  
  return filtered.join('\n');
}

const files = [
  'FB_Round_1.pdf',
  'colorPallet.pdf', 
  'fonts.pdf'
];

for (const file of files) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`FILE: ${file}`);
  console.log('='.repeat(60));
  try {
    const buffer = readFileSync(`f:/Amrit/2026 Projects/AI-driven Data Automation Platform/${file}`);
    const text = extractTextFromPDF(buffer);
    console.log(text || '(No extractable text found)');
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}
