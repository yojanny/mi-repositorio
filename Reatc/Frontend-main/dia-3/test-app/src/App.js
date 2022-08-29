import logo from "./logo.svg";
import "./App.css";
import UserList from "./Components/UserList";
import ShowChildren from "./Components/ShowChildren";

const userList = [
  {
    id: 1,
    first_name: "Sabine",
    last_name: "Twelvetree",
    email: "stwelvetree0@webnode.com",
    gender: "Female",
    avatar: "https://robohash.org/nihilveritatisquas.png?size=50x50&set=set1",
  },
  {
    id: 2,
    first_name: "Rourke",
    last_name: "Janousek",
    email: "rjanousek1@example.com",
    gender: "Male",
  },
  {
    id: 3,
    first_name: "Felic",
    last_name: "Bayman",
    email: "fbayman2@usda.gov",
    gender: "Male",
    avatar:
      "https://robohash.org/inventoreexcepturineque.png?size=50x50&set=set1",
  },
  {
    id: 4,
    first_name: "Brinna",
    last_name: "Baffin",
    email: "bbaffin3@ow.ly",
    gender: "Female",
    avatar: "https://robohash.org/quilaudantiumodit.png?size=50x50&set=set1",
  },
  {
    id: 5,
    first_name: "Courtenay",
    last_name: "Fillon",
    email: "cfillon4@tumblr.com",
    gender: "Female",
    avatar:
      "https://robohash.org/exercitationemrerumcommodi.png?size=50x50&set=set1",
  },
  {
    id: 6,
    first_name: "Rebecca",
    last_name: "Bainton",
    email: "rbainton5@github.com",
    gender: "Female",
    avatar:
      "https://robohash.org/excepturivoluptascorporis.png?size=50x50&set=set1",
  },
  {
    id: 7,
    first_name: "Davidson",
    last_name: "Timlin",
    email: "dtimlin6@slashdot.org",
    gender: "Male",
    avatar: "https://robohash.org/repudiandaeeumearum.png?size=50x50&set=set1",
  },
  {
    id: 8,
    first_name: "Lucretia",
    last_name: "Beggin",
    email: "lbeggin7@cargocollective.com",
    gender: "Bigender",
    avatar:
      "https://robohash.org/solutasimiliquecupiditate.png?size=50x50&set=set1",
  },
  {
    id: 9,
    first_name: "Niall",
    last_name: "Muff",
    email: "nmuff8@skyrock.com",
    gender: "Male",
    avatar: "https://robohash.org/inexplicaborepellat.png?size=50x50&set=set1",
  },
  {
    id: 10,
    first_name: "Hyacintha",
    last_name: "Axcel",
    email: "haxcel9@surveymonkey.com",
    gender: "Female",
    avatar:
      "https://robohash.org/voluptasquivoluptatibus.png?size=50x50&set=set1",
  },
];

function App() {
  return (
    <main>
      <ShowChildren>
        Esto va a estar en children dentro de las props de ShowChildren, pueden
        ser componentes o lo que sea
      </ShowChildren>
      <h1>Lista de usuarios</h1>
      <UserList userData={userList}></UserList>
    </main>
  );
}

export default App;
