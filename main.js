var wayne = {
    title: "The Great One",
    name: "Wayne Gretsky",
    bio: "NHL Legend & Scoring Leader",
    image: "https://s-media-cache-ak0.pinimg.com/originals/b9/1c/b2/b91cb2af28bbf52bd1fb8ec568d6d12f.jpg",
    lifespan: {
        birth: 1747,
        death: "N/A"
    }
}
var kobe = {
    title: "The Black Mamba",
    name: "Kobe Bryant",
    bio: "Lakers Legend and 5x NBA Champion",
    image: "http://www.aretehoops.com/wp-content/uploads/2015/06/460255510.0.jpg",
    lifespan: {
        birth: 1978,
        death: "N/A"
    }
}
var terry = {
    title: "The Blonde Bomber",
    name: "Terry Bradshaw",
    bio: "Steelers Legend & Co-Host of FOX NFL Sunday",
    image: "https://davidmandre.files.wordpress.com/2011/12/bradshaw2.jpg",
    lifespan: {
        birth: 1948,
        death: "N/A"
    }
}
var jerome = {
    title: "The Bus",
    name: "Jerome Bettis",
    bio: "Steelers Legend",
    image: "http://www.post-gazette.com/.media/2/2015/06/09/d85463a3-41fb-4837-b348-31309c4890b8.jpg",
    lifespan: {
        birth: 1972,
        death: "N/A"
    }
}

var peepsArray = [];
peepsArray.push(wayne, kobe, terry, jerome);

var input = $("#textInput");

// Populate Cards
peepsArray.forEach(function(peep, index) {
    $('#peepsDIV').append(` 
        <div class="col-sm-6 col-md-3 card">
        <div class="thumbnail" id=${index}>
        <h3>${peep.title}</h3>
        <img class="image"src="${peep.image}" alt="...">
        <div class="caption">
        <h2>${peep.name}</h2>
        <p id="bio">${peep.bio}</p>
        <p>${peep.lifespan.birth} - present</p>
        </div>
        </div>
        </div>`);
});

// Set Alternating Colors for the Cards
$(".thumbnail").each(function(index) {
    if (index % 2 === 0) { // Even 
        $(this).addClass("blue");
    } else { // Odd
        $(this).addClass("navy");
    }
});

// Editing Functionality
$(".thumbnail").click(function() {
    $(".thumbnail").removeClass("selected");
    $(this).addClass("selected");

    input.focus();
    var bio = $(this).find("#bio");
    input.val(bio.text());
    var clickedCard = $(this);

    // Only edits bio text in the currently selected card
    input.keyup(function() {
        if (clickedCard.hasClass("selected")) {
            bio.text(input.val());
        }
    });

    input.keypress(function(e) {
        if (e.which === 13) {
            clickedCard.removeClass("selected")
            input.val("");
        }
    });
});
