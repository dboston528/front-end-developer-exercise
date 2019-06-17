function showStep(evt, babyStep) {
    var i, bscontent, babytab;

    bscontent = document.getElementsByClassName("bscontent");
    for (i = 0; i < bscontent.length; i++) {
        bscontent[i].style.display = "none";
    }
    babytab = document.getElementsByClassName("babytab");
    for (i = 0; i < babytab.length; i++) {
        babytab[i].className = babytab[i].className.replace(" active", "");
    }
    document.getElementById(babyStep).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();