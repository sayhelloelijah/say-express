const puppeteer = require("puppeteer");
const sum = require("./app");

test("should add numbers together", () => {
    expect(sum(1, 2)).toBe(3);
});

test("should output nothing", () => {
    expect(sum()).toBe(NaN);
});

test("should click around", async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 8000,
        args: ["--window-size=1920,1080"],
    });

    const page = await browser.newPage();
    await page.goTo("http://localhost:4200");

    expect();
});
