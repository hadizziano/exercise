function UserList({ users = { name: "hadi" } }) {
  users.map((user) => {
    <div> {user.name}</div>;
  });
}
export default UserList;

export async function fetchApiData() {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  const takendata = await response.json();
  console.log(takendata);
  return { props: { users: takendata } };
}
