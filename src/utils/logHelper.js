LogHelper = module.exports = {}

LogHelper.log = function (msg) {
    let d = new Date();
    let date = '[' + d.getHours() + ':' + d.getMinutes() + ':'+ d.getSeconds() + ']'
    console.log(date + ' ' + msg)
}