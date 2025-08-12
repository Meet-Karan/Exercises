function createCard(img, episodes, title, channelName, type, view ){

    let html = ` <div class="card">
            <div class="img"><img src="${img}" alt="">
             <div class="capsule">${episodes}</div>
            </div>
            <div class="text">
                <h2>${title}</h2>
                <p>${channelName} . ${type} . ${view}</p>
            </div>
        </div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html



}

createCard("hqdefault.jpg","123 eposide","Html Full Cource from biggners to pro", "CodeWithHarrey","Playlist","Full playlist")


createCard("hqdefault.jpg","123 eposide","Html Full Cource from biggners to pro", "CodeWithHarrey","Playlist","Full playlist")