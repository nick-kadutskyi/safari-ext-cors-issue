# Recreates a CORS issue in Safari Web Extension
## Test the issue

1. Allow Unsighned Extensions in Safari > Develop menu item
2. Run the project in Xcode
3. Once extension is installed open console for background page Develop → Web Extension Background Pages → Test CORS Issue Extension - Service Worker
4. In main window navigate to https://example.com (you will need to allow the extension to access this domain via action button) or click action button in a toolbar (both actions will trigger fetch function in background script)
