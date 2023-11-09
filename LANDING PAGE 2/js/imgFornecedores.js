function expandItem(item) {
    let paputs = document.getElementsByClassName("card-fotos>card-image")
    console.log (paputs)
    item.style.width = "600px"; // Expande a largura do item
    item.style.height = "400px"; // Expande a altura do item
    item.style.transition = "0.3s";
}

  function resetItem(item) {
    item.style.width = "300px"; // Largura original
    item.style.height = "200px"; // Altura original
}

// document.addEventListener("DOMContentLoaded",let paputs=function(){
//     const paputs = document.querySelectorAll(".card-fotos")
//     return paputs
// })

// console.log(paputs)