// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

var columns = document.getElementsByTagName('td');

[...columns].forEach(col => {
    col.addEventListener('click', (e) => {
        e.target.innerHTML = `${e.x},${e.y}`;
    });
});