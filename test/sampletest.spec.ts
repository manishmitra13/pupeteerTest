import { appBaseUrl } from "./helper/helper"

describe('Google', () => {
 
  beforeAll(async () => {
      await page.goto(appBaseUrl)
  })

  it('should display "google" text on page', async () => {
      await expect(page).toMatch('woolworth')
  })

})
