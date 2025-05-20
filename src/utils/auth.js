export function getUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users;
}

export function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

export function saveCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

export function registerUser(email, password) {
  const users = getUsers();

  const exists = users.find(u => u.email === email);
  if (exists) return { success : false, message: "User already exists" };

  const newUser = { email, password };
  users.push(newUser);
  saveUsers(users);

  localStorage.setItem("currentUser", JSON.stringify(newUser));

  return { success: true };
}

export function loginUser(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if(!user) {
    return { success: false, message: "Invalid email or password" };
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  return { success: true };
}

export function updateUserCareer(career) {
  const users = getUsers();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const updateUsers = users.map(user => {
    if (user.email === currentUser.email) {
      user.career = career;
      localStorage.setItem("currentUser", JSON.stringify(user));
    }
    return user;
  });
  saveUsers(updateUsers);
}

export function updateUserBackground(firstName, lastName, age, resumeName) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const updatedUsers = users.map(user => {
    if (user.email === currentUser.email) {
      const updatedUser = {
        ...user,
        firstName,
        lastName,
        age,
        resumeName
      };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      return updatedUser;
    }
    return user;
  });

  localStorage.setItem("users", JSON.stringify(updatedUsers));
}