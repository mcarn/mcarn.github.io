import { test, expect } from "@playwright/test"

test.describe("About Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about")
  })

  test("should render the about page heading", async ({ page }) => {
    const heading = page.locator("h1")
    await expect(heading).toContainText("About mcarn")
  })

  test("should display the introduction text", async ({ page }) => {
    const intro = page.locator("text=Full Stack Developer")
    await expect(intro).toBeVisible()
  })

  test("should display skills tags", async ({ page }) => {
    const skills = [
      "JavaScript / TypeScript",
      "Astro",
      "React",
      "Node.js",
      "CSS / Tailwind",
      "Open Source",
    ]

    for (const skill of skills) {
      const skillElement = page.locator(`text=${skill}`)
      await expect(skillElement).toBeVisible()
    }
  })

  test("should have GitHub link", async ({ page }) => {
    const githubLink = page.locator('a:has-text("Visit my GitHub")')
    await expect(githubLink).toBeVisible()
    await expect(githubLink).toHaveAttribute("href", /github\.com/)
  })

  test("should navigate to GitHub", async ({ page }) => {
    const githubLink = page.locator('a:has-text("Visit my GitHub")')
    const newPagePromise = page.context().waitForEvent("page")
    await githubLink.click()
    const newPage = await newPagePromise
    await expect(newPage).toHaveURL(/github\.com/)
  })
})
