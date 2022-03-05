document.body.style.cursor = 'crosshair';
document.addEventListener("mousedown", Mousedownfunction);
document.addEventListener("mouseup", Mouseupfunction);
document.addEventListener("mousemove", Mousemovefunction);

var pageWidth = jQuery(document).width();
var pageHeight = jQuery(document).height();

var clicked = false;
var x = 0,
    y = 0;

var boxcss = 'background-color:#00cccc !important;position:fixed !important;width:140px !important;height:35px !important;border-radius:2em !important;z-index:10000000000000 !important;display:block !important;margin-right:30px; !important;';
var labelcss = 'left: 5%;top: 12%;position: relative !important; font-size: 20px !important;font-family: fantasy !important;z-index:10000000000000 !important;display:block !important;';
CreateDisplayNodes('Width', 'right:0px;top:10px;background-color:#ee6352 !important;margin-top:10px; !important;');
CreateDisplayNodes('Height', 'right:0px;top:50px;background-color:#ee6352 !important;margin-top:30px; !important;');

function Mousedownfunction(e) {
    clicked = true;
    x = e.pageX;
    y = e.pageY;
    clearLines();
    UpdateSpecs(x, y, x, y);
    document.body.appendChild(createLine(x, 0, x, document.body.getBoundingClientRect().height, 'vertical1'));
    document.body.appendChild(createLine(0, y, document.body.getBoundingClientRect().width, y, 'horizontal1'));
};

function Mouseupfunction(e) {
    clicked = false;
}

function Mousemovefunction(e) {
    if (clicked == true) {
        clearLines();
        var x2 = e.pageX,
            y2 = e.pageY;
        UpdateSpecs(x, y, x2, y2);
        document.body.appendChild(createLine(x, 0, x, document.body.getBoundingClientRect().height, 'vertical1'));
        document.body.appendChild(createLine(0, y, document.body.getBoundingClientRect().width, y, 'horizontal1'));
        document.body.appendChild(createLine(x2, 0, x2, document.body.getBoundingClientRect().height, 'vertical2'));
        document.body.appendChild(createLine(0, y2, document.body.getBoundingClientRect().width, y2, 'horizontal2'));

        DrawRectangle(x, y, x2, y2);
    }
}




function clearLines() {
    if (document.getElementById('ChromeRulerhorizontal1'))
        document.getElementById('ChromeRulerhorizontal1').remove();

    if (document.getElementById('ChromeRulervertical1'))
        document.getElementById('ChromeRulervertical1').remove();

    if (document.getElementById('ChromeRulerhorizontal2'))
        document.getElementById('ChromeRulerhorizontal2').remove();

    if (document.getElementById('ChromeRulervertical2'))
        document.getElementById('ChromeRulervertical2').remove();

    if (document.getElementById('ChromeRulerSelectionRectangle'))
        document.getElementById('ChromeRulerSelectionRectangle').remove();
}


function createLineElement(x, y, length, angle, id) {
    var line = document.createElement("div");
    line.setAttribute('id', 'ChromeRuler' + id);

    var styles = 'border-Top: thin dashed #00a9e0; z-index:10000000000000 !important; display:block !important;' +
        'width: ' + length + 'px; ' +
        'height: 0px; ' +
        '-moz-transform: rotate(' + angle + 'rad); ' +
        '-webkit-transform: rotate(' + angle + 'rad); ' +
        '-o-transform: rotate(' + angle + 'rad); ' +
        '-ms-transform: rotate(' + angle + 'rad); ' +
        'position: absolute; ' +
        'top: ' + y + 'px; ' +
        'left: ' + x + 'px; ';
    line.setAttribute('style', styles);
    return line;
}

function createLine(x1, y1, x2, y2, id) {
    var a = x1 - x2,
        b = y1 - y2,
        c = Math.sqrt(a * a + b * b);

    var sx = (x1 + x2) / 2,
        sy = (y1 + y2) / 2;

    var x = sx - c / 2,
        y = sy;

    var alpha = Math.PI - Math.atan2(-b, a);

    return createLineElement(x, y, c, alpha, id);
}

function DrawRectangle(x1, y1, x2, y2) {
    var rec = document.createElement('div');
    rec.setAttribute('id', 'ChromeRulerSelectionRectangle');
    var style = 'left:' + Math.min(x1, x2) + 'px;' +
        'top:' + Math.min(y1, y2) + 'px;' +
        'position:absolute;z-index:10000000000000 !important;opacity:0.5;display:block !important;' +
        'width:' + Math.abs(x2 - x1) + 'px;' +
        'height:' + Math.abs(y2 - y1) + 'px;' +
        'background-color:#00a9e0';
    rec.setAttribute('style', style);
    document.body.appendChild(rec);
}

function CreateDisplayNodes(name, position) {
    var node = document.createElement('div');
    var nodestyle = boxcss + position;
    node.setAttribute('style', nodestyle);
    node.setAttribute('id', 'ChromeRuler' + name + 'DisplayNode');

    var textnode = document.createElement('label');
    textnode.setAttribute('style', labelcss);
    textnode.setAttribute('id', 'ChromeRuler' + name);
    textnode.innerHTML = name;

    node.appendChild(textnode);

    document.body.appendChild(node);

}



function UpdateSpecs(x1, y1, x2, y2) {
    var width = Math.abs((x2 - x1) * 0.02);
    var height = Math.abs((y2 - y1) * 0.02);
    jQuery('#ChromeRulerWidth').text('Width : ' + width.toFixed(1) + ' cm');
    jQuery('#ChromeRulerHeight').text('Height : ' + height.toFixed(1) + ' cm');
}