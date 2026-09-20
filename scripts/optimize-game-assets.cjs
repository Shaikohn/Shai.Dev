const path = require("node:path");
const sharp = require("sharp");

const files = [
  "src/assets/projects/impostor/home.png",
  "src/assets/projects/impostor/rol.png",
  "src/assets/projects/impostor/pistas.png",
  "src/assets/projects/impostor/votacion.png",
  "src/assets/projects/impostor/chat.png",
  "src/assets/projects/impostor/lobby.png",
  "src/assets/projects/impostor/win.png",
  "src/assets/projects/pdb/pdb1.png",
  "src/assets/projects/pdb/pdb2.png",
  "src/assets/projects/pdb/pdb3.png",
  ...["spanish", "english"].flatMap((language) =>
    Array.from({ length: 7 }, (_, index) =>
      `src/assets/projects/whispers-of-war/${language}/${index + 1}.png`,
    ),
  ),
];

async function optimize(file) {
  const output = file.replace(/\.png$/i, ".webp");
  await sharp(file)
    .rotate()
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(output);
  return path.relative(process.cwd(), output);
}

Promise.all(files.map(optimize))
  .then((outputs) => outputs.forEach((output) => process.stdout.write(`${output}\n`)))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
