const core = require( '@actions/core');
const run =  require('./index');

jest.mock('@actions/core');

describe('When running the action', () => {
    test('it should set the release-url output parameter', async() =>  {
        await run();
        expect(core.setOutput).toHaveBeenCalledWith('release-url', expect.anything());
    })
})