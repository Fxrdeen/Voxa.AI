import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAgentsFilters } from "../../hooks/use-agents-filter";

export const SearchFilter = () => {
  const [filters, setFilters] = useAgentsFilters();
  return (
    <div className="relative">
      <Input
        placeholder="Filter by name"
        className="h-9 bg-white w-[200px] pl-7"
        value={filters.search}
        onChange={(value) => setFilters({ search: value.target.value })}
      />
      <SearchIcon className="absolute top-1/2 -translate-y-1/2 text-muted-foreground left-2 size-4" />
    </div>
  );
};
