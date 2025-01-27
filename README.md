Repo to reproduce an issue with playwright 1.50

In /page.html are 2 buttons with the same data-test-id, one of the buttons has display: none;

The test then tries to execute this `page.click('data-test-id=buttonTest >> visible="true"');` but it is trying to click the hidden button so the test fails

In playwright 1.49 the visible button is clicked correctly and the test passes


Steps to reproduce
- Run `npm -i`
- Run `npx playwright test`
- Check that the test failed and that it tried to click on the button that is not visible
    ```
     - waiting for locator('data-test-id=buttonTest').locator('visible="true"')
        - locator resolved to <button id="displayNoneButton" data-test-id="buttonTest">Click Me</button>
      - attempting click action
        2 × waiting for element to be visible, enabled and stable
          - element is not visible
    ```
- Now go back to playwright version 1.49 and run again
  - `npm uninstall @playwright/test`
  - `npm install @playwright/test@1.49.0`
  - `npx playwright test`
- Test works fine and clicks the correct visible button
