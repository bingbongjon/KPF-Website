// Set Notch Width
var offsetWidthH5 = document.getElementById('h5-text').offsetWidth;
var offsetWidthFooter = document.getElementById('donate-here').offsetWidth;
// var offsetWidthPatreon = document.getElementById('patreon-name').offsetWidth;

try {
    document.getElementById('divider__notch-1').style.width = offsetWidthH5 + 'px';
    document.getElementById('divider__notch-footer').style.width = offsetWidthFooter + 'px';
    // document.getElementById('divider__notch-patreon').style.width = offsetWidthPatreon + 'px';
} catch (err) {
    document.getElementById('divider__notch-footer').style.width = offsetWidthFooter + 'px';
}