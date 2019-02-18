// ===============================================================================
// DATA
// Below data will hold the information of all friends that have answered the 
// survey already.
// ===============================================================================

var friendsArray = [
    {
        name: "Guy 1",
        photo: "https://randomuser.me/api/portraits/men/21.jpg",
        scores: [5,1,4,4,5,1,2,5,4,1]
    },
    {
        name: "Girl 1",
        photo: "https://randomuser.me/api/portraits/women/33.jpg",
        scores: [5,1,4,4,5,1,2,5,4,1]
    },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;