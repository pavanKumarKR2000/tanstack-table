import { Button } from "@/components/ui/button";
import PeopleDataTable from "./people/data-table";
import { columns } from "./people/columns";
import { people } from "@/people";

export default function Home() {
  return (
    <main className="container py-10 mx-auto">
      <PeopleDataTable columns={columns} data={people} />
    </main>
  );
}
