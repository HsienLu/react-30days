import {Link} from "react-router";

function DayList() {
  return (
    <>
      <ul>
        <li>
          <Link to="/Day1">Day1</Link>
        </li>
        <li>
          <Link to="/Day2">Day2</Link>
        </li>
      </ul>
    </>
  );
}
export default DayList;
