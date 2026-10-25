console.log("Rap Den is running")

const songs = [
  {    
    title:"lose yourself",
    artist:"Eminem",
    file:"lose-yourself.html",
    image:"images/eminem.jpg"
  },
  {
    title:"God's plan",
    artist:"Drake",
    file:"god's-plan.html",
    image:"images/drake.jpg"
  },
  {
    title:"Humble",
    artist:"Kendrick Lamar",
    file:"humble.html",
    image:"images/kendrick lamar.jpg"
  },
  {
    title:"Mockingbird",
    artist:"Eminem",
    file:"mockingbird.html",
    image:"images/eminemmock.jpg"
  },
  {
    title:"Not Like Us",
    artist:"Kendrick Lamar",
    file:"not-like-us.html",
    image:"images/kendrick lamar not.jpg"
  },
  {
    title:"Sicko Mode",
    artist:"Travis Scott",
    file:"sicko-mode.html",
    image:"images/travis scott.jpg"
  },
  {
    title:"Greatness",
    artist:"Quavo",
    file:"greatness.html",
    image:""
  }
];

    const searchForm =
    document.getElementById("searchForm"); const
    searchInput =
    document.getElementById("searchInput"); const
    songMessage =
    document.getElementById("searchMessage");
    const songResults =
    document.getElementById("songResults");

    console.log("Songs array:",songs);
    console.log("Is array:", Array.isArray(songs))

    searchForm.addEventListener("submit",
        function(event) {
          event.preventDefault();
        
            const query =
            searchInput.value.trim().toLowerCase();
            songResults.replaceChildren();

            const results = songs.filter(song =>
                song.file.toLowerCase().includes(query)||
                song.artist.toLowerCase().includes(query)
            );

            if (results.length === 0) {
                searchMessage.textContent = "No songs found.";
                return;
            }

            searchMessage.textContent ="Search results:";

            results.forEach(song => {
               const card = document.createElement("div");
               card.className ="song-card";

               const image = document.createElement("img");
               image.src = song.image;
               image.alt = song.artist;
               image.className ="song-image";
               card.appendChild(image)

               const title = document.createElement("h3");
               title.textContent = song.title;

               const artist = document.createElement("p");
               artist.textContent = song.artist;

               const link = document.createElement("a")
               link.href = song.file;
               link.textContent = "View Lyrics `n ";

               card.append(image, title, artist, link);
               songResults.appendChild(card);
              });
        });  