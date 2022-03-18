window.onload = function() {

    document.getElementById('btnRadio').onclick = function() {

    // 1. Maak een selectie van alle keuzerondjes
    var ColorSelection = document.getElementsByName('radiogroup');
    var Choice = '';

    // 2. Kijk in de selectie welke optie is geselecteerd
    for(var ColorCounter in ColorSelection) {
         if(ColorSelection[ColorCounter].checked) {
            Choice = 'De gekozen kleur = '+ ColorSelection[ColorCounter].value;
            }
        }

    // 3. Laat her resultaat zien op het scherm in de DIV selectionresult
    document.getElementById('selectionResult').innerHTML = Choice;
    }
}