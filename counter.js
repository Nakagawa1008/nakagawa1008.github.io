// counter.js
window.onload = function() {
let count = localStorage.getItem('visit_count');
if (!count) {
count = 1;
} else {
count = parseInt(count) + 1;
}
localStorage.setItem('visit_count', count);
document.getElementById('count').textContent = count;
};
