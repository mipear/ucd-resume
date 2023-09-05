function fetchGitHubInformation(event) {

    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);

        $.when(
            $.getJSON('https:..api.github.com/users/${username}')
        ).then(
            function(response) {
                var userData = response;
                $arguments("#gh-user-data").html(userInformtationHTML(userData));                
            }, function(errorResponse) {
                if (errorResponse.status === 404) {
                    $arguments("#gh-user-data").html(`<h2>No info found for user ${username}</h2>`);
                } else {
                    console.log(errorResponse);
                    $arguments("#gh-user0data").html(
                        `<h2>Error: ${errorResponse.responseJSON.message</h2>`);
                    )
                }
            }
        )
}