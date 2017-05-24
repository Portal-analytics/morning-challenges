const textMeme = require('text-meme');
var argv = require('minimist')(process.argv.slice(2));

if (process.argv.length <= 2) {
    textMeme('Just fucking close deals, you bitch', {
        delay: 500
    }).then(function(closeDeals) {
        console.log(closeDeals);
    });
} else {
    var gifString = '';
    for (var i = 2; i < process.argv.length; i++) {
        gifString += process.argv[i].toString() + " ";
    }
    textMeme(gifString, {
        delay: 500
    }).then(function(closeDeals) {
        console.log(closeDeals);

    });
}
