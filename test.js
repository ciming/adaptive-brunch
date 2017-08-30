const fs = require('fs');
const expect = require('chai').expect;
const AdaptiveCompiler = require('./');

function readFile(filepath) {
    if (fs.existsSync(filepath)) {
        return fs.readFileSync(filepath, { encoding: 'utf-8' }) || ''
    }
    return ''
}


describe('adaptive-brunch', () => {
    let plugin;
    beforeEach(() => {
        plugin = new AdaptiveCompiler({
            remUnit: 75
        });
    });
    it('normal', function() {
        var fixture = readFile('test-file/fixture.css');
        var expected = readFile('test-file/expected.css');
        plugin.compile({ data: fixture, path: 'test-file/fixture.css' })
            .then(result => {
                expect(result.data).is.a.string
                expect(result.data).to.equal(expected)
            })
    })

})