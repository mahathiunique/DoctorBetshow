import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function CalendarComponent({ todolist }) {
  const now = new Date();

  const events = todolist
    .filter(task => new Date(`${task.dueDate}T${task.appointmentTime || "12:00:00"}`) >= now)
    .map((task) => {
      const time = task.appointmentTime || "12:00:00";
      const start = new Date(`${task.dueDate}T${time}`);
      const end = new Date(start.getTime() + 30 * 60 * 1000); 

      return {
        title: `${task.title} (${task.mrid})`,
        start,
        end,
        allDay: false,
        completed: task.completed,  // boolean
      };
    });

  const eventStyleGetter = (event) => {
    let backgroundColor = "#3174ad";
    if (event.completed === true) {
      backgroundColor = "green";
    } else {
      backgroundColor = "orange";
    }

    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        color: "white",
        border: "none",
        padding: "5px",
        opacity: 0.9,
      },
    };
  };

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        eventPropGetter={eventStyleGetter}
        selectable={true}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}
export default CalendarComponent;
