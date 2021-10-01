var button = document.getElementById("generate");
var list = document.getElementById("list");
var boxerList = [
    {
        name: "David Benavidez",
        record: "24-0",
        age: 24,
        highlights: "two time WBC super middleweight champ",
        img: "https://cdn.vox-cdn.com/thumbor/KRTe1GDAnHtlH2hjpFr0kXvFbP8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19723261/1171862593.jpg.jpg"
    },
    {name: "Deontay Wilder",
    record: "44-1",
    age: 35,
    highlights: "held the WBC heavyweight title from 2015-2020",
    img: "https://talksport.com/wp-content/uploads/sites/5/2020/11/Deontay-Wilder-vs-Dominic-Breazeale-May-18_-2019_05_18_2019_Fight_Ryan-Hafey-_-Premier-Boxing-Champions.jpg?strip=all&w=960&quality=100"
},
{
    name: "Errol Spence Jr.",
    record: "27-0",
    age: 31,
    highlights: "current unifed welterweight world champ, having held the IBF title since 2017 and the WBC title since 2019",
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F10%2Ferrol-spence-jr-2-2000.jpg&q=85"
}

]
button.addEventListener("click", function(){

for(var i=0; i < boxerList.length; i++)
{
var li = document.createElement("li");
var card = document.createElement("div");
card.id = "card";
var img = document.createElement("img");
img.src = boxerList[i].img;
card.append(img);
var container = document.createElement("div");
card.append(container);
var h4 = document.createElement("h4");
h4.innerHTML = "Name: " + boxerList[i].name;
var age = document.createElement("h6");
age.innerHTML = "Age: " + boxerList[i].age;
var small = document.createElement("small");
small.innerHTML = "Record: " + boxerList[i].record;
var p = document.createElement("p");
p.innerHTML = "Discription: " + boxerList[i].highlights;
container.append(h4, age, small, p);

li.append(card);
list.appendChild(li);
}
})
