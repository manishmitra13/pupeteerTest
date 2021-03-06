let jest_puppeteer_conf = {
    launch: {
        timeout: 30000,
        dumpio: true // Whether to pipe the browser process stdout and stderr 
    }
}
 
const isDebugMode = typeof v8debug === 'object' || /--debug|--inspect/.test(process.execArgv.join(' '));

 
if (isDebugMode) {
    jest_puppeteer_conf.launch.headless = true; // for debug:  to see what the browser is displaying
    jest_puppeteer_conf.launch.slowMo = 250;  // slow down by 250ms for each step
    jest_puppeteer_conf.launch.devtools = false; // This lets you debug code in the application code browser
    jest_puppeteer_conf.launch.args = [ '--start-maximized' ]; // maximise the screen
}

if (!isDebugMode) {
    jest_puppeteer_conf.launch.headless = false; // for debug:  to see what the browser is displaying
    jest_puppeteer_conf.launch.slowMo = 250;  // slow down by 250ms for each step
    jest_puppeteer_conf.launch.args = [ '--start-maximized' ]; // maximise the screen
}
 
module.exports = jest_puppeteer_conf;