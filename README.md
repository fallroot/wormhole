# Wormhole for OS X

Wormhole is a simple OS X service. If you copy text from an application, it will be pasted to another app automatically.

## Installation

1. Download [wormhole.workflow.zip](https://github.com/fallroot/wormhole/releases/download/0.0.1/wormhole.workflow.zip) file.
2. Install by double click.

### Uninstalling Wormhole

Remove the workflow file in `~/Library/Services` folder.

## Setup

Before using wormhole, you should set target app for pasting text. You can edit configuration file manually or use Alfred workflow.

### Editing configuration file

Open `~/.wormholerc` file and edit with valid JSON format:

```
{
    "target": "your_app_name"
}
```

### Installing Alfred workflow

[Powerpack](https://www.alfredapp.com/powerpack/) is required.

1. Download [wormhole-config.alfredworkflow.zip](https://github.com/fallroot/wormhole/releases/download/0.0.1/wormhole-config.alfredworkflow.zip) file.
2. Open file by double-clicking or dragging into Alfred.
3. Open Alfred and type `wh`.
4. Select target app for pasting.

You can change keyword at *Alfred Preferences > Workflows* menu.

## Usage

1. Set target app for pasting.
2. Select text in any application.
3. Click *Services > Paste Text to Wormhole* menu or press keyboard shortcut.
* Services menu can be found in menubar or context menu.

### Keyboard shortcut

If you want to run service with keyboard shortcut, you can add it in *System Preferences > Keyboard > Shortcuts* menu.

## OS Support

OS X 10.11 El Capitan or above is required.

## Credits

Icon made by [Freepik](http://www.freepik.com) from [www.flaticon.com](http://www.flaticon.com) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/)

## License

[MIT](https://github.com/fallroot/wormhole/blob/master/LICENSE)
