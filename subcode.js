addEventListener("click",function(event){event.preventDefault()});

function findsubcode() {
var sc=document.getElementById('sub_code').value;
let subcode=sc.toLowerCase();
// let loader=document.getElementById("loader");
	console.log(subcode)
	if (subcode==null || subcode=="") {
		alert("Please Enter the Subject Code")
	}
//1st semester
	else if (subcode=="la11a") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td> Tamil-I</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>I</td></tr></table>";
// 		loader.style.display="none"
//      setTimeout(()=>{loader.style.display="none";document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td> Tamil-I</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>I</td></tr></table>";
// },3000);

	}else if (subcode=="lz11a") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td> English-I</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>I</td></tr></table>";

	}
	else if (subcode=="pz1sa") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td> Updating soon...</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>I</td></tr></table>";
        
	}
	else if (subcode=="se211") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td> python Lab</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>I</td></tr></table>";
        
	}
	else if (subcode=="se21a") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td> Problem solving using python</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>I</td></tr></table>";
        
	}else if (subcode=="sm3aa") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td> Allied Mathematics-I</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>I</td></tr></table>";

	}else if (subcode=="se51c") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td> Updating soon...</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>I</td></tr></table>";

	}
//second semeter
	else if (subcode=="la12a") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td> Tamil-II</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>II</td></tr></table>";
	}else if (subcode=="lz12a") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td> English-II</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>II</td></tr></table>";
        
	}
	else if (subcode=="pz1sc") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td> Updating soon...</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>II</td></tr></table>";

	}
	else if (subcode=="se523") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td> C++ Lab</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>II</td></tr></table>";


	}
	else if (subcode=="su22a") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td> Object Oriented Programming using C++</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>II</td></tr></table>";

	}else if (subcode=="sm3ae") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td> Allied Mathematics-II</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>II</td></tr></table>";


	}else if (subcode=="su221") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>  Updating soon...</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>II</td></tr></table>";


	}
//Third semeter
	else if (subcode=="sz231") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>JAVA LAB</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>III</td></tr></table>";

	}else if (subcode=="sz23a") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Data Stucture</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>III</td></tr></table>";

	}
	else if (subcode=="sz23b") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Java Programming</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>III</td></tr></table>";

	}
	else if (subcode=="sz23c") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Computer Organization</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>III</td></tr></table>";


	}
	else if (subcode=="sz33a") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Financial Accounting</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>III</td></tr></table>";


	}else if (subcode=="tsseg") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Soft skill</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>III</td></tr></table>";
        
	}
//Fourth semester
	else if (subcode=="envab") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Environmental studies</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>IV</td></tr></table>";

	}
	else if (subcode=="sz241") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Open Source Technologies LAB</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>IV</td></tr></table>";

	}else if (subcode=="sz24a") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Computer Networks</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>IV</td></tr></table>";

	}
	else if (subcode=="sz24b") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Open Source Technologies</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>IV</td></tr></table>";

	}
	else if (subcode=="sz24c") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>E-commerce Technologies</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>IV</td></tr></table>";

	}
	else if (subcode=="sz34a") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Cost And Management Accounting</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>IV</td></tr></table>";


	}else if (subcode=="tssen") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>soft skill</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>IV</td></tr></table>";

	}
//fifth semester
	else if (subcode=="se251") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>RDBMS LAB</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>V</td></tr></table>";

	}
	else if (subcode=="se252") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>OS LAB</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>V</td></tr></table>";

	}else if (subcode=="se25b") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Operating System</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>V</td></tr></table>";


	}
	else if (subcode=="se25c") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Relational Database Management System</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>V</td></tr></table>";


	}
	else if (subcode=="su25a") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Software Engineering</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>V</td></tr></table>";

	}
	else if (subcode=="sz45c") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Resoure Management Techniques</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>V</td></tr></table>";

	}else if (subcode=="vae5q") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>value education</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>V</td></tr></table>";

	}
//Sixth semester
	else if (subcode=="sz26a") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Web Design and Development</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>VI</td></tr></table>";

	}
	else if (subcode=="sz26b") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Data Mining</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>VI</td></tr></table>";

	}else if (subcode=="sz26c") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Mobile Application Development</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>VI</td></tr></table>";

	}
	else if (subcode=="sz261") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Mobile Application Development LAB</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>VI</td></tr></table>";

	}
	else if (subcode=="su46b") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>IOT and its Application</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>VI</td></tr></table>";

	}
	else if (subcode=="sz26q") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>@Mini Project</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>VI</td></tr></table>";

	}else if (subcode=="ces6q") {
		document.getElementById("rslt").innerHTML="<table border='1'><tr><td>SUBJECT NAME</td><td>Extension Activity</td></tr><tr><td>SUBJECT CODE </td><td> "+sc.toUpperCase()+"</td></tr><tr><td>SEMESTER</td><td>VI</td></tr></table>";

	}else{
		alert("invalid Subject Code...");
       document.getElementById('sub_code').value="";
       document.getElementById("rslt").innerHTML=""


	}
}
