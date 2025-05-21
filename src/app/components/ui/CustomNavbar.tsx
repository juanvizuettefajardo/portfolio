import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { addMonths, subMonths } from "date-fns";
import { es } from "date-fns/locale";

export default function CustomCalendar() {
  const [month, setMonth] = useState(new Date());

  const handlePreviousMonth = () => {
    setMonth(subMonths(month, 1));
  };

  const handleNextMonth = () => {
    setMonth(addMonths(month, 1));
  };

  return (
    <div>
      <div className="flex items-center justify-between px-2 py-1">
        <button onClick={handlePreviousMonth} type="button">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-sm font-medium">
          {month.toLocaleDateString("es-ES", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button onClick={handleNextMonth} type="button">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <DayPicker
        month={month}
        onMonthChange={setMonth}
        showOutsideDays
        locale={es}
      />
    </div>
  );
}
