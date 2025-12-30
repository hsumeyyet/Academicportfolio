import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";

interface FilterPanelProps {
  filters: {
    types: string[];
    yearRange: [number, number];
  };
  onFiltersChange: (filters: {
    types: string[];
    yearRange: [number, number];
  }) => void;
}

export function FilterPanel({ filters, onFiltersChange }: FilterPanelProps) {
  const projectTypes = ["Student Submission", "Competition", "Personal Works"];
  const typeColors = {
    "Student Submission": "#3B82F6",
    Competition: "#EF4444",
    "Personal Works": "#10B981",
  };

  const handleTypeToggle = (type: string) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter((t) => t !== type)
      : [...filters.types, type];

    onFiltersChange({ ...filters, types: newTypes });
  };

  const handleYearChange = (value: number[]) => {
    onFiltersChange({
      ...filters,
      yearRange: [value[0], value[1]] as [number, number],
    });
  };

  return (
    <div className="w-64 h-[calc(100vh-65px)] fixed left-0 top-[65px] bg-white border-r border-gray-200 p-6 overflow-y-auto">
      <div className="space-y-8">
        {/* Filters Header */}
        <div>
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4">
            Filters
          </h3>
        </div>

        {/* Type Filter */}
        <div>
          <h4 className="text-sm mb-3">Project Type</h4>
          <div className="space-y-3">
            {projectTypes.map((type) => (
              <div key={type} className="flex items-center gap-2">
                <Checkbox
                  id={type}
                  checked={filters.types.includes(type)}
                  onCheckedChange={() => handleTypeToggle(type)}
                />
                <Label
                  htmlFor={type}
                  className="text-sm cursor-pointer flex-1"
                >
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Year Range Filter */}
        <div>
          <h4 className="text-sm mb-3">Year Range</h4>
          <div className="space-y-4">
            <Slider
              value={filters.yearRange}
              onValueChange={handleYearChange}
              min={2020}
              max={2024}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>{filters.yearRange[0]}</span>
              <span>{filters.yearRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="pt-8 border-t border-gray-200">
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4">
            Legend
          </h3>
          <div className="space-y-3">
            {projectTypes.map((type) => (
              <div key={type} className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor:
                      typeColors[type as keyof typeof typeColors],
                  }}
                />
                <span className="text-xs text-gray-600">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
