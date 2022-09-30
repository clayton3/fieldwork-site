function artistContent(){
    var content = `
        <h2>Information about Spencer LaJoye:</h2>
        <p>
            Spencer LaJoye is an artist that writes and performs music in the genre of folk/pop 
        </p>
    `;

    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;
}