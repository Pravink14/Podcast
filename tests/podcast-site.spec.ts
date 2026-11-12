import { expect, test } from "@playwright/test";

test("home presents the podcast identity and exactly one featured episode", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("link", { name: "Offbeat Index home" }),
  ).toBeVisible();
  await expect(page.locator("[data-featured-episode]")).toHaveCount(1);
  await expect(
    page.getByRole("heading", {
      name: "The Art of Starting Before You’re Ready",
    }),
  ).toBeVisible();
});

test("main navigation reaches all four site pages", async ({ page }) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation", { name: "Main navigation" });

  for (const [label, pathname] of [
    ["Episodes", "/episodes/"],
    ["About", "/about/"],
    ["FAQ", "/faq/"],
    ["Home", "/"],
  ]) {
    await navigation.getByRole("link", { name: label }).click();
    await expect(page).toHaveURL(
      new RegExp(`${pathname.replaceAll("/", "\\/")}$`),
    );
  }
});

test("episode catalog contains 20 unique records with complete metadata", async ({
  page,
}) => {
  await page.goto("/episodes/");

  const cards = page.locator("[data-episode-id]");
  await expect(cards).toHaveCount(20);

  const ids = await cards.evaluateAll((elements) =>
    elements.map((element) => element.getAttribute("data-episode-id")),
  );
  expect(new Set(ids).size).toBe(20);

  for (const card of await cards.all()) {
    await expect(card.getByRole("heading", { level: 3 })).toBeVisible();
    await expect(card.locator("time")).toHaveAttribute(
      "datetime",
      /^\d{4}-\d{2}-\d{2}$/,
    );
    await expect(card.locator(".episode-card-meta")).toContainText(/\d+ min/);
    await expect(card.locator(".episode-card-description")).not.toBeEmpty();
  }

  const featuredCard = page.locator('[data-featured-episode="true"]');
  await expect(featuredCard).toHaveCount(1);
  const featuredId = await featuredCard.getAttribute("data-episode-id");
  expect(ids).toContain(featuredId);
  await expect(
    page.locator("audio, video, [aria-label*='play' i]"),
  ).toHaveCount(0);
});

test("about page explains the fictional show premise", async ({ page }) => {
  await page.goto("/about/");

  await expect(
    page.getByText(/contemporary culture, creative work, and ideas/i),
  ).toBeVisible();
  await expect(
    page.getByText(/fictional, replaceable podcast concept/i),
  ).toBeVisible();
});

test("FAQ questions can be expanded and collapsed by keyboard", async ({
  page,
}) => {
  await page.goto("/faq/");

  const question = page
    .locator("summary")
    .filter({ hasText: "What is Offbeat Index about?" });
  const item = page.locator("details").filter({ has: question });
  await question.focus();
  await expect(question).toBeFocused();

  await page.keyboard.press("Enter");
  await expect(item).toHaveJSProperty("open", true);
  await expect(item).toContainText(/fictional show concept/i);

  await page.keyboard.press("Enter");
  await expect(item).toHaveJSProperty("open", false);
});

test("all pages fit mobile and desktop viewport widths", async ({ page }) => {
  for (const width of [320, 1280]) {
    await page.setViewportSize({ width, height: 900 });

    for (const path of ["/", "/episodes/", "/about/", "/faq/"]) {
      await page.goto(path);
      await expect(
        page.getByRole("navigation", { name: "Main navigation" }),
      ).toBeVisible();

      const pageWidth = await page.evaluate(
        () => document.documentElement.scrollWidth,
      );
      expect(pageWidth, `${path} overflows at ${width}px`).toBeLessThanOrEqual(
        width,
      );
    }
  }
});
