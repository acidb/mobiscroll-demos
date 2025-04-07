const fs = require("fs-extra");
const path = require("path");
const args = process.argv.slice(2);
const projects = [
  { name: "mobiscroll-demos-angular", files: ["css", "html", "ts"] },
  { name: "mobiscroll-demos-javascript", files: ["js"] },
  { name: "mobiscroll-demos-jquery", files: ["js"] },
  {
    name: "mobiscroll-demos-react",
    files: ["css", "jsx"],
  },
  {
    name: "mobiscroll-demos-react-ts",
    files: ["css", "tsx"],
  },
  { name: "mobiscroll-demos-vue", files: ["vue"] },
  { name: "mobiscroll-demos-vue-ts", files: ["vue"] },
];

if (args.length === 2) {
  const oldPathParts = args[0].split("/"); // Split the old path into parts
  const newPathParts = args[1].split("/"); // Split the new path into parts

  if (oldPathParts.length < 3 || newPathParts.length < 3) {
    console.error(
      "Invalid arguments. Ensure the paths include category, component, and demo name."
    );
    process.exit(1);
  }

  const oldCategory = oldPathParts[0];
  const oldComponent = oldPathParts[1];
  const oldDemoName = oldPathParts[2];

  const newCategory = newPathParts[0];
  const newComponent = newPathParts[1];
  const newDemoName = newPathParts[2];

  projects.forEach((p) => {
    const oldDirPath = path.resolve(
      p.name,
      "src",
      "demos",
      oldCategory,
      oldComponent,
      oldDemoName
    );
    const newDirPath = path.resolve(
      p.name,
      "src",
      "demos",
      newCategory,
      newComponent,
      newDemoName
    );

    p.files.forEach((ext) => {
      const oldFilePath = path.join(oldDirPath, `${oldDemoName}.${ext}`);
      const newFilePath = path.join(newDirPath, `${newDemoName}.${ext}`);

      try {
        // Ensure the new directory exists
        fs.ensureDirSync(newDirPath);

        // Rename the file
        if (fs.existsSync(oldFilePath)) {
          fs.renameSync(oldFilePath, newFilePath);
          console.log(`Renamed: ${oldFilePath} -> ${newFilePath}`);
        } else {
          console.warn(`File not found: ${oldFilePath}`);
        }
      } catch (err) {
        console.error(`Error renaming file: ${oldFilePath}`, err);
      }
    });
  });
} else {
  console.log(`This script will rename files for an existing demo. Please pass the following args:
  1. Old demo path (category/component/demo-name). Ex: eventcalendar/timeline/old-demo
  2. New demo path (category/component/demo-name). Ex: eventcalendar/timeline/new-demo

  Usage: node rename.js eventcalendar/timeline/old-demo eventcalendar/timeline/new-demo
  `);
}
