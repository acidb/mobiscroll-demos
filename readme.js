const fs = require('node:fs');
const path = require('node:path');

// const demos = require('./demos.js').demos;

// function findDemo(group, uniqueName, demos, parent, category) {
//   console.log('itt', parent, category);
//   let found = false;
//   let i = 0;
//   while (!found && i < demos.length) {
//     if (demos[i].unique === uniqueName && parent === group) {
//       found = true;
//       console.log('found!!!');
//       return {
//         name: demos[i].name,
//         category,
//       };
//     }
//     if (demos[i].items) {
//       const res = findDemo(group, uniqueName, demos[i].items, demos[i].unique, category || demos[i].name);
//       if (res) {
//         return res;
//       }
//     }
//     i++;
//   }
// }

function createReadme(framework) {
  const folderPath = './mobiscroll-demos-' + framework + '/src/demos';
  const content =
    // '# This is the ' +
    // name +
    // 'source of the' + ... + demo
    'To download and run this example locally, please follow the instructions [in the readme file of the project](https://github.com/acidb/mobiscroll-demos-' +
    framework +
    '?tab=readme-ov-file#mobiscroll-' +
    framework.replace('-ts', '-typescript') +
    '-demos).\n\n' +
    'To see this example live, check it out on our [demo page](https://demo.mobiscroll.com/' +
    framework.replace('-ts', '') +
    '/';

  readAllFiles(folderPath, content);
}

function readAllFiles(dir, content) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  // console.log(files)
  // console.log("PATH ", dir, " FILE ", files)
  for (const file of files) {
    if (file.isDirectory()) {
      // console.log("DIR ", "PATH ", dir, " DIR ", file)
      readAllFiles(path.join(dir, file.name), content);
    } else {
      path.join(dir, file.name);
      const myPath = path.join(dir, 'README.md');
      const pathList = dir.split('/');
      const finalContent =
        content +
        (pathList[4] === 'calendar-view' ? 'eventcalendar' : pathList[4]) +
        '/' +
        (pathList[5] === 'conditional-move-resize'
          ? 'conditional-move-resize-drag-drop-fixed-event-length-fixed-to-resource'
          : pathList[5]) +
        '#).';
      fs.writeFile(myPath, finalContent, (err) => {
        if (err) console.log(err);
        else {
          console.log('DIR ', 'PATH ', dir, ' DIR ', file);
        }
      });
    }
  }
}

createReadme('angular');
createReadme('javascript');
createReadme('jquery');
createReadme('react');
createReadme('react-ts');
createReadme('vue');
createReadme('vue-ts');

// console.log(findDemo('calendar-view', 'customizing-header', demos));
