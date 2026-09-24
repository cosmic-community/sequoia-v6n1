const fs = require('fs');
const path = require('path');

function findHtmlFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findHtmlFiles(fullPath, files);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

function injectScript(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  const scriptTag = '<script src="/dashboard-console-capture.js"></script>';

  if (html.includes('dashboard-console-capture.js')) {
    return;
  }

  if (html.includes('</head>')) {
    html = html.replace('</head>', `${scriptTag}</head>`);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Injected console capture script into ${filePath}`);
  }
}

function main() {
  const candidateDirs = [
    path.join(process.cwd(), '.next', 'server', 'pages'),
    path.join(process.cwd(), '.next', 'server', 'app'),
    path.join(process.cwd(), 'out'),
  ];

  let totalFiles = 0;
  for (const dir of candidateDirs) {
    const files = findHtmlFiles(dir);
    for (const file of files) {
      injectScript(file);
      totalFiles++;
    }
  }

  console.log(`Console capture injection complete. Processed ${totalFiles} file(s).`);
}

main();