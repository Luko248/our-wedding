export const initSeatingPlan = () => {
  const guestList = document.getElementById('guestList') as HTMLDataListElement;

  fetch('/scripts/guests.json')
      .then(response => response.json())
      .then((data) => {
          const guests = data.guests;
          if (Array.isArray(guests)) {
              guests.forEach(guest => {
                  const option = document.createElement('option');
                  option.value = guest.fullname;
                  option.textContent = guest.fullname;
                  guestList.appendChild(option);
              });
          } else {
              console.error('Invalid JSON data: not an array');
          }
      })
      .catch(error => console.error(error));


      const autocomplete = document.getElementById("guestsSelect") as HTMLInputElement;
      const clearSelect = document.getElementById("clearSelect") as HTMLButtonElement;

      autocomplete.addEventListener("input", () => {
        const chairs = document.querySelectorAll(".chair");
        const guests = guestList.querySelectorAll("option");

        const value = autocomplete.value.toLowerCase();

        chairs.forEach((chair) => {
          chair.classList.remove("chair--selected");
        });

        for (let i = 0; i < guests.length; i++) {
          if (guests[i].value.toLowerCase().startsWith(value)) {
            chairs[i].classList.add("chair--selected");
            console.log(value, i);
            break;
          }
        }
      });

      clearSelect.addEventListener("click", () => {
        autocomplete.value = "";
        const chairs = document.querySelectorAll(".chair");

        chairs.forEach((chair) => {
          chair.classList.remove("chair--selected");
        });
      });
}