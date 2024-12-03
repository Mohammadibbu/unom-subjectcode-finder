// Data object for subject details
const subjectData = {
    la11a: { name: "Tamil-I", semester: "I" },
    lz11a: { name: "English-I", semester: "I" },
    pz1sa: { name: "Updating soon...", semester: "I" },
    se211: { name: "Python Lab", semester: "I" },
    se21a: { name: "Problem solving using Python", semester: "I" },
    sm3aa: { name: "Allied Mathematics-I", semester: "I" },
    se51c: { name: "Updating soon...", semester: "I" },
    la12a: { name: "Tamil-II", semester: "II" },
    lz12a: { name: "English-II", semester: "II" },
    pz1sc: { name: "Updating soon...", semester: "II" },
    se523: { name: "C++ Lab", semester: "II" },
    su22a: { name: "Object Oriented Programming using C++", semester: "II" },
    sm3ae: { name: "Allied Mathematics-II", semester: "II" },
    su221: { name: "Updating soon...", semester: "II" },
    sz231: { name: "Java Lab", semester: "III" },
    sz23a: { name: "Data Structure", semester: "III" },
    sz23b: { name: "Java Programming", semester: "III" },
    sz23c: { name: "Computer Organization", semester: "III" },
    sz33a: { name: "Financial Accounting", semester: "III" },
    tsseg: { name: "Soft skill", semester: "III" },
    envab: { name: "Environmental Studies", semester: "IV" },
    sz241: { name: "Open Source Technologies Lab", semester: "IV" },
    sz24a: { name: "Computer Networks", semester: "IV" },
    sz24b: { name: "Open Source Technologies", semester: "IV" },
    sz24c: { name: "E-commerce Technologies", semester: "IV" },
    sz34a: { name: "Cost And Management Accounting", semester: "IV" },
    tssen: { name: "Soft skill", semester: "IV" },
    se251: { name: "RDBMS Lab", semester: "V" },
    se252: { name: "OS Lab", semester: "V" },
    se25b: { name: "Operating System", semester: "V" },
    se25c: { name: "Relational Database Management System", semester: "V" },
    su25a: { name: "Software Engineering", semester: "V" },
    sz45c: { name: "Resource Management Techniques", semester: "V" },
    vae5q: { name: "Value Education", semester: "V" },
    sz26a: { name: "Web Design and Development", semester: "VI" },
    sz26b: { name: "Data Mining", semester: "VI" },
    sz26c: { name: "Mobile Application Development", semester: "VI" },
    sz261: { name: "Mobile Application Development Lab", semester: "VI" },
    su46b: { name: "IoT and its Application", semester: "VI" },
    sz26q: { name: "Mini Project", semester: "VI" },
    ces6q: { name: "Extension Activity", semester: "VI" },
};

// Function to display result
function displayResult() {
    const subcode = document.getElementById("sub_code").value.trim().toLowerCase();
    const result = subjectData[subcode];

    if (result) {
        document.getElementById("rslt").innerHTML = `
            <table border='1'>
                <tr><td>SUBJECT NAME</td><td>${result.name}</td></tr>
                <tr><td>SUBJECT CODE</td><td>${subcode.toUpperCase()}</td></tr>
                <tr><td>SEMESTER</td><td>${result.semester}</td></tr>
            </table>`;
    } else {
        alert("Invalid Subject Code...");
        document.getElementById('sub_code').value = "";
        document.getElementById("rslt").innerHTML = "";
    }
}
