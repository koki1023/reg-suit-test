/* capture.js */

const puppeteer = require('puppeteer');
const mkdirp = require('mkdirp');

async function main() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  let page = await browser.newPage();

  page.setViewport({ width: 1280, height: 1080 });
  // await page.goto(`file://${__dirname}/index.html`);
  await page.goto(`https://staging.repro.io/tool/`);
  await new Promise(res => setTimeout(() => res(), 300));
  await page.screenshot({ path: 'screenshot/index.png' });

  await page.close();
  await browser.close();
}

mkdirp.sync('screenshot');
main();
