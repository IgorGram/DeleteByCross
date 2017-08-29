/**
 * Created by Игорь on 29.08.2017.
 */
"use srtict"

var container = document.querySelector('.container');
var div = document.querySelector('.pane');

container.onclick = function (event) {
    var target = event.target;
    if (!event.target.classList.contains('remove-button')) return;
        event.target.parentNode.hidden = !event.target.parentNode.hidden;
};