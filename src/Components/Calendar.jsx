//calender.jsx
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

function CalendarComponent({todolist}){
    const events = todolist.map((task)=>({
        title: task.title,
        start: new Date(task.dueDate),
        end: new Date(task.dueDate),
        allday: true,
    }));

    const eventStyleGetter = (event) => {
        let backgroundColor = '#3174ad';
        switch (event.priority) {
        case 'High':
            backgroundColor = 'red';
            break;
        case 'Medium':
            backgroundColor = 'orange';
            break;
        case 'Low':
            backgroundColor = 'green';
            break;
        default:
            backgroundColor = '#3174ad';
        }
        return {
        style: {
            backgroundColor,
        }
        };
    };

    return(
        <div style={{height: 500}}>
            <Calendar localizer={localizer} events={events} eventPropGetter={eventStyleGetter} selectable={true} startAccessor="start" endAccessor="end" style={{height: 500}} />
        </div>
    )
}

export default CalendarComponent;