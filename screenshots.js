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

  const browser = await chromium.launch({
    // !!! just for the prod - no certificate
    headless: true,
    args: ["--ignore-certificate-errors"],
  });

  const desktopPage = await browser.newPage();
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
  });
  const mobilePage = await mobileContext.newPage();

  for (const [index, { category, unique }] of limitedList.entries()) {
    const url = `https://demo.mobiscrollprod.com/fullscreen/${category}/${unique}?screenshot=true`;

    try {
      const filePathDesktop = `./demos-screenshots/${category}-${unique}.png`;
      await desktopPage.goto(url, { waitUntil: "networkidle", timeout: 10000 });
      await desktopPage.screenshot({ path: filePathDesktop });

      const filePathMobile = `./demos-screenshots/mobile-${category}-${unique}.png`;
      await mobilePage.goto(url, { waitUntil: "networkidle", timeout: 10000 });
      await mobilePage.screenshot({ path: filePathMobile });

      const percentage = Math.round(((index + 1) / total) * 100);
      console.log(
        `${
          index + 1
        }/${total} (${percentage}%) desktop & mobile screenshot saved → ${filePathDesktop}`
      );
    } catch (err) {
      console.warn(`Failed: ${category}/${unique} → ${err.message}`);
    }
  }

  await browser.close();

  //  _     _                   ____    _   _    ____
  // | |_  (_)  _ __    _   _  |  _ \  | \ | |  / ___|
  // | __| | | | '_ \  | | | | | |_) | |  \| | | |  _
  // | |_  | | | | | | | |_| | |  __/  | |\  | | |_| |
  //  \__| |_| |_| |_|  \__, | |_|     |_| \_|  \____|
  //                    |___/

  // for (const [index, file] of screenshotPaths.entries()) {
  //   const output = file.replace(".png", "-compressed.png");
  //   await new Promise((resolve, reject) => {
  //     tinify.fromFile(file).toFile(output, (err) => {
  //       if (err) {
  //         console.error(`Error compressing ${file}:`, err);
  //         reject(err);
  //       } else {
  //         const compPercentage = Math.round(((index + 1) / total) * 100);
  //         console.log(
  //           `${index + 1}/${total} (${compPercentage}%) compressed → ${output}`
  //         );
  //         resolve();
  //       }
  //     });
  //   });
  // }
})();

//todo when uncanged dont compress - but how can be unchanged if date change ?!
