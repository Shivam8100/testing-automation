# Overview

- Playwright is an open-source end-to-end automation testing tool by Microsoft Corp' that can programmatically define tests and run them on sites: prod, staging, uat-web and even localhost.

- It is primarily intended for End-to-End testing.


## Important Commands:

| Command                                      | Description                                                                 |
|----------------------------------------------|-----------------------------------------------------------------------------|
| `npx playwright test`                        | Runs all tests on all browsers in headless mode.                           |
| `npx playwright test --workers 3`           | Runs tests in parallel for all 3 browsers.                                 |
| `npx playwright test example.spec.js`       | Runs a specific test.                                                      |
| `npx playwright test example1.spec.js example2.spec.js` | Runs the files specified.                                         |
| `npx playwright test example1 example2`     | Runs files that have `example1` or `example2` in the file name.            |
| `npx playwright test -g "check title"`      | Runs a test with the specified title.                                      |
| `npx playwright test --project=chromium`    | Runs tests in the specified browser only.                                  |
| `npx playwright test --headed`              | Runs tests in a physical browser (not headless mode).                      |
| `npx playwright test --debug`               | Debugs tests (opens Playwright Inspector).                                 |
| `npx playwright test example.spec.js --debug` | Debugs the specified file.                                                |
| `npx playwright test example.spec.js:21 --debug` | Debugs starting from the specific line where the test starts.             |

# References:

- [The different types of testing in software | Atlassian](https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing)
- [API testing with Playwright](https://shiv-jirwankar.medium.com/api-testing-with-playwright-2570021ed9b2)

