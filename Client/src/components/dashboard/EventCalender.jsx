import React, { useState, useEffect, useRef } from "react";
import { FaTrash } from "react-icons/fa"; // Import trash icon

const Calendar = () => {
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("calendarEvents")) || []
  );
  const [showModal, setShowModal] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [meetLink, setMeetLink] = useState("");
  const calendarGridRef = useRef(null);

  const generateCalendar = () => {
    const startDay = 3; // January 2025 starts on Wednesday
    const totalDays = 31;
    const days = [];
    for (let i = 0; i < startDay; i++) days.push(null);
    for (let day = 1; day <= totalDays; day++) days.push(day);
    return days;
  };

  const createEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(), // Unique ID for each event
      title: eventTitle,
      date: eventDate,
      startTime,
      endTime,
      meetLink: meetLink || generateMeetLink(),
    };

    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem("calendarEvents", JSON.stringify(updatedEvents));
    setShowModal(false);
  };

  const deleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
    localStorage.setItem("calendarEvents", JSON.stringify(updatedEvents));
  };

  const generateMeetLink = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 10; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return `https://meet.google.com/${code.slice(0, 3)}-${code.slice(3, 7)}-${code.slice(7)}`;
  };

  const formatTime = (time) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  const updateEventIndicators = () => {
    const calendarDays = calendarGridRef.current?.querySelectorAll(".calendar-day");
    if (calendarDays) {
      calendarDays.forEach((day) => {
        const dayNumber = parseInt(day.textContent);
        const hasEvent = events.some(
          (event) => new Date(event.date).getDate() === dayNumber
        );
        const indicator = day.querySelector(".event-indicator");
        if (indicator) {
          indicator.style.display = hasEvent ? "block" : "none";
        }
      });
    }
  };

  useEffect(() => {
    updateEventIndicators();
  }, [events]);

  return (
    <div className="h-6 mx-1 my-6">
      <div className="flex items-center justify-between mb-4 border-x-2 border-t-2 py-1 px-1 rounded-sm">
        <h2 className="text-3xl font-bold">Meeting</h2>
        <button
          className=" md:px-2 md:py-1 md:mx-4 font-bold lg:py-2 text-white text-sm rounded cursor-pointer bg-sky-500 hover:bg-red-500"
          onClick={() => setShowModal(true)}
        >
          Create Event
        </button>
      </div>

      {/* Calendar Grid */}
      <div
        className="grid grid-cols-7 gap-2 p-2 border-x-2 border-b-2 rounded-xl"
        ref={calendarGridRef}
      >
        {generateCalendar().map((day, index) => (
          <div
            key={index}
            className="relative pt-4 pb-2 text-center border border-red-300 rounded-md calendar-day"
          >
            {day ? (
              <>
                <span>{day}</span>
                <div className="event-indicator absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-blue-500 rounded-full hidden"></div>
              </>
            ) : null}
          </div>
        ))}
      </div>

      {/* Event List Section */}
      <div className="pt-1 pl-2 pr-2 mt-2 border-r-2 border-red-500 border-s-2 rounded-2xl">
        <div className={`max-h-48 overflow-y-auto ${events.length > 2 ? "pr-4" : ""}`}>
          {events.map((event) => (
            <div key={event.id} className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md">
              <div>
                <h4 className="text-lg font-semibold">{event.title}</h4>
                <p className="text-sm text-gray-600">
                  {new Date(event.date).toLocaleDateString()} | {formatTime(event.startTime)} -{" "}
                  {formatTime(event.endTime)}
                </p>
                {event.meetLink && (
                  <a
                    href={event.meetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Join Meeting
                  </a>
                )}
              </div>
              <button
                onClick={() => deleteEvent(event.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="p-6 bg-white rounded-lg w-96">
            <h3 className="mb-4 text-xl font-semibold">Create New Event</h3>
            <form onSubmit={createEvent}>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Event Title</label>
                <input
                  type="text"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  required
                  className="w-full p-2 mt-1 border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold">Date</label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  required
                  className="w-full p-2 mt-1 border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold">Time</label>
                <div className="flex gap-4 mt-1">
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required
                    className="flex-1 p-2 border rounded-md"
                  />
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    required
                    className="flex-1 p-2 border rounded-md"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
