$(document).ready(function () {
    // Initial load of stories
    fetchStories();

    // Submit form to add story
    $('#addStoryForm').submit(function (event) {
        event.preventDefault();
        addStory($(this).serialize());
    });

    // Function to fetch stories
    function fetchStories() {
        $.ajax({
            url: 'https://usmanlive.com/wp-json/api/stories',
            dataType: 'json',
            success: function (stories) {
                displayStories(stories);
            },
            error: function (error) {
                console.error('Error fetching stories:', error);
            }
        });
    }

    // Function to display stories
    function displayStories(stories) {
        const listingContainer = $('#listingContainer');
        listingContainer.empty();

        $.each(stories, function (index, story) {
            const card = $('<div class="card mb-3"></div>');
            const cardBody = $('<div class="card-body"></div>');

            cardBody.append('<h5 class="card-title">' + story.title + '</h5>');
            cardBody.append('<p class="card-text">Content: ' + story.content + '</p>');

            const deleteBtn = $('<button class="btn btn-danger">Delete</button>');
            deleteBtn.click(function () {
                deleteStory(story.id);
            });

            cardBody.append(deleteBtn);
            card.append(cardBody);
            listingContainer.append(card);
        });
    }
});
