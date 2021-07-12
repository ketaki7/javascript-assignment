let cards=[
    {
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
        value:1, //to check if the value matches or not
        status:"closed" //if the card is open or closed
    },
    {
        image:"https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871998-aif13.jpg?resize=480:*",
        value:1, //to check if the value matches or not
        status:"closed" //if the card is open or closed
    },
    {
        image:"https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/112758/Rocket-Raccoon-In-Avengers-Endgame-Sony-Xperia-X-X-iphone-8-wallpaper-ilikewallpaper_com_750.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/112758/Rocket-Raccoon-In-Avengers-Endgame-Sony-Xperia-X-X-iphone-8-wallpaper-ilikewallpaper_com_750.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://images.squarespace-cdn.com/content/v1/5aba88b389c172458a37fbce/1556411419159-UMN4TJNH0WDDAUXLO3DV/IMG_0122.JPG",
        value:4,
        status:"closed"
    },
    {
        image:"https://images.squarespace-cdn.com/content/v1/5aba88b389c172458a37fbce/1556411419159-UMN4TJNH0WDDAUXLO3DV/IMG_0122.JPG",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/24/66/63/2466631aded1e3fa9ab21b44142577b6.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/24/66/63/2466631aded1e3fa9ab21b44142577b6.jpg",
        value:5,
        status:"closed"
    },

]

//durnsten shuffling algorithm

let temp;

for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;


function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`

            <div class="card" style="background-image:url('${card.image}')">
                <div class=" overlay ${card.status}" onclick="openCard('${index}')">
                </div>
            </div>

        `;
    });

    document.getElementById('cards').innerHTML=cardsString;
}

displayCards(cards);

let score=0;
let cardCount=1;
let val1=null,val2=null;
function openCard(index){

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;

    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            //reset after one guess
            val1=null;
            val2=null;

            cardCount=1;
        }
        else{
            alert("Game over")
            location.reload();

        }
    }

    displayCards(cards);

}

















