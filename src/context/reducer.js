export default function reducer(state, action) {
  let list = [];
  switch (action.type) {
    case "donne":
      state.forEach((item) => {
        item.todoname === action.name
          ? list.push({ ...item, isDone: !item.isDone })
          : list.push(item);
      });
      return list;
    case "remove":
      return state.filter((item) => item.todoname !== action.name);
    case "add":
      return [...state, action.newItem];
    case "init":
      return [...action.data];
    default:
      break;
  }
}
