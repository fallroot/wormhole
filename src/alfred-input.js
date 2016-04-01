class Util {
    static escapeXML(text) {
        return text.replace(/&/g, '&amp;')
                   .replace(/'/g, '&apos;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;')
                   .replace(/"/g, '&quot;');
    }
}

class App {
    run() {
        var header = '<?xml version="1.0"?><items>';
        var footer = '</items>';

        var body = this.processes.map(function(process) {
            var id = process.bundleIdentifier();
            var title = Util.escapeXML(process.displayedName());
            var path = Util.escapeXML(process.file.posixPath());

            return `<item arg="${id}"><title>${title}</title><subtitle>${path}</subtitle><icon type="fileicon">${path}</icon></item>`
        }).join('');

        return header + body + footer;
    }

    get processes() {
        var query = '{query}';
        var condition;

        if (query) {
            condition = {
                _and: [
                    {
                        displayedName: {
                            _contains: query
                        }
                    },
                    {
                        visible: true
                    }
                ]
            };
        } else {
            condition = {
                visible: true
            };
        }

        var processes = Application('com.apple.systemevents').applicationProcesses.whose(condition).applicationProcesses();

        return processes.sort(function(a, b) {
            return a.displayedName().localeCompare(b.displayedName());
        });
    }
}

function run() {
    return new App().run();
}
