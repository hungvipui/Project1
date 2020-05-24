function localStorage1(){
    var select1= document.getElementById("select1");
    var indexSelect1 = select1.selectedIndex;
    var resultSelect1 = select1.options[indexSelect1].text;
    localStorage.setItem("select1",resultSelect1);
    var select2= document.getElementById("select2");
    var indexSelect2 = select2.selectedIndex;
    var resultSelect2 = select2.options[indexSelect2].text;
    localStorage.setItem("select2",resultSelect2);
    var name= document.getElementById("name").value;
    localStorage.setItem("name",name);
    localStorage.setItem("index",indexSelect2);
    
    
    
}
