
function update(){
    n=document.getElementById("movie_name").value;
    var result="";
    httprequest=new XMLHttpRequest();
    httprequest.open("GET","http://www.omdbapi.com/?i=tt3896198&apikey=314e468a&t="+n);
    httprequest.send();

    httprequest.onreadystatechange=function(){
    
    if(this.readyState==4 && this.status==200)
    {   
        movie_data=JSON.parse(this.responseText);
        
         
        if(`${movie_data.Title}`=="undefined")
        {
            result=`
        <h2 style="text-align: center">Sorry !!! Your movie details could not be found </h2>
        `
        }
        else
        {      
       
        result=`
        <div id="data">
          <img src="${movie_data.Poster}" alt="Poster of ${movie_data.Title}"/>
          <div id="movie">
            <h2>Title : ${movie_data.Title}</h2>
            <h3>Plot : ${movie_data.Plot}</h3>
            <h3>Genre : ${movie_data.Genre}</h3>
            <h3>Language : ${movie_data.Language}</h3>
            <h3>Actors : ${movie_data.Actors}</h3>
            <h3>IMDB Rating : ${movie_data.imdbRating}</h3>
          
        
          <div id="more" style="display:none">
            <h3>Type : ${movie_data.Type}</h3>
            <h3>Release Year: ${movie_data.Year}</h3>
            <h3>Director : ${movie_data.Director}</h3>
            <h3>Country : ${movie_data.Country}</h3>
            <h3>Awards :${movie_data.Awards}</h3>
            <h3>Run time : ${movie_data.Runtime}</h3>
          </div>
        <button id="btn" onclick="more()">Show more</button>
        </div>
        </div>
       
        `
        }
        document.getElementById("list").innerHTML=result;
    }
    else
    {
        result=`
        <h3 style="text-align: center">Sorry !!! Your movie detail could not be found </h3>
        `
        document.getElementById("list").innerHTML=result;

    }
}
}
function more() {
    var m = document.getElementById("more");
  if (m.style.display === "none") {
    document.getElementById("btn").innerHTML="Hide";  
    m.style.display = "block";
  } else {
    document.getElementById("btn").innerHTML="Show more";
    m.style.display = "none";
  }
    
}
    
