//  _                                      _
// (_)  _ __ ___    _ __     ___    _ __  | |_
// | | | '_ ` _ \  | '_ \   / _ \  | '__| | __|
// | | | | | | | | | |_) | | (_) | | |    | |_
// |_| |_| |_| |_| | .__/   \___/  |_|     \__|
//                 |_|

// not working - module errors - need to modify demos.js

// import { demos } from "./mobiscroll-demos-jquery/src/demos.js";
// console.log(demos);

//                                              _
//  _ __ ___     __ _   _ __    _   _    __ _  | |
// | '_ ` _ \   / _` | | '_ \  | | | |  / _` | | |
// | | | | | | | (_| | | | | | | |_| | | (_| | | |
// |_| |_| |_|  \__,_| |_| |_|  \__,_|  \__,_| |_|

import { readdirSync } from "fs";
import { join } from "path";

import tinify from "tinify";
tinify.key = "8k1ZtvKM3sqBm4Dc8s8BzH7LWdM2CQkS";

const baseDir = "./mobiscroll-demos-jquery/src/demos/eventcalendar";
const screenshotsList = readdirSync(baseDir, { withFileTypes: true })
  .filter((dir) => dir.isDirectory())
  .flatMap((cat) =>
    readdirSync(join(baseDir, cat.name), { withFileTypes: true })
      .filter((sub) => sub.isDirectory())
      .map((sub) => ({
        category: cat.name === "calendar-view" ? "calendar" : cat.name,
        unique: sub.name,
      }))
  );

//          _                                     _           _       _
//  _ __   | |   __ _   _   _  __      __  _ __  (_)   __ _  | |__   | |_
// | '_ \  | |  / _` | | | | | \ \ /\ / / | '__| | |  / _` | | '_ \  | __|
// | |_) | | | | (_| | | |_| |  \ V  V /  | |    | | | (_| | | | | | | |_
// | .__/  |_|  \__,_|  \__, |   \_/\_/   |_|    |_|  \__, | |_| |_|  \__|
// |_|                  |___/                         |___/

import { chromium } from "playwright";

(async () => {
  const limit = Number(process.argv[2]) || screenshotsList.length;
  const limitedList = screenshotsList.slice(0, limit);
  const total = limitedList.length;
  const screenshotPaths = [];

  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const [index, { category, unique }] of limitedList.entries()) {
    const filePath = `./demos-screenshots/${category}-${unique}.png`;
    screenshotPaths.push(filePath);
    await page.goto(
      `https://demo.mobiscroll.com/fullscreen/${category}/${unique}?screenshot=true`
    );
    await page.screenshot({ path: filePath });
    const percentage = Math.round(((index + 1) / total) * 100);
    console.log(
      `${index + 1}/${total} (${percentage}%) screenshot saved → ${filePath}`
    );
  }
  await browser.close();

  //  _     _                   ____    _   _    ____
  // | |_  (_)  _ __    _   _  |  _ \  | \ | |  / ___|
  // | __| | | | '_ \  | | | | | |_) | |  \| | | |  _
  // | |_  | | | | | | | |_| | |  __/  | |\  | | |_| |
  //  \__| |_| |_| |_|  \__, | |_|     |_| \_|  \____|
  //                    |___/

  for (const [index, file] of screenshotPaths.entries()) {
    const output = file.replace(".png", "-compressed.png");
    await new Promise((resolve, reject) => {
      tinify.fromFile(file).toFile(output, (err) => {
        if (err) {
          console.error(`Error compressing ${file}:`, err);
          reject(err);
        } else {
          const compPercentage = Math.round(((index + 1) / total) * 100);
          console.log(
            `${index + 1}/${total} (${compPercentage}%) compressed → ${output}`
          );
          resolve();
        }
      });
    });
  }
})();

//todo  when uncanged dont compress
