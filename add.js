const fs = require("fs-extra");
const path = require("path");
const args = process.argv.slice(2);
const projects = [
  { name: "mobiscroll-demos-angular", files: ["css", "html", "ts"] },
  { name: "mobiscroll-demos-javascript", files: ["js"] },
  { name: "mobiscroll-demos-jquery", files: ["js"] },
  { name: "mobiscroll-demos-react", files: ["css", "jsx"] },
  { name: "mobiscroll-demos-react-ts", files: ["css", "tsx"] },
  { name: "mobiscroll-demos-vue", files: ["vue"] },
  { name: "mobiscroll-demos-vue-ts", files: ["vue"] },
];

if (args.length) {
  const demoName = args[0]; // new demo unique name

  if (args[1]) {
    const demoCategory = args[1].split("/"); // component & subcategory where to create the files: eventcalendar/timeline
    const category = demoCategory[0];
    const component = demoCategory[1];

    projects.forEach((p) => {
      const dirPath = path.resolve(
        p.name,
        "src",
        "demos",
        category,
        component,
        demoName
      );

      p.files.forEach((ext) => {
        fs.ensureFileSync(path.resolve(dirPath, demoName + "." + ext));
      });
    });
  }
} else {
  console.log(`This script will create the nessessary files for a new demo. Please pass the following args:
  1. New demo uinique name. Ex: event-customization
  2. Demo category and comoponent/view. Ex: eventcalendar/timeline

  Usage: node add.js new-uinique eventcalendar/timeline
  `);
}
