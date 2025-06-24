let today = new Date();
brithday = new Date(today.getFullYear(), 11, 25);
console.log("Today's date: " + today.toDateString());
console.log("Birthday date: " + brithday.toDateString());
alert("Today's date: " + today.toDateString() + "\nBirthday date: " + brithday.toDateString());
if (today.getMonth() === brithday.getMonth() && today.getDate() === brithday.getDate()) {
    console.log("Happy Birthday!");
    alert("Happy Birthday!");
}
