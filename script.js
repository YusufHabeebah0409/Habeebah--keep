const allNote = []
let itemToEditIndex = ""
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


const editNote = (item, i ) => {
    update.style.display = 'block'
    add.style.display = 'none'
    note.value = item
    itemToEditIndex = i
}

const updateNote = () => {
    if(note.value === ""){
       alert('Fill in something please')
    }else{
        update.style.display = 'none'
        add.style.display = 'block'
        allNote.splice(itemToEditIndex,1,note.value)
        display()
        note.value = ""
    }
}

const display = () => {
    show.innerHTML = ""
    allNote.map((note, i) => {
        show.innerHTML += `
     <div>
     <p>${i + 1}.${note}</p>
     <button onclick='editNote(${JSON.stringify(note)}, ${i})'>Edit</button>
     <button onclick='delNote(${i})'>Delete</button>
     </div>
     `
    })
}