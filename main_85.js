menu_list_array = [ "Veg Margherita Pizza",                  
                    "Chicken Tandoori Pizza",
                    "Veg Supreme Pizza",
                    "Paneer Tikka Pizza",
                    "Deluxe Veggie Pizza",
                    "Veg Extravaganza Pizza"]; //Pizza item names

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
	var item = document.getElementById("add_item").value;
    //Use the push() function to push the item into menu_list_array
    menu_list_array.push(item);
}
