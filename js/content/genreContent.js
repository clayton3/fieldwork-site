function genreContent(){
    var content = `
        <h2>What is Folk Music:</h2>
        <p>
            Folk music is a genre that can vary pretty greatly in terms of what it represents and how it sounds depending on the artist you listen to. It originates from the German word "volk", which is a rather fitting term as it translates to "the people" and folk is truly the music of the people. 
        </p>
    `;

    var ele = document.createElement("div");
    ele.innerHTML = content;

    return ele;
}