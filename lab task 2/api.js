$(document).ready(function () {
    $.ajax({
        url: 'https://usmanlive.com/wp-json/api/stories',
        dataType: 'json',
        success: function (listings) {
            displayListings(listings);
        },
        error: function (error) {
            console.error('Error fetching listings:', error);
        }
    });
});

function displayListings(listings) {
    const listingContainer = $('#listingContainer');
    listingContainer.empty();

    $.each(listings, function (index, listing) {
        const card = $('<div class="card mb-3"></div>');
        const cardBody = $('<div class="card-body"></div>');

        cardBody.append('<h5 class="card-title">' + listing.title + '</h5>');
        cardBody.append('<p class="card-text">Content: ' + listing.content + '</p>');
        // cardBody.append('<p class="card-text">Location: ' + listing.location + '</p>');
        // cardBody.append('<p class="card-text">Description: ' + listing.description + '</p>');

        card.append(cardBody);
        listingContainer.append(card);
    });
}
