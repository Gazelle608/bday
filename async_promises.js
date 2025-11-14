// TODO: Create a Promise that simulates fetching user data
// - The Promise should resolve after 1.5 seconds
// - If userId is positive, resolve with user data object
// - If userId is negative or zero, reject with an error
// - User data should include: id, name, email, and registrationDate// TODO: Create a function that uses template literals for HTML generation
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        const names = [
          "Alice Johnson",
          "Bob Smith",
          "Carol Davis",
          "David Wilson",
          "Emma Brown",
        ];
        const name = names[userId % names.length] || `User ${userId}`;
        resolve({
          id: userId,
          name: name,
          email: `${name.toLowerCase().replace(" ", ".")}@gmail.com`,
          registrationDate: new Date().toISOString().split("T")[0],
        });
      } else {
        reject(
          new Error(`Invalid user ID: ${userId}. User ID must be positive.`)
        );
      }
    }, 1500);
  });
}

function generateUserCard(user) {
  return `
    <div class="user-card">
      <h2>${user.name}</h2>
      <p>Email: ${user.email}</p>
      <p>Registered on: ${user.registrationDate}</p>
    </div>
  `;
}

fetchUserData(7).then((user) => console.log("Enhanced user:", user));

fetchUserData(3)
  .then((user) => {
    const userCardHTML = generateUserCard(user);
    console.log("User Card HTML:", userCardHTML);
  })
  .catch((error) => console.error("Error fetching user data:", error));

// TODO: Create a Promise that simulates fetching user posts
// - Should resolve after 1 second
// - Return an array of post objects
// - Each post should have: id, title, content, and userId
// - If userId doesn't exist, reject with error
function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        const posts = [
          { id: 1, title: "First Post", content: "This is the first post.", userId },
          { id: 2, title: "Second Post", content: "This is the second post.", userId },
          { id: 3, title: "Third Post", content: "This is the third post.", userId },
        ];
        resolve(posts);
      } else {
        reject(new Error(`No posts found for user ID: ${userId}`));
      }
    }, 1000);
  });
}

fetchUserPosts(2)
  .then((posts) => console.log("User Posts:", posts))
  .catch((error) => console.error("Error fetching user posts:", error));

// TODO: Create a function that chains multiple Promises together
// - First fetch user data
// - Then fetch their posts
// - Combine the data into a single object
// - Handle any errors that occur in the chain
function fetchUserDataAndPosts(userId) {
  return fetchUserData(userId)
    .then((user) => {
      return fetchUserPosts(userId).then((posts) => {
        return { ...user, posts };
      });
    })
    .catch((error) => {
      console.error("Error in fetching user data and posts:", error);
      throw error;
    });
}

fetchUserDataAndPosts(4)
  .then((data) => console.log("User Data and Posts:", data))
  .catch((error) => console.error("Final Error:", error));

// TODO: Convert the above Promise chain to use async/await
// - Use try/catch for error handling
// - Log each step of the process
// - Return combined user and posts data
async function fetchUserDataAndPostsAsync(userId) {
  try {
    console.log("Fetching user data...");
    const user = await fetchUserData(userId);
    console.log("User data fetched:", user);
    console.log("Fetching user posts...");
    const posts = await fetchUserPosts(userId);
    console.log("User posts fetched:", posts);
    return { ...user, posts };
  } catch (error) {
    console.error("Error in async fetching user data and posts:", error);
    throw error;
  }
}

fetchUserDataAndPostsAsync(5)
  .then((data) => console.log("Async User Data and Posts:", data))
  .catch((error) => console.error("Final Async Error:", error));

// TODO: Create a function that fetches multiple users in parallel
// - Take an array of userIds
// - Fetch all users simultaneously using Promise.all
// - Handle errors for individual user fetches
// - Return array of successfully fetched users
function fetchMultipleUsers(userIds) {
  const userPromises = userIds.map((id) =>
    fetchUserData(id).catch((error) => {
      console.error(`Error fetching user ID ${id}:`, error);
      return null;
    })
  );
  return Promise.all(userPromises).then((users) => users.filter((user) => user !== null));
}

fetchMultipleUsers([1, 2, -3, 4, 0, 5])
  .then((users) => console.log("Fetched Multiple Users:", users))
  .catch((error) => console.error("Error fetching multiple users:", error));

// TODO: Create a function that fetches users and their posts in parallel
// - Fetch user data for multiple users
// - Once user data is received, fetch all their posts in parallel
// - Combine user and posts data
// - Handle errors appropriately
function fetchUsersAndPosts(userIds) {
  const userPromises = userIds.map((id) =>
    fetchUserData(id)
      .then((user) =>
        fetchUserPosts(id).then((posts) => ({
          ...user,
          posts,
        }))
      ) .catch((error) => {
        console.error(`Error fetching data for user ID ${id}:`, error);
        return null;
      })
  );
  return Promise.all(userPromises).then((users) => users.filter((user) => user !== null));
}

fetchUsersAndPosts([1, 2, 3])
  .then((data) => console.log("Fetched Users and Posts:", data))
  .catch((error) => console.error("Error fetching users and posts:", error));

// TODO: Test success cases
// - Test single user fetch
// - Test multiple user fetch
// - Test error handling
fetchUserData(10)
  .then((user) => console.log("Test Single User Fetch:", user))
  .catch((error) => console.error("Test Single User Fetch Error:", error));
fetchMultipleUsers([6, 7, 8])
  .then((users) => console.log("Test Multiple User Fetch:", users))
  .catch((error) => console.error("Test Multiple User Fetch Error:", error));
fetchUserData(-1)
  .then((user) => console.log("Test Error Handling:", user))
  .catch((error) => console.error("Test Error Handling Caught:", error));
