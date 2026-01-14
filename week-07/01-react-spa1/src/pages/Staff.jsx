import { useSearchParams } from "react-router";
import { staff } from "../lib/staffData";
import SortOrderForm from "./SortOrderForm";

export default function StaffList() {
  const [searchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort");

  const sortedStaff = [...staff].sort((a, b) => {
    if (sortOrder === "asc") return a.localeCompare(b);
    if (sortOrder === "desc") return b.localeCompare(a);
    return 0;
  });

  return (
    <>
    <br></br>
    <SortOrderForm />
    <ul>
      {sortedStaff.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
    </>
  );
}
