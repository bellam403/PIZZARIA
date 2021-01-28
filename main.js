menu_list_array = [
    "Margherita Pizza","Double-Cheese-Margherita Pizza","Farm-House Pizza","Peppy-Paneer Pizza",
    "Mexican-Green-Wave Pizza","Deluxe-Veggie Pizza","Veg-Extravaganza-Pizza","CHEESE-N-CORN Pizza","PANEER-MAKHANI Pizza",
    "VEGGIE-PARADISE Pizza","FRESH-VEGGIE Pizza","Indi-Tandoori-Paneer Pizza"
];

function list() {
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for (var i=0;i<menu_list_array.length;i++) {
htmldata=htmldata+'<li>'+ menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display-menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array;i++) {
        htmldata=htmldata+"<div class='card'>"+ "<img src='https://www.flaticon.com/premium-icon/icons/svg/2816/2816823.svg'/>"+menu_list_array[i]+'</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata
}
