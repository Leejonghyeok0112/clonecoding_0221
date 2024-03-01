NodeList.prototype.map= Array.prototype.map;
const all = document.querySelector("input.all");
const terms = document.querySelectorAll("input.term");

all.addEventListener("click", () => {
    terms.forEach((term) =>{
        term.checked = all. checked;
    });
});

terms.forEach((term) => {
    term.addEventListener("click", (e) => {
        all.checked =
            terms.map((term) => term.checked).filter((checked) => checked)
                .length === 6;
    });
});
