const NIL = $();

class App {
   constructor() {
        this.fileManager = $.NSFileManager.defaultManager;
        this.configPath = $.NSHomeDirectory().js + '/.wormholerc';

        if (!this.hasConfig()) {
            this.initConfig();
        }
    }

    hasConfig() {
        return this.fileManager.fileExistsAtPath(this.configPath);
    }

    initConfig() {
        this.fileManager.createFileAtPathContentsAttributes(this.configPath, '{}', NIL);
    }

    readConfig() {
        return JSON.parse($.NSString.stringWithContentsOfFileEncodingError(this.configPath, $.NSUTF8StringEncoding, NIL).js);
    }

    copyAndPaste(source) {
        var systemEvents = Application('System Events');
        var app = Application(source);

        systemEvents.keystroke('c', {using: 'command down'});
        app.activate();
        delay(0.2);
        systemEvents.keystroke('v', {using: 'command down'});
    }

    run() {
        var config = this.readConfig();

        if (!config) {
            return;
        }

        this.copyAndPaste(config.target);
    }
}

function run(input, parameters) {
    new App().run();

    return input;
}
