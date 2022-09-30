function artistContent(){
    var content = `
        <h2>Information about Spencer LaJoye:</h2>
        <p>
            Spencer LaJoye is an artist that writes and performs music in the genre of folk/pop.
            Spencer writes of their experiences with finding their identity and what they went through in the
            evangelical church. Through their music Spencer is able to make you connect with their 
        </p>
    `;

    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;
}