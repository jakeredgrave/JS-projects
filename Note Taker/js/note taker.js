let addButton = document.getElementById("add_button");
let noteSection = document.getElementById("notes");
let noteModal = document.getElementById("note_modal");
let modalCloseButton = document.getElementById("modal_close");

addButton.addEventListener("click", addNote);
noteSection.addEventListener("click", showMore);
modalCloseButton.addEventListener("click", closeModal);

function addNote(event) {
    event.preventDefault();
    let noteText = document.getElementById("note_text").value;
    // create note box and give it a class
    newNoteBox = document.createElement("div");
    newNoteBox.className = "note_box";
    // create paragraph and add note to it
    noteParagraph = document.createElement("p");
    noteParagraph.className = "note_text";
    noteParagraph.textContent = noteText;
    // add paragraph to note box
    newNoteBox.appendChild(noteParagraph);
    // create more button and give it a class
    moreButton = document.createElement("button");
    moreButton.className = "note_details_button";
    // add text to the button
    moreButton.textContent = "More";
    // add button to the note box
    newNoteBox.appendChild(moreButton);

    //add notBox to the "notes" section
    noteSection.appendChild(newNoteBox);
    //console.log(newNoteBox);

}
function showMore(event) {
    if (event.target.classList.contains("note_details_button")) {
        document.getElementById("modal_text").remove();
        // create div for note text
        let modalTextBox = document.createElement("div");
        modalTextBox.setAttribute("id", "modal_text");
        // get value(text) from sibling of More button - <p> element
        modalText = event.target.previousElementSibling.textContent;
        // add text from <p> to div (modalTextBox)
        modalTextBox.textContent = modalText;
        // add modalTextBox to modal
        noteModal.appendChild(modalTextBox);
        noteModal.style.display = "block";
    }
}
function closeModal(event) {
        noteModal.style.display = "none";
}