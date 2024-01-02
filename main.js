let btn = document.querySelector('.btn');
let restaurants = ['Burma burma', 'Church Street Social', "Nando'S", 'Forage', 'The Grill House', 'The Flying Squirrel', '1992 chats - space', 'Cafe Coffee Day', 'My Tea House', 'Hide Out Cafe', 'Havyaka Mess', "McDonald's", 'Hotboxit', 'Biryanis And More', 'Wamama', "Namma Brahmin's Idli", 'Burger King', 'Sunsadm', 'Kotian Karavali Restaurant', 'Mohitesh Hut Roll']
function getRandomRestaurant() {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    return restaurants[randomIndex];
}
let cuisines = ["Cafe, Fast Food", "Italian, Fast Food, Cafe, European", "Cafe", "Pizza, Cafe, Italian", "South Indian", "Burger, Fast Food", " North Indian, Continental, Italian", "Biryani, North Indian, Chinese, Andhra, South Indian", "Asian, Korean, Indonesian, Japanese, Chinese, Thai, Momos", "South Indian", "Burger, Fast Food, Beverages", " South Indian", "South Indian, Biryani", "Rolls, North Indian"]
function getRandomCuisine() {
    const randomIndex = Math.floor(Math.random() * cuisines.length);
    return cuisines[randomIndex];
}
function getRandomDecimal() {
    const randomValue = Math.random() * (5 - 3) + 3;
    return parseFloat(randomValue.toFixed(1));
}
function getRandomCost() {
    const randomValue = Math.random() * (10 - 2) + 2;
    return parseFloat(randomValue.toFixed(1));
}
// btn.addEventListener('click', (e) => {
//     const res = document.querySelector('.restaurant').value;
//     if(res.length == 0) {
//         alert("Please select a restaurant");
//     }
//     else {
//         document.querySelector(".output").style.display = "block";
//         const tableHead = document.querySelector("thead");
//         tableHead.innerHTML = `
//             <tr>
//                 <th>Restaurant</th>
//                 <th>Cuisines</th>
//                 <th>Mean Rating</th>
//                 <th>Cost</th>
//             </tr>
//         `
//         const setTitle = document.querySelector('h2');
//         setTitle.innerHTML = `Top 10 Restaurants like ${res} with similar reviews`;
//         const tableBody = document.querySelector('tbody');
//         let str = '';
        
//         for(let i = 0; i < 10; i++) {
//             str += `
//                 <tr>
//                     <td>${getRandomRestaurant()}</td>
//                     <td>${getRandomCuisine()}</td>
//                     <td>${getRandomDecimal()}</td>
//                     <td>${getRandomCost()}</td>
//                 </tr>
//             `
//         }
//         tableBody.innerHTML = str;
//     }
// })

btn.addEventListener("click", () => {
    let sele = document.querySelector('.restaurant').value;
    console.log("clicked");
    console.log(btn.innerHTML);
    console.log(btn.innerText);
    btn.innerHTML = "Clicked";
    console.log(sele);
})
// btn.innerHTML = "Clicked";