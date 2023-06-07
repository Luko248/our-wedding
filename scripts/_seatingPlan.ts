export const initSeatingPlan = () => {
  const guestList = document.getElementById('guestList') as HTMLDataListElement
  const autocomplete = document.getElementById("guestsSelect") as HTMLInputElement
  const clearSelect = document.getElementById("clearSelect") as HTMLButtonElement

  const createGuestList = () => {
    fetch('/scripts/guests.json')
      .then(response => response.json())
      .then((data) => {
        const { guests } = data
        if (Array.isArray(guests)) {
          guests.forEach(guest => {
            const option = document.createElement('option')
            option.value = guest.fullname
            option.textContent = guest.fullname
            option.id = guest.id
            guestList.appendChild(option)
          })
        } else {
          console.error('Invalid JSON data: not an array')
        }
      })
      .then(() => createChairs())
      .then(() => handleChairClick())
      .catch(error => console.error(error))
  }

  const createChairs = () => {
    const mainTable = document.querySelector(".table--main") as HTMLDivElement
    const table1 = document.querySelector(".table--1") as HTMLDivElement
    const table2 = document.querySelector(".table--2") as HTMLDivElement
    const table3 = document.querySelector(".table--3") as HTMLDivElement

    const guests = guestList.querySelectorAll("option");
    for (let i = 1; i <= guests.length; i++) {
      const chair = document.createElement('button')
      const guest = guests[i - 1];
      chair.classList.add('chair')
      chair.setAttribute('data-number', `${i}`)
      chair.setAttribute("title", guest.value);

      if (i <= 7) {
        mainTable.appendChild(chair)
      }

      else if (i > 7 && i <= 27) {
        table1.appendChild(chair)
      }

      else if (i > 27 && i <= 47) {
        table2.appendChild(chair)
      }

      else {
        table3.appendChild(chair)
      }
    }
  }

  const handleChairClick = () => {
    const chairs = document.querySelectorAll(".chair")
    chairs.forEach(chair => {
      chair.addEventListener("click", (event) => {
        showEqualName(event)
      })
    })
  }

  createGuestList()

  autocomplete.addEventListener("input", () => {
    const chairs = document.querySelectorAll(".chair")
    const guests = guestList.querySelectorAll("option")

    const value = autocomplete.value.toLowerCase()

    chairs.forEach((chair) => {
      chair.classList.remove("chair--selected")
    });

    for (let i = 0; i < guests.length; i++) {
      if (guests[i].value.toLowerCase().startsWith(value)) {
        chairs[i].classList.add("chair--selected")
        break
      }
    }
  })

  const removeSelectedClass = () => {
    const chairs = document.querySelectorAll(".chair")

    chairs.forEach((chair) => {
      chair.classList.remove("chair--selected")
    })
  }

  clearSelect.addEventListener("click", () => {
    autocomplete.value = ""
    removeSelectedClass()
  })

  const showEqualName = (event) => {
    removeSelectedClass()
    const chair = event.target as HTMLButtonElement
    const chairNumber = chair.getAttribute("data-number")
    const guests = guestList.querySelectorAll("option")

    for (let i = 0; i < guests.length; i++) {
      const guest = guests[i]
      if (guest?.value && guest?.id?.toString() === chairNumber) {
        autocomplete.value = guest.value;
        chair.classList.add("chair--selected")
        break;
      }
    }
  }
}