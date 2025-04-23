const allNote = []
let itemToEditIndex = ""
const addNote = () => {
    if (note.value.trim() === "") {
        // alert('fill in something')
        errorMsg.style.display = 'block'
    } else {
        allNote.push(note.value)
        note.value = ""
        display()
        errorMsg.style.display = 'none'
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


const editNote = (item, i) => {
    update.style.display = 'block'
    add.style.display = 'none'
    note.value = item
    itemToEditIndex = i
}

const updateNote = () => {
    if (note.value === "") {
        alert('Fill in something please')
    } else {
        update.style.display = 'none'
        add.style.display = 'block'
        allNote.splice(itemToEditIndex, 1, note.value)
        display()
        note.value = ""
    }
}

const display = () => {
    show.innerHTML = ""
    allNote.map((note, i) => {
        show.innerHTML += `
<tr class="text-center ">
        <td class="fs-3"> ${i + 1}.</td>
         <td class="fs-3">${note}</td>

    <td> 
     <button onclick='editNote(${JSON.stringify(note)}, ${i})'    class="btn btn-success w-50">Edit</button>
    </td>

     <td> 
     <button onclick='delNote(${i})'class="btn btn-danger w-50">Delete</button>
     </td>
</tr>
     `
    })
}