//your JS code here. If required.
// your JS code here. If required.

const select = document.getElementById("colorSelect");
const button = document.querySelector("input[type='button']");

button.addEventListener("click", () => {
    const selectedIndex = select.selectedIndex;

    if (selectedIndex !== -1) {
        select.remove(selectedIndex);
    }
});
