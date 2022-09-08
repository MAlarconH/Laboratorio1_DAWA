const data = [
    {
      id: 1,
      name: "Pepe",
      email: "pepe@gmail.com",
    },
  ];

let id = 1;

// Listar 
export const findAll = () => {
    return data;
};

// Buscar por id
export const findOne = (id) => {
    return data.find((u) => u.id === Number(id));
};

// Create
export const store = (user) => {
    // user.id = data.length + 1;
    user.id = id + 1;
    data.push(user);
    id = user.id
};

// Update
export const update = (id, user) => {
    const index = data.findIndex((u) => u.id === Number(id));

    data(index) = {
        ...data[index],
        ...user,
    };
};

// Delete
export const remove = (id) => {
    const users = data.filter((u) => u.id !== Number(id));
    data.length = 0 // limpiar el array
    data.push(...users);
};