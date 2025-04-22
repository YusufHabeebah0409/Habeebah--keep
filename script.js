const allNote = []

const addNote = () => {
    if (note.value.trim() === "") {
        alert('fill in something')
    } else {
        allNote.push(note.value)
        note.value = ""
        display()
    }
}

const delNote = (index) => {
    const confirmMsg = confirm("Are you sure you want to delete")
    //   console.log(confirmMsg);
    if (confirmMsg == true) {
        allNote.splice(index, 1)
        display()
    } else {
        display()
    }

}

const display = () => {
    show.innerHTML = ""
    allNote.map((note, i) => {
        show.innerHTML += `
     <div>
     <p>${i + 1}.${note}</p>
     <button onclick="editNote()">Edit</button>
     <button onclick="delNote(${i})">Delete</button>
     </div>
     `
    })
}