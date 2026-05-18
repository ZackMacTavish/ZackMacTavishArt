const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const files = [
  'src/assets/BirdyBrooklyn.jpg',
  'src/assets/Coney2.jpg',
  'src/assets/Nathans.jpg',
  'src/assets/Artbook.png',
  'src/assets/RIPSENSE.jpg'
];

async function optimize() {
  for (const file of files) {
    const output = path.join('src/assets/optimized', path.basename(file, path.extname(file)) + '.avif');
    const stats = fs.statSync(file);
    const beforeSize = (stats.size / 1024).toFixed(2);

    let pipeline = sharp(file);
    const metadata = await pipeline.metadata();

    if (metadata.width > 2200) {
      pipeline = pipeline.resize(2200);
    }

    await pipeline
      .avif({ quality: 60, effort: 5 })
      .toFile(output);

    const afterStats = fs.statSync(output);
    const afterSize = (afterStats.size / 1024).toFixed(2);

    console.log(`${file}: ${beforeSize} KB -> ${afterSize} KB`);
  }
}

optimize().catch(err => {
  console.error(err);
  process.exit(1);
});
