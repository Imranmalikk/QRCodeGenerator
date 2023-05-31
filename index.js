const QRCode = require('qrcode')
 
let data = {
    https:"//youtu.be/dG91B3hHyY4"
}
 
let stringdata = JSON.stringify(data)
 
QRCode.toString(stringdata,{type:'terminal'},
                    function (err, QRcode) {
 
    if(err) return console.log("error occurred")
 
    console.log(QRcode)
})
QRCode.toDataURL(stringdata, function (err, code) {
    if(err) return console.log("error occurred")
 
    console.log(code)
})