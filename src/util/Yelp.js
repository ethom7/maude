//const apiKey = 'yepXQG9L292fbUwddZvDRydl_4DKnrVOFBMR_DQwIzPpkCae5LS0FnR3GTKDDnNzaCO1HZMBEQokYxj4fX-_Y6L6Qm1xbKleBjHTOpNBlOa6G_ETuh513QP0awPMXnYx'; // Insert API key here.

const Yelp = {
    search(term, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://vylwyqxl3e.execute-api.us-west-2.amazonaws.com/beta/${sortBy}?ipAddress=${term}`).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    ip: business.ip,
                    country_name: business.country_name,
                    city: business.city,
                    region_name: business.region_name,
                    zip_code: business.zip_code,
                    time_zone: business.time_zone,
                }));
            }
        });
    }
};

export default Yelp;
