import React, { memo, useEffect, useState } from "react";
import Select from "react-select";

function Container() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [name, setName] = useState("");
  const [playerList, setPlayerList] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [bookedList, setBookedList] = useState([]);
  const [alertList, setAlertList] = useState([]);

  console.log(bookedList);
  const optionsList = [
    { value: "09:00 AM-09:30 AM", label: "09:00 AM-09:30 AM" },
    { value: "09:30 AM-10:00 AM", label: "09:30 AM-10:00 AM" },
    { value: "10:00 AM-10:30 AM", label: "10:00 AM-10:30 AM" },
    { value: "10:30 AM-11:00 AM", label: "10:30 AM-11:00 AM" },
    { value: "11:00 AM-11:30 AM", label: "11:00 AM-11:30 AM" },
    { value: "11:30 AM-12:00 PM", label: "11:30 AM-12:00 PM" },
    { value: "12:00 PM-12:30 PM", label: "12:00 PM-12:30 PM" },
    { value: "12:30 PM-01:00 PM", label: "12:30 PM-01:00 PM" },
    { value: "01:00 PM-01:30 PM", label: "01:00 PM-01:30 PM" },
    { value: "01:30 PM-02:00 PM", label: "01:30 PM-02:00 PM" },
    { value: "02:00 PM-02:30 PM", label: "02:00 PM-02:30 PM" },
    { value: "02:30 PM-03:00 PM", label: "02:30 PM-03:00 PM" },
    { value: "03:00 PM-03:30 PM", label: "03:00 PM-03:30 PM" },
    { value: "03:30 PM-04:00 PM", label: "03:30 PM-04:00 PM" },
    { value: "04:00 PM-04:30 PM", label: "04:00 PM-04:30 PM" },
    { value: "04:30 PM-05:00 PM", label: "04:30 PM-05:00 PM" },
    { value: "05:00 PM-05:30 PM", label: "05:00 PM-05:30 PM" },
    { value: "05:30 PM-06:00 PM", label: "05:30 PM-06:00 PM" },
    { value: "06:00 PM-06:30 PM", label: "06:00 PM-06:30 PM" },
    { value: "06:30 PM-07:00 PM", label: "06:30 PM-07:00 PM" },
    { value: "07:00 PM-07:30 PM", label: "07:00 PM-07:30 PM" },
    { value: "07:30 PM-08:00 PM", label: "07:30 PM-08:00 PM" },
    { value: "08:00 PM-08:30 PM", label: "08:00 PM-08:30 PM" },
    { value: "08:30 PM-09:00 PM", label: "08:30 PM-09:00 PM" },
    { value: "09:00 PM-09:30 PM", label: "09:00 PM-09:30 PM" },
    { value: "09:30 PM-10:00 PM", label: "09:30 PM-10:00 PM" },
    { value: "10:00 PM-10:30 PM", label: "10:00 PM-10:30 PM" },
    { value: "10:30 PM-11:00 PM", label: "10:30 PM-11:00 PM" },
  ];
  const bookedTimes = bookedList
    .filter((item) => item.date === selectedDate)
    .map((item) => item.time);

  const filteredOptionLists = optionsList.filter(
    (item) => !bookedTimes.includes(item.value)
  );
  console.log(bookedList);

  const playerCount = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
  ];
  const addPlayerList = () => {
    let newPlayers = [...playerList];
    if (selectedDate && selectedTime && selectedPlayer && name) {
      const newTime = selectedTime.map((options) => options.value);
      const newPlayersCount = selectedPlayer.map((option) => option.value);
      newTime.forEach((time) => {
        newPlayersCount.forEach((player) => {
          const newPlayerList = {
            date: selectedDate,
            time: time,
            players: player,
            Name: name,
          };
          newPlayers.push(newPlayerList);
          setAlertList([newPlayerList]);
        });
      });
      setPlayerList(newPlayers);

      setSelectedDate("");
      setSelectedTime([]);
      setSelectedPlayer([]);
      setName("");
      setConfirm(true);
    } else {
      alert("Fill all the values");
    }
  };

  const confirmBooking = () => {
    const updatedList = [...playerList];
    if (confirm === true && !bookedList.includes(selectedTime)) {
      setBookedList(updatedList);
      setConfirm(false);
      setSelectedTime([]);
      setAlertList([]);
      alert("Successfully Booked!");
    }
  };
  const cancelBooking = () => {
    setConfirm(true);
    setSelectedTime([]);
    setAlertList([]);
    alert("Booking Cancelled");
  };

  const handleSelecteDate = (e) => {
    setSelectedDate(e.target.value);
  };
  const handleSelectTime = (selectedTime) => {
    setSelectedTime(selectedTime);
  };
  const handleSelectPlayer = (selectedPlayer) => {
    setSelectedPlayer(
      Array.isArray(selectedPlayer) ? selectedPlayer : [selectedPlayer]
    );
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(alertList);
  console.log("Booked List ", bookedList);

  useEffect(() => {}, [bookedList]);
  return (
    <>
      <section className="user-page">
        <span className="playerRegister">
          <h1>
            <span>B</span>ook <span>Y</span>our <span>S</span>lots{" "}
          </h1>
          <label htmlFor="date">Select Date : </label>
          <input
            type="date"
            name="date"
            onChange={handleSelecteDate}
            value={selectedDate}
          />

          <label htmlFor="time">Select Time :</label>
          <Select
            className="timeslot"
            options={filteredOptionLists}
            placeholder="Choose Time Slots"
            value={selectedTime}
            onChange={handleSelectTime}
            isMulti
            closeMenuOnSelect={false}
          />
          <label htmlFor="">Select Number of Players :</label>
          <Select
            className="timeslot"
            value={selectedPlayer}
            options={playerCount}
            onChange={handleSelectPlayer}
            placeholder={selectedPlayer}
          />
          <label htmlFor="">Enter Your Name :</label>
          <input
            type="text"
            onChange={handleName}
            value={name}
            placeholder="Your Name"
          />
          <button className="book-slot" onClick={addPlayerList}>
            BOOK NOW <span>!</span>
          </button>
        </span>
        {confirm === true ? (
          <span className="playerListAlert">
            {alertList.map((a) => (
              <div className="confirmBox">
                <h1>Confirmation</h1>
                <h2>Name : {a.Name}</h2>
                <h2>Date : {a.date}</h2>
                <h2>Time : {a.time}</h2>
                <h2>Count : {a.players}</h2>
                <button onClick={confirmBooking}>Confirm Booking</button>
                <button onClick={cancelBooking}>Cancel Booking</button>
              </div>
            ))}
          </span>
        ) : null}
      </section>
    </>
  );
}

export default memo(Container);
