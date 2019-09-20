ObjC.import('CoreGraphics')

function run() {
  const se = Application('System Events')
  se.keystroke('c', { using: 'command down' })

  const options = $.kCGWindowListOptionOnScreenOnly | $.kCGWindowListExcludeDesktopElements
  const windows = ObjC.deepUnwrap($.CGWindowListCopyWindowInfo(options, $.kCGNullWindowID))
  const apps = [...new Set(windows.map(window => window.kCGWindowOwnerName))]

  if (apps.length < 2) {
    return
  }

  Application(apps[1]).activate()
  delay(0.2)
  se.keystroke('v', { using: 'command down' })
}
