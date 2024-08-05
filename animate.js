document.addEventListener('DOMContentLoaded', function() {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var letter_count = 0;
    var el = document.getElementById("loading");
    var word = el.textContent.trim();
    var finished = false;

    el.innerHTML = "";
    for (var i = 0; i < word.length; i++) {
        el.innerHTML += "<span>" + word.charAt(i) + "</span>";
    }

    setTimeout(write, 75);
    var incrementer = setTimeout(inc, 1000);

    function write() {
        for (var i = letter_count; i < word.length; i++) {
            var c = Math.floor(Math.random() * alphabet.length);
            el.getElementsByTagName("span")[i].textContent = alphabet[c];
        }
        if (!finished) {
            setTimeout(write, 75);
        }
    }

    function inc() {
        el.getElementsByTagName("span")[letter_count].textContent = word[letter_count];
        el.getElementsByTagName("span")[letter_count].classList.add("glow");
        letter_count++;
        if (letter_count >= word.length) {
            finished = true;
            setTimeout(reset, 1500);
        } else {
            setTimeout(inc, 1000);
        }
    }

    function reset() {
        letter_count = 0;
        finished = false;
        setTimeout(inc, 1000);
        setTimeout(write, 75);
        var spans = el.getElementsByTagName("span");
        for (var i = 0; i < spans.length; i++) {
            spans[i].classList.remove("glow");
        }
    }
});
