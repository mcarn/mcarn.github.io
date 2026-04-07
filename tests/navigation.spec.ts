import { test, expect } from "@playwright/test"

test.describe("Navigation", () => {
  test("should highlight active nav link on home page", async ({ page }) => {
    await page.goto("/")
    const homeLink = page.locator('a:has-text("Home")')
    // Active nav link should have gradient background
    await expect(homeLink).toHaveClass(/bg-gradient-primary/)
  })

  test("should highlight active nav link on about page", async ({ page }) => {
    await page.goto("/about")
    const aboutLink = page.locator('a:has-text("About")')
    await expect(aboutLink).toHaveClass(/bg-gradient-primary/)
  })

  test("should highlight active nav link on blog page", async ({ page }) => {
    await page.goto("/blog")
    const blogLink = page.locator('a:has-text("Blog")')
    await expect(blogLink).toHaveClass(/bg-gradient-primary/)
  })

  test("should navigate between pages", async ({ page }) => {
    // Start at home
    await page.goto("/")
    const aboutLink = page.locator('a:has-text("About")')
    await aboutLink.click()
    await expect(page).toHaveURL("/about")

    // Navigate to blog
    const blogLink = page.locator('a:has-text("Blog")')
    await blogLink.click()
    await expect(page).toHaveURL("/blog")

    // Navigate back to home
    const homeLink = page.locator('a:has-text("Home")')
    await homeLink.click()
    await expect(page).toHaveURL("/")
  })

  test("header should be sticky", async ({ page }) => {
    await page.goto("/")
    const header = page.locator("header")
    const computedStyle = await header.evaluate((el) => window.getComputedStyle(el).position)
    expect(computedStyle).toBe("sticky")
  })

  test("footer should be visible on all pages", async ({ page }) => {
    const pages = ["/", "/about", "/blog"]

    for (const pagePath of pages) {
      await page.goto(pagePath)
      const footer = page.locator("footer")
      await expect(footer).toBeVisible()
    }
  })
})
