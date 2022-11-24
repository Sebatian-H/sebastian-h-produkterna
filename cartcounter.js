var count = 0;
// Updaterar totala mängden varor i varukorgen när först öppnar sidan.
updateCart();

document.querySelectorAll('.add-cart').forEach(item => {
    //Utför function för att uppdatera värde på count vid ett klick
    item.addEventListener('click', function(){
        count++;
        //Ändrar tagen med id cart-amount till värdet som count har
        document.getElementById('cart-amount').innerHTML = count;
        // Lägger till hur många gånger man klickat i sessionstorage så att värdet blir detsamma även när man byter sida
        sessionStorage.setItem("amount", count);
    });
  })

document.querySelectorAll('.img-add-cart').forEach(item => {
  //Utför function för att uppdatera värde på count vid ett klick
  item.addEventListener('click', function(){
      count++;
      //Ändrar tagen med id cart-amount till värdet som count har
      document.getElementById('cart-amount').innerHTML = count;
      // Lägger till hur många gånger man klickat i sessionstorage så att värdet blir detsamma även när man byter sida
      sessionStorage.setItem("amount", count);
  });
})


//function som först ändra
function updateCart(){
    count = sessionStorage.getItem("amount");
    //Om amount inte har ett värde kommer count bli Null. Därför om count då är lika med null blir count 0 för att mängden ska visas som 0 och inte null istället
    if (count == null) {
        count = 0;
    };
    document.getElementById('cart-amount').innerHTML = count;
};

