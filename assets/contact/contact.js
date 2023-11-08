function initMap() {
    var service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({
        placeId: 'ChIJPTR6S6GOQQ0RI3FnJDVUIvw' // Reemplaza con el ID del lugar que desees obtener reseñas
    }, function (place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            if (place.reviews && place.reviews.length > 0) {
                var reviewsContainer = document.getElementById('reviewsContainer');
                for (var i = 0; i < place.reviews.length; i++) {
                    var review = place.reviews[i];
                    var reviewCard = createReviewCard(review);
                    reviewCard.style = `--i:${i+1};`;
                    reviewsContainer.appendChild(reviewCard);
                }
            } else {
                console.log('No se encontraron reseñas para este lugar.');
            }
        }
    });
}

function createReviewCard(review) {
    // Create a div element with id "singleReview"
    const reviewCard = document.createElement("div");
    reviewCard.id = "singleReview";

    // Create an img element with id "googleIcon" and set its src and alt attributes
    const googleIconImg = document.createElement("img");
    googleIconImg.id = "googleIcon";
    googleIconImg.src = "../_media/img/googleIcon.png";
    googleIconImg.alt = "Google Icon";

    // Create a div element for the reviewer information and its content
    const reviewerInfoDiv = document.createElement("div");
    const nameTimeDiv = document.createElement("div");
    const reviewerImage = document.createElement("img");
    reviewerImage.src = review.profile_photo_url;
    const reviewerName = document.createElement("h3");
    reviewerName.textContent = review.author_name;
    const reviewDate = document.createElement("h4");
    reviewDate.textContent = review.relative_time_description;
    reviewerInfoDiv.appendChild(reviewerImage);

    nameTimeDiv.appendChild(reviewerName);
    nameTimeDiv.appendChild(reviewDate);

    reviewerInfoDiv.appendChild(nameTimeDiv);

    // Create a div element for the star rating and its content
    const starRatingDiv = document.createElement("div");
    for (let index = 0; index < review.rating; index++) {
        starRatingDiv.textContent += "⭐";
    }

    // Create a paragraph element for the review text and set its content
    const reviewText = document.createElement("p");
    reviewText.textContent = review.text;

    // Append all the created elements to the main "singleReview" div
    reviewCard.appendChild(googleIconImg);
    reviewCard.appendChild(reviewerInfoDiv);
    reviewCard.appendChild(starRatingDiv);
    reviewCard.appendChild(reviewText);

    return reviewCard;
}