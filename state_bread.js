document.getElementById('wholeWheatButton').addEventListener('click', function() {
    // Handle the selection of whole wheat bread
    // alert('You chose Whole Wheat Bread');
    showSubmitButton();
});

document.getElementById('whiteBreadButton').addEventListener('click', function() {
    // Handle the selection of white bread
    // alert('You chose White Bread');
    showSubmitButton();
});

function showSubmitButton() {
    // Show the submit button when a choice is made
    document.getElementById('submitButton').style.display = 'block';
}
function redirectToResultPage() {
    window.location.href = 'minigame_bread.html';
}