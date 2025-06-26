function gradeCallback(marks) {
    if (marks >= 90 && marks <= 100) {
        return "A";
    } else if (marks >= 80 && marks < 90) {
        return "B";
    } else if (marks >= 70 && marks < 80) {
        return "C";
    } else if (marks >= 60 && marks < 70) {
        return "D";
    } else if (marks >= 0 && marks < 60) {
        return "F";
    } else {
        return "Invalid marks";
    }
}
function grade(marks, callback) {
    console.log("Calculating grade for marks:", marks);
    const result = callback(marks);
    console.log("Grade:", result);
}