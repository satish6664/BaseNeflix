let Movies=[
    {
        name:"RRR",
        poster:"https://cdn.gulte.com/wp-content/uploads/2021/03/RRR-2.jpg",
        rating:8.9
    }, 
    {
        name:"Leo",
        poster:"https://m.media-amazon.com/images/I/71c2cxxNQIL._AC_UF894,1000_QL80_.jpg",
        rating:7.8
    },
    {
        name:"OG",
        poster:"https://cdn.gulte.com/wp-content/uploads/2023/08/F3KbeTTbAAALoMh-scaled.jpeg",
        rating:9.1
    },
    {
        name:"Pushpa",
        poster:"https://i.pinimg.com/736x/c0/5b/92/c05b9232e2735febae8272e159fde82c.jpg",
        rating:8.9
    },
    {
        name:"Narappa",
        poster:"https://onlookersmedia.in/wp-content/uploads/2020/01/asuran-telugu-remake-first-look-poster-venkateshs-naarappa-3.jpg",
        rating:7.8
    },
    {
        name:"Orange",
        poster:"https://1.bp.blogspot.com/_eewr1b1LpYA/TMJ5GrjukXI/AAAAAAAAJu8/9P_4b6o_hRI/s640/ram_charan_teja_orange_telugu_movie_posters_01.jpg",
        rating:9.1
    },
    {
        name:"Desamuduru",
        poster:"https://m.media-amazon.com/images/M/MV5BNjY4NmEwMzctN2ZkNy00NTAwLTg2OGYtNmUxNTgzMzc3YjI1XkEyXkFqcGdeQXVyNjE2NTgxOTE@._V1_FMjpg_UX1000_.jpg",
        rating:8.9
    },
    {
        name:"Magadheera",
        poster:"https://wallpapercave.com/wp/wp10314725.jpg",
        rating:7.8
    },
    {
        name:"Valmiki",
        poster:"https://wallpapercave.com/wp/wp10314727.jpg",
        rating:9.1
    }
]
function searchMovie()
{
    let movieName=document.getElementById("search").value;

    if(movieName!=="")
    {

        let result=Movies.filter(function(movie)
            {
                // return movie.name===(movieName);
                // return movie.name.includes(movieName);
                return movie.name.toUpperCase().includes(movieName.toUpperCase());
            })

            // console.log(result);
            displayMovies(result);
    }
    else
    {
        displayMovies(Movies);
    }
    // console.log(movieName);
}
// function displayMovie()
// {
//     let movie=document.createElement("div");
//     movie.classList.add("movie");

//     let overlay=document.createElement("div");
//     overlay.classList.add("overlay");

//     movie.appendChild(overlay);
//     console.log(movie);
// }
// displayMovie();

function displayMovies(data)
{
    let htmlString=``;
    for(let i=0;i<data.length;i++)
    {
        // document.getElementById("movies").innerHTML="";

        htmlString=htmlString+`
            <div class="movie">
                <div class="overlay">
                        <div class="video">

                        </div>
                        <div class="details">
                            <h1>${data[i].name}</h1>
                            <h2>IMDB : ${data[i].rating}</h2>
                            <p>Ram Charan | Alia Bhatt | NTR | Shriya | Olivia | Ajay Devgn </p>
                        </div>
                </div>
                <img class="poster" src="${data[i].poster}" alt="">
            </div>`;
    }
        document.getElementById("movies").innerHTML=htmlString;
        // console.log(htmlString);    
}
displayMovies(Movies);