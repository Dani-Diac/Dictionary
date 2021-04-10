var words = [];

function findWord() {
  var input = document.getElementById("getInputToSearch").value;
  if (words.indexOf(input) == -1) {
    alert("The word doesn't exist in the dictionary!");
    document.getElementById("getInputToSearch").value = "";
    return false;
  } else {
    alert("The word is already in the dictionary!");
    document.getElementById("getInputToSearch").value = "";
    return false;
  }
}

function addWord() {
  var input = document.getElementById("getInputToAdd").value;
  if (words.indexOf(input) == -1) {
    words.push(input);
    document.getElementById("getInputToAdd").value = "";
    return false;
  } else {
    alert("The word is already in the dictionary!")
    document.getElementById("getInputToAdd").value = "";
    return false;
  }
}
