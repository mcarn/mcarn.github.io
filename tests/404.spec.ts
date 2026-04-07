import { test, expect } from "@playwright/test"

test.describe("404 Page", () => {
  test("should render 404 page", async ({ page }) => {
    await page.goto("/non-existent-page", { waitUntil: "networkidle" })
    const heading = page.locator("text=404")
    await expect(heading).toBeVisible()
  })

  test("should display the page not found message", async ({ page }) => {
    await page.goto("/non-existent-page", { waitUntil: "networkidle" })
    const message = page.locator("text=Page not found")
    await expect(message).toBeVisible()
  })

  test("should have a working countdown timer", async ({ page }) => {
    await page.goto("/non-existent-page", { waitUntil: "networkidle" })
    const countdown = page.locator("#countdown")

    // Initial countdown should be 5
    await expect(countdown).toContainText("5")

    // Wait a bit and check if countdown decreased
    await page.waitForTimeout(1100)
    const countdownValue = await countdown.textContent()
    const count = parseInt(countdownValue || "0")
    expect(count).toBeLessThan(5)
  })

  test("should have a direct link to home", async ({ page }) => {
    await page.goto("/non-existent-page", { waitUntil: "networkidle" })
    const homeLink = page.locator('a:has-text("Go Home Now")')
    await expect(homeLink).toBeVisible()
    await expect(homeLink).toHaveAttribute("href", "/")
  })

  test("should redirect to home after 5 seconds", async ({ page }) => {
    await page.goto("/non-existent-page", { waitUntil: "networkidle" })

    // Wait for the redirect (5 seconds + some buffer)
    await page.waitForTimeout(5100)

    // Should be redirected to home
    await expect(page).toHaveURL("/")
  })

  test("should have gradient styled heading", async ({ page }) => {
    await page.goto("/non-existent-page", { waitUntil: "networkidle" })
    const heading = page.locator("h1")
    const hasGradientClass = await heading.evaluate((el) =>
      el.querySelector(".text-gradient") !== null,
    )
    expect(hasGradientClass).toBe(true)
  })
})
