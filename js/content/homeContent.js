function homeContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

    var content = `
        <h2>Introduction to my Experience</h2>
        <p>
                During my time at the house show for Spencer LaJoye I really feel like I had my eyes open to a perspective
            and world view that I have never had the opportunity to experience in my life. In the pages listed in the navigation
            bar above you can look through pages that detail my experience
        </p>
        
        <h3>Video:</h3>
        <iframe width="320" height="562" src="https://www.youtube.com/embed/L2HDmEYdkPk" title="spencer_lajoye" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h3>Proof of Attendance:</h3>
    `;
    var ele = document.createElement("div");
    ele.innerHTML = content;

    var proofImage = document.createElement("img");
    proofImage.src = "pics/proof.jpeg";
    ele.appendChild(proofImage);

    return ele;
}