function calculateYearDetailed(dod){
    const brithda6te = new Date(dod);
    const today = new Date();
    let years = today.getFullYear() - brithda6te.getFullYear();
    let months = today.getMonth() - brithda6te.getMonth();
    let days = today.getDate() - brithda6te.getDate();

    if (days < 0) {
        months--;
        
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
}
if (months < 0) {
    years--;
    months += 12;
}

return { years, months, days };
}

const userDOB = prompt("Enter your date of birth (YYYY-MM-DD):");{
const age = calculateYearDetailed(userDOB);
alert(`You are ${age.years} years, ${age.months} months ${age.days} days old.`);
}  {
    alert("Invalid date format. Please use YYYY-MM-DD.");
}