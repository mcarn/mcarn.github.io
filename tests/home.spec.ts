import { test, expect } from "@playwright/test"

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("should render the hero section", async ({ page }) => {
    const heading = page.locator("h1")
    await expect(heading).toContainText("Hi, I'm mcarn")
  })

  test("should render the subtitle", async ({ page }) => {
    const subtitle = page.locator("h2")
    await expect(subtitle).toContainText("Full Stack Developer & Tech Enthusiast")
  })

  test("should have working CTA buttons", async ({ page }) => {
    const aboutButton = page.locator('a:has-text("Learn More About Me")')
    const blogButton = page.locator('a:has-text("Read My Blog")')

    await expect(aboutButton).toBeVisible()
    await expect(blogButton).toBeVisible()
  })

  test("should have social media links", async ({ page }) => {
    const githubLink = page.locator('[aria-label="GitHub Profile"]')
    const twitterLink = page.locator('[aria-label="Twitter Profile"]')

    await expect(githubLink).toBeVisible()
    await expect(twitterLink).toBeVisible()
    await expect(githubLink).toHaveAttribute("href", /github\.com/)
    await expect(twitterLink).toHaveAttribute("href", /x\.com|twitter\.com/)
  })

  test("should render the 'What I Do' section", async ({ page }) => {
    const section = page.locator("text=What I Do")
    await expect(section).toBeVisible()
  })

  test("should display three skills cards", async ({ page }) => {
    const cards = page.locator("text=/Frontend|Backend|Open Source/")
    await expect(cards).toHaveCount(3)
  })

  test("should navigate to about page", async ({ page }) => {
    const aboutButton = page.locator('a:has-text("Learn More About Me")')
    await aboutButton.click()
    await expect(page).toHaveURL("/about")
  })

  test("should navigate to blog page", async ({ page }) => {
    const blogButton = page.locator('a:has-text("Read My Blog")')
    await blogButton.click()
    await expect(page).toHaveURL("/blog")
  })
})
