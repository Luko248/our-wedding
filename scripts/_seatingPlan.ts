export const initSeatingPlan = () => {
  const guestList = document.getElementById('guestList') as HTMLDataListElement
  const autocomplete = document.getElementById("guestsSelect") as HTMLInputElement
  const clearSelect = document.getElementById("clearSelect") as HTMLButtonElement

  const checkInputValue = (): void => {
    const value = autocomplete.value.trim();

    if (value.length >= 1) {
      clearSelect.style.display = 'inline-block'
    }
    else {
      clearSelect.style.display = 'none'
    }
  }

  autocomplete.addEventListener("input", () => {
    checkInputValue()
  });

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
      chair.setAttribute("id", formatGuestId(guest.value));

      if (i <= 7) {
        mainTable.appendChild(chair)
      }

      else if (i > 7 && i <= 29) {
        table1.appendChild(chair)
      }

      else if (i > 27 && i <= 51) {
        table2.appendChild(chair)
      }

      else {
        table3.appendChild(chair)
      }
    }
  }

  const formatGuestId = (name: string) => {
    let formattedName = name.toLowerCase().replace(/\s/g, "-");
    formattedName = formattedName.replace(/ř/g, "r");
    formattedName = formattedName.replace(/š/g, "s");
    formattedName = formattedName.replace(/á/g, "a");
    formattedName = formattedName.replace(/č/g, "c");
    formattedName = formattedName.replace(/í/g, "i");
    formattedName = formattedName.replace(/ú/g, "u");
    formattedName = formattedName.replace(/ô/g, "o");
    formattedName = formattedName.replace(/ů/g, "u");
    formattedName = formattedName.replace(/ě/g, "e");
    formattedName = formattedName.replace(/é/g, "e");
    formattedName = formattedName.replace(/ý/g, "y");
    formattedName = formattedName.replace(/ľ/g, "l");
    formattedName = formattedName.replace(/ž/g, "z");
    formattedName = formattedName.replace(/ŕ/g, "r");
    formattedName = formattedName.replace(/ň/g, "n");
    formattedName = formattedName.replace(/ť/g, "t");
    return formattedName;
  };

  const handleChairClick = () => {
    const chairs = document.querySelectorAll(".chair");
    chairs.forEach(chair => {
      chair.addEventListener("click", (event) => {
        const chairElement = event.target as HTMLButtonElement;
        const chairId = chairElement.getAttribute("id");
        if (chairId) {
          updateUrlAnchor(chairId);
          showEqualName(event);
          checkInputValue();
        }
      });
    });
  };

  const updateUrlAnchor = (anchor) => {
    const url = new URL(window.location.href);
    url.hash = anchor;
    window.history.replaceState({}, document.title, url.toString());
  };

  createGuestList()

  autocomplete.addEventListener("input", () => {
    const chairs = document.querySelectorAll(".chair");
    const guests = guestList.querySelectorAll("option");

    const value = autocomplete.value.toLowerCase();

    chairs.forEach((chair) => {
      chair.classList.remove("chair--selected");
    });

    for (let i = 0; i < guests.length; i++) {
      if (guests[i].value.toLowerCase().startsWith(value)) {
        const chairId = chairs[i].getAttribute("id");
        updateUrlAnchor(chairId);
        chairs[i].classList.add("chair--selected");
        break;
      }
    }
  });

  const removeSelectedClass = () => {
    const chairs = document.querySelectorAll(".chair")

    chairs.forEach((chair) => {
      chair.classList.remove("chair--selected")
    })
  }

  clearSelect.addEventListener("click", () => {
    autocomplete.value = ""
    clearSelect.style.display = 'none'
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