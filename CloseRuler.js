document.body.style.cursor = '';
document.removeEventListener("mousedown", Mousedownfunction);
document.removeEventListener("mouseup", Mouseupfunction);
document.removeEventListener("mousemove", Mousemovefunction);


if (document.getElementById('ChromeRulerhorizontal1'))
    document.getElementById('ChromeRulerhorizontal1').remove();

if (document.getElementById('ChromeRulervertical1'))
    document.getElementById('ChromeRulervertical1').remove();

if (document.getElementById('ChromeRulerhorizontal2'))
    document.getElementById('ChromeRulerhorizontal2').remove();

if (document.getElementById('ChromeRulervertical2'))
    document.getElementById('ChromeRulervertical2').remove();

if (document.getElementById('ChromeRulerTopDisplayNode'))
    document.getElementById('ChromeRulerTopDisplayNode').remove();

if (document.getElementById('ChromeRulerBottomDisplayNode'))
    document.getElementById('ChromeRulerBottomDisplayNode').remove();

if (document.getElementById('ChromeRulerLeftDisplayNode'))
    document.getElementById('ChromeRulerLeftDisplayNode').remove();

if (document.getElementById('ChromeRulerRightDisplayNode'))
    document.getElementById('ChromeRulerRightDisplayNode').remove();

if (document.getElementById('ChromeRulerWidthDisplayNode'))
    document.getElementById('ChromeRulerWidthDisplayNode').remove();

if (document.getElementById('ChromeRulerHeightDisplayNode'))
    document.getElementById('ChromeRulerHeightDisplayNode').remove();

if (document.getElementById('ChromeRulerSelectionRectangle'))
    document.getElementById('ChromeRulerSelectionRectangle').remove();