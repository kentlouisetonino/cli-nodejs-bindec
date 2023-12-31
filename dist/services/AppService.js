"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppService = /** @class */ (function () {
    function AppService() {
    }
    // This method clean up the terminal before running any process.
    AppService.cleanUp = function () {
        console.clear();
    };
    // This method add a newline.
    AppService.newline = function () {
        console.log('\n');
    };
    // This method display the description of the app.
    AppService.description = function () {
        console.log(' -------------------------------------------- ');
        console.log('|                                            |');
        console.log('|                   BINDEC                   |');
        console.log('|                                            |');
        console.log('|   A CLI application that converts binary   |');
        console.log('| numbers to decimal numbers and vice versa. |');
        console.log('|                                            |');
        console.log('|____________________________________________|');
    };
    // This method allows user to choose an option.
    AppService.options = function () {
        console.log('Please input only the number (1 | 2) option:');
        console.log('(1) Binary to Decimal');
        console.log('(2) Decimal to Binary');
    };
    // This method will display error message for invalid option.
    AppService.invalidOption = function (message) {
        var redColor = '\x1b[31m';
        var resetColor = '\x1b[0m';
        console.log("".concat(redColor).concat(message).concat(resetColor));
    };
    // This method will display the result.
    AppService.result = function (type, value) {
        console.log("".concat(type, ": "), value);
    };
    return AppService;
}());
exports.default = AppService;
