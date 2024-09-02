import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import config from "../hypermod.config.js";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const readmePath = path.resolve(__dirname, "../README.md");
const readmeContent = fs.readFileSync(readmePath, "utf8");

const start = "<!-- CODEGENSTART -->";
const end = "<!-- CODEGENEND -->";

const startIndex = readmeContent.indexOf(start);
const endIndex = readmeContent.indexOf(end + end.length);

const newContent = `${start}\n
| Hypermod key | Source |
| ------------ | ------- |
${Object.keys(config.presets)
  .map(
    (mod) =>
      `| \`@hypermod/e18e#${mod}\` | [${mod}](https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods/${mod}) |`
  )
  .join("\n")}\n${end}`;

const updatedReadme = `${readmeContent.slice(
  0,
  startIndex
)}${newContent}${readmeContent.slice(endIndex)}`;

fs.writeFileSync(readmePath, updatedReadme);
