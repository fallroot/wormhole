var query = '{query}';

const NIL = $();

class App {
    constructor() {
        this.configPath = $.NSHomeDirectory().js + '/.wormholerc';

        if (!this.hasConfig()) {
            this.initConfig();
        }
    }

    hasConfig() {
        return $.NSFileManager.defaultManager.fileExistsAtPath(this.configPath);
    }

    initConfig() {
        var fileManager = $.NSFileManager.defaultManager;
        var config = JSON.stringify({});

        fileManager.createFileAtPathContentsAttributes(this.configPath, config, NIL);
    }

    run() {
        var config = JSON.parse($.NSString.stringWithContentsOfFileEncodingError(this.configPath, $. NSUTF8StringEncoding, NIL).js);

        config.target = query;

        $.NSFileManager.defaultManager.createFileAtPathContentsAttributes(this.configPath, JSON.stringify(config), NIL);
    }
}

function run() {
    return new App().run();
}
