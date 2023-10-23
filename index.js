document.querySelector("button").addEventListener("click", function() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;

    if (name1 === "" || name2 === "") {
        alert("Please insert name/names");
        return;
    }

    var FriendshipratePercentage = Math.random() * 100;
    FriendshipratePercentage = Math.floor(FriendshipratePercentage) + 1;

    document.querySelector("h1").innerHTML= "The Friendshiprate between " + name1 + " and " + name2 + " is " + FriendshipratePercentage + "%!";
    console.log("The Friendshiprate between " + name1 + " and " + name2 + " is " + FriendshipratePercentage + "%!");

    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
});