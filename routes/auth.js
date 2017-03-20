const config = require('./../config');

module.exports = (req, res) => {
    if (config.access_token.length) {
        res.json({
            "value": "access token is ready, no need in new one",
            "url": null
        });
        return;
    }
    const URL = "https://oauth.vk.com/authorize?" + 
                    "redirect_uri=http://localhost:8080/auth" + 
                    "&response_type=token" +
                    "&scope=offline" + 
                    "&v=5.62" + 
                    "&display=page" +
                    "&client_id=" + config.client_id;
    res.json({
        "value": "Auth via VK.com",
        url: URL
    });
}