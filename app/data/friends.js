// ===============================================================================
// DATA
// Below data will hold the information of all friends that have answered the 
// survey already.
// ===============================================================================

var friendsArray = [{
        "name": "Jackson",
        "photo": "https://randomuser.me/api/portraits/men/70.jpg",
        "scores": ["3", "2", "3", "3", "2", "3", "5", "1", "3", "2"]
    },
    {
        "name": "Liam",
        "photo": "https://randomuser.me/api/portraits/men/23.jpg",
        "scores": ["2", "5", "5", "2", "3", "2", "4", "5", "4", "3"]
    },
    {
        "name": "Noah",
        "photo": "https://randomuser.me/api/portraits/men/5.jpg",
        "scores": ["3", "3", "4", "3", "3", "4", "1", "2", "3", "4"]
    },
    {
        "name": "Aiden",
        "photo": "https://randomuser.me/api/portraits/men/45.jpg",
        "scores": ["1", "1", "3", "2", "2", "1", "3", "2", "4", "3"]
    },
    {
        "name": "Caden",
        "photo": "https://randomuser.me/api/portraits/men/24.jpg",
        "scores": ["3", "1", "5", "4", "4", "1", "4", "4", "3", "4"]
    },
    {
        "name": "Grayson",
        "photo": "https://randomuser.me/api/portraits/men/44.jpg",
        "scores": ["4", "2", "5", "4", "3", "5", "1", "2", "3", "3"]
    },
    {
        "name": "Lucas",
        "photo": "https://randomuser.me/api/portraits/men/37.jpg",
        "scores": ["5", "4", "3", "3", "2", "3", "1", "2", "3", "5"]
    },
    {
        "name": "Mason",
        "photo": "https://randomuser.me/api/portraits/men/33.jpg",
        "scores": ["4", "5", "1", "3", "1", "2", "3", "3", "1", "3"]
    },
    {
        "name": "Olivia",
        "photo": "https://randomuser.me/api/portraits/women/48.jpg",
        "scores": ["2", "5", "2", "1", "3", "5", "4", "2", "5", "3"]
    },
    {
        "name": "Amelia",
        "photo": "https://randomuser.me/api/portraits/women/21.jpg",
        "scores": ["3", "2", "1", "1", "5", "2", "3", "1", "5", "1"]
    },
    {
        "name": "Isla",
        "photo": "https://randomuser.me/api/portraits/women/17.jpg",
        "scores": ["1", "5", "2", "4", "2", "5", "2", "3", "1", "3"]
    },
    {
        "name": "Emily",
        "photo": "https://randomuser.me/api/portraits/women/33.jpg",
        "scores": ["1", "1", "1", "1", "2", "5", "4", "3", "1", "5"]
    },
    {
        "name": "Ava",
        "photo": "https://randomuser.me/api/portraits/women/6.jpg",
        "scores": ["3", "2", "4", "1", "4", "1", "3", "4", "3", "1"]
    },
    {
        "name": "Lily",
        "photo": "https://randomuser.me/api/portraits/women/28.jpg",
        "scores": ["5", "2", "2", "5", "5", "4", "4", "3", "5", "5"]
    },
    {
        "name": "Mia",
        "photo": "https://randomuser.me/api/portraits/women/8.jpg",
        "scores": ["1", "3", "4", "4", "4", "4", "5", "4", "3", "2"]
    },
    {
        "name": "Sophia",
        "photo": "https://randomuser.me/api/portraits/women/36.jpg",
        "scores": ["2", "3", "5", "4", "5", "5", "2", "5", "4", "3"]
    },

];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;