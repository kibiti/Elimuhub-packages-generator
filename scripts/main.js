document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.getElementById("calculateBtn");
    const resultsDiv = document.getElementById("results");

    calculateBtn.addEventListener("click", () => {
        const days = parseInt(document.getElementById("daysPerWeek").value);
        const subjects = parseInt(document.getElementById("subjects").value);

        let ratePerHour;

        switch (days) {
            case 5:
                ratePerHour = 600;
                break;
            case 4:
                ratePerHour = 700;
                break;
            case 3:
                ratePerHour = 800;
                break;
        }

        const totalPerDay = ratePerHour * subjects;
        const totalPerWeek = totalPerDay * days;

        document.getElementById("rate").textContent = `KSh ${ratePerHour}`;
        document.getElementById("totalPerDay").textContent = `KSh ${totalPerDay}`;
        document.getElementById("totalPerWeek").textContent = `KSh ${totalPerWeek}`;

        resultsDiv.classList.remove("hidden");
    });
});
