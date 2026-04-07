import { test, expect } from "@playwright/test"

test.describe("Blog Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/blog")
  })

  test("should render the blog page heading", async ({ page }) => {
    const heading = page.locator("h1")
    await expect(heading).toContainText("Blog")
  })

  test("should display coming soon message", async ({ page }) => {
    const comingSoon = page.locator("text=Blog Posts Coming Soon")
    await expect(comingSoon).toBeVisible()
  })

  test("should have a GitHub link", async ({ page }) => {
    const githubLink = page.locator('a:has-text("View GitHub")')
    await expect(githubLink).toBeVisible()
    await expect(githubLink).toHaveAttribute("href", /github\.com/)
  })

  test("should have a back home link", async ({ page }) => {
    const homeLink = page.locator('a:has-text("Back Home")')
    await expect(homeLink).toBeVisible()
    await expect(homeLink).toHaveAttribute("href", "/")
  })

  test("should display blog stats", async ({ page }) => {
    const stats = ["0", "∞", "100%"]
    for (const stat of stats) {
      const element = page.locator(`text=${stat}`)
      await expect(element).toBeVisible()
    }
  })

  test("should navigate back to home", async ({ page }) => {
    const homeLink = page.locator('a:has-text("Back Home")')
    await homeLink.click()
    await expect(page).toHaveURL("/")
  })
})
