const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

const usersListDiv = document.getElementById("users-list-div");

const usersList = document.createElement("ol");
usersList.style = "list-style:none;";
users.forEach((user)=> {
    const userListItem = document.createElement("li");
    userListItem.id = user.id;
    userListItem.innerText = user.firstName + user.lastName;
    usersList.appendChild(userListItem);
    console.log(usersList);
})

usersListDiv.appendChild(usersList)

    