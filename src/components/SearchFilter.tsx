import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFilterProps {
  city: string;
  setCity: (city: string) => void;
  state: string;
  setState: (state: string) => void;
  onSearch: () => void;
  variant?: "hero" | "compact";
}

const states = [
  "Maharashtra",
  "Karnataka",
  "Delhi",
  "Tamil Nadu",
  "Gujarat",
  "Rajasthan",
];

const cities: Record<string, string[]> = {
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
  Karnataka: ["Bangalore", "Mysore", "Mangalore"],
  Delhi: ["New Delhi", "Noida", "Gurgaon"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
};

const SearchFilter = ({
  city,
  setCity,
  state,
  setState,
  onSearch,
  variant = "compact",
}: SearchFilterProps) => {
  const isHero = variant === "hero";

  return (
    <div
      className={`flex flex-col sm:flex-row gap-3 ${
        isHero
          ? "bg-card p-4 sm:p-6 rounded-2xl shadow-lg border border-border"
          : "bg-secondary/50 p-3 rounded-xl"
      }`}
    >
      <Select value={state} onValueChange={(val) => { setState(val); setCity(""); }}>
        <SelectTrigger className={`${isHero ? "h-12 sm:h-14" : "h-10"} flex-1 bg-background`}>
          <SelectValue placeholder="Select State" />
        </SelectTrigger>
        <SelectContent>
          {states.map((s) => (
            <SelectItem key={s} value={s}>
              {s}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={city} onValueChange={setCity} disabled={!state}>
        <SelectTrigger className={`${isHero ? "h-12 sm:h-14" : "h-10"} flex-1 bg-background`}>
          <SelectValue placeholder={state ? "Select City" : "Select state first"} />
        </SelectTrigger>
        <SelectContent>
          {state &&
            cities[state]?.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>

      <Button
        onClick={onSearch}
        variant={isHero ? "hero" : "accent"}
        size={isHero ? "xl" : "default"}
        className={isHero ? "sm:w-auto w-full" : ""}
      >
        <Search className="w-5 h-5" />
        <span className={isHero ? "" : "hidden sm:inline"}>Search</span>
      </Button>
    </div>
  );
};

export default SearchFilter;
