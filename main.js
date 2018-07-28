//function Loadjson(file,callback) {
  //var xhr =new XMLHttpRequest();
//  xhr.overrideMimeType("application/json");
  //xhr.open("GET",file,true);
//  xhr.onreadystatechange=function() {
  //  if (xhr.readyState===4 && xhr.status=="200") {
//  callback(xhr.responseText);

//    }
//  };
//  xhr.send(null);
//Loadjson("data.json",function(text) {
  //var data=JSON.parse(text);
  //console.log(data);
//  basics(data.details);
  //careerinfo(data.carrer);
  //education(data.education);
//  skills(data.skills);
//  achivements(data.achivements);
//})
function loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error("error"));
      }
    })
  })

}
var newfile = loadjson("data.json");
newfile.then(data=>{console.log(data);
 basics(data.details);
careerinfo(data.carrer);
education(data.education);
  skills(data.skills);
  achivements(data.achivements);

})
var child1 = document.querySelector(".childone");
function basics(det) {
  var image = document.createElement("img")
  var name = document.createElement("name")
  var phone =document.createElement("h4")
  image.src = det.image;
  name.textContent = det.name;
  phone.textContent = det.phoneno;
  child1.appendChild(image);
  child1.appendChild(name);
  child1.appendChild(phone);

  var email = document.createElement("a");
  email.href = "mailto:anumalalohitha2015@gmail.com";
  email.textContent = det.email;
  child1.appendChild(email);

  var add = document.createElement("h2");
  add.textContent = "Address";
  child1.appendChild(add);

  var hr = document.createElement("hr");
  child1.appendChild(hr);

  var p = document.createElement("p");
  p.textContent = det.address;
  child1.appendChild(p);
}
var child2 = document.querySelector(".childtwo");
function careerinfo(info) {
var heading = document.createElement("h2");
heading.textContent = "Career Objective";
child2.appendChild(heading);

var hr = document.createElement("hr");
child2.appendChild(hr);


var c = document.createElement("h2");
c.textContent = info.info;
child2.appendChild(c);

}
function education(edu) {
  var hd = document.createElement("h2");
  hd.textContent = "Educational Qualification";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var table1 = document.createElement("table");
  table1.border = "1";
  child2.appendChild(table1);

  tabledata="";
  for(i=0;i<edu.length;i++){
    tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";

  }
  table1.innerHTML=tabledata;
}
function skills(skillsinfo) {
  var hd = document.createElement("h2");
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<skillsinfo.length;i++)
  {
    var title = document.createElement("h4");
    title.textContent=skillsinfo[i].title;
    child2.appendChild(title);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent = skillsinfo[i].info;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
  }

}
function achivements(info) {
  var hd = document.createElement("h2");
  child2.appendChild(hd);

var title = document.createElement("hr");
child2.appendChild(title);

var title = document.createElement("h4");
title.textContent=info.title;
child2.appendChild(title);

var eduul = document.createElement("ul");
var eduli = document.createElement("li");
eduli.textContent = info.info;
eduul.appendChild(eduli);
child2.appendChild(eduul);
}
function openpage(){
  window.open("resume.html","_self",true)
  
}
