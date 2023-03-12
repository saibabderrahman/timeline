import React, { useState, useEffect, useContext } from "react";
import "react-calendar-timeline/lib/Timeline.css";
import Timeline, {
  TimelineMarkers,
  TodayMarker,
  TimelineHeaders,
  DateHeader,
  CustomHeader,
  SidebarHeader,
} from "react-calendar-timeline";
import moment from "moment";
import containerResizeDetector from "react-calendar-timeline/lib/resize-detector/container";
import { group, items } from "./data";
import io from "socket.io-client";
import keys from "./keys";
import itemRenderer from "./itemRender";
import groupRender from "./groupRender";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DTimeline = () => {
  const [groups, setGroups] = useState(group);
  const [allItems, setAllItems] = useState([]);
  const [buttonName, setButtonName] = useState("day");
  const [open, setOpen] = React.useState(false);
  const [Item, setItem] = useState({});
  const [Value, setValue] = useState(100);
  const handleOpen = (item) => {
    setOpen(true);
    setItem(allItems.find((e) => e.id === item));
    console.log(Item);
  };
  const handleClose = () => setOpen(false);

  const socket = io("http://localhost:3000", {
    transports: ["websocket", "polling"],
    reconnection: true,
    extraHeaders: {
      ApiKey: "uQvkv3xmMxuQ1urZceYP8aHoF34mkcmI",
    },
  });

  useEffect(() => {
    socket.emit("getDrivers", () => null);
    socket.emit("getAllBooking", () => null);
  }, []);

  socket.on("BookingTimeline", async (booking) => {
    console.log(booking)
    await booking.map((item) => {
      item.date_start = moment(new Date(item.date_start));
      item.date_end = moment(new Date(item.date_end));
    });
    setAllItems(booking);
  });

  socket.on("driverTimeLine", async (data) => {
    console.log(data)
    setGroups([...group, ...data]);
  });

  const handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const updatedItem = allItems.find((item) => item.id === itemId);
    if (updatedItem) {
      const timeDeferent = updatedItem.date_end - updatedItem.date_start;
      updatedItem.date_start = moment(dragTime).format("yyyy-MM-DD HH:mm");
      updatedItem.date_end = moment(dragTime + timeDeferent).format(
        "yyyy-MM-DD HH:mm"
      );
      updatedItem.id_driver = groups[newGroupOrder].id;
    }
    if (updatedItem.id_driver == "B_1") {
      updatedItem.id_driver = null;
      updatedItem.state = 2;
    } else if (updatedItem.id_driver == "B_3") {
      updatedItem.state = 2;
      updatedItem.id_driver = null;
    } else if (updatedItem.id_driver == "B_2") {
      updatedItem.state = 1;
      updatedItem.id_driver = null;
    }
    socket.emit("updateBooking", updatedItem);
  };

  const handleItemResize = (itemId, time, edge) => {
    const updatedItem = allItems.find((item) => item.id === itemId);
    if (updatedItem) {
      updatedItem.date_start =
        edge === "left"
          ? moment(time).add(-8, "hour").format("yyyy-MM-DD HH:mm")
          : moment(updatedItem.date_start).format("yyyy-MM-DD HH:mm");
      updatedItem.date_end =
        edge === "left"
          ? moment(updatedItem.date_end).format("yyyy-MM-DD HH:mm")
          : moment(time).add(-8, "hour").format("yyyy-MM-DD HH:mm");
      if (updatedItem.id_driver == "B_1") {
        updatedItem.id_driver = null;
        updatedItem.state = 1;
      } else if (updatedItem.id_driver == "B_3") {
        updatedItem.state = 2;
        updatedItem.id_driver = null;
      }
      socket.emit("updateBooking", updatedItem);
    }

    socket.on("upDAteBookingTimeLine", (data) => {
      console.log(data[0]);
      data[0].date_start = moment(new Date(data[0].date_start));
      data[0].date_end = moment(new Date(data[0].date_end));

      const updatedItem = allItems.map((item) =>
        item.id === data[0].id ? data[0] : item
      );

      setAllItems(updatedItem);
    });
  };

  const handleButtonClick = (name) => {
    setButtonName(name);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "1.5rem 0",
        }}
      >
        <div style={{ padding: "1rem" }}>
          <a href="#" className="bt" onClick={() => handleButtonClick("day")}>
            {" "}
            month
          </a>
          <a href="#" className="bt" onClick={() => handleButtonClick("day")}>
            {" "}
            day
          </a>
          <a href="#" className="bt" onClick={() => handleButtonClick("hour")}>
            {" "}
            hour
          </a>
        </div>
        <div>
          <button className="button">
            {" "}
            CA TODAY
            <span className="followers">&nbsp;16613.0 $ </span>
          </button>
          <button className="button">
            {" "}
            TRAJET
            <span className="followers">&nbsp;192 </span>
          </button>
        </div>
      </div>

      <div style={{ display: `${buttonName == "day" ? "none" : "block"}` }}>
        <Timeline
       
          style={{ textAlign: "center" }}
          traditionalZoom={false}
          resizeDetector={containerResizeDetector}
          canMove={true}
          canResize={"both"}
          groups={groups}
          minZoom={24 * 60 * 60 * 1000}
          maxZoom={
            buttonName == "hour" ? 60 * 60 * 1000 : 30 * 24 * 60 * 60 * 1000
          }
          items={allItems}
          defaultTimeStart={moment().add(-6, "hour")}
          defaultTimeEnd={moment().add(6, "hour")}
          onItemClick={(itemId, e, time) => handleOpen(itemId)}
          sidebarWidth={300}
          lineHeight={60}
          fullUpdate
          stackItems
          keys={keys}
          itemRenderer={itemRenderer}
          timeSteps={{
            minute: 15,
            hour: buttonName == "day" ? 6 : 1,
            day: 1,
            month: 1,
            year: 12,
          }}
          Height={50}
          itemTouchSendsClick={false}
          onItemMove={handleItemMove}
          onItemResize={handleItemResize}
          groupRenderer={groupRender}
        >
          <TimelineHeaders unit="day">
            <SidebarHeader>
              {({ getRootProps }) => {
                return (
                  <div {...getRootProps()}>
                               <div className="range">
                      <div className="sliderValue">
                        <span>{Value}</span>
                      </div>
                      <div className="field">
                        <div
                          class="value left"
                          onClick={() => {
                            setValue((prev) => Math.max(0, prev - 100));
                          }}
                        >
                          -
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="200"
                          value={Value}
                          steps="1"
                          onChange={(e) => setValue(e.target.value)}
                        />
                        <div
                          className="value right"
                          onClick={() => {
                            setValue((prev) => Math.min(200, prev + 100));
                          }}
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }}
            </SidebarHeader>

            {buttonName == "month" ? (
              <>
                <DateHeader unit="year" height={60} />
                <DateHeader unit="month" height={60} />
              </>
            ) : buttonName == "day" ? (
              <>
                <DateHeader unit="month" height={60} />
                <DateHeader unit="day" height={60} />
                <DateHeader unit="hour" height={60} />
              </>
            ) : (
              <>
                <DateHeader unit="hour" height={60} />
                <DateHeader unit="minute" height={60} />
              </>
            )}
          </TimelineHeaders>
          <TimelineMarkers>
            <TodayMarker>
              {({ styles, date }) => {
                const customStyles = {
                  ...styles,
                  backgroundColor: "red",
                  width: "4px",
                  zIndex: 10000000,
                };
                return <div style={customStyles} />;
              }}
            </TodayMarker>
          </TimelineMarkers>
        </Timeline>
      </div>

      <div style={{ display: `${buttonName == "hour" ? "none" : "block"}` }}>
        <Timeline
          traditionalZoom={false}
          resizeDetector={containerResizeDetector}
          canMove={true}
          canResize={"both"}
          style={{ textAlign: "center" }}
          groups={groups}
          minZoom={24 * 60 * 60 * 1000}
          maxZoom={
            buttonName == "hour" ? 60 * 60 * 1000 : 30 * 24 * 60 * 60 * 1000
          }
          onItemClick={(itemId, e, time) => handleOpen(itemId)}
          sidebarContent={
            <div class="switch-holder">
              <div class="switch-label">
                <i class="fa fa-bluetooth-b"></i>
                <span>zoom by</span>
              </div>
              <div class="switch-toggle">
                <input type="checkbox" id="bluetooth" />
                <label for="bluetooth"></label>
              </div>
            </div>
          }
          items={items}
          defaultTimeStart={moment().add(-5, "day")}
          defaultTimeEnd={moment().add(5, "day")}
          onDoubleClick={handleOpen}
          sidebarWidth={350}
          lineHeight={60}
          stackItems
          keys={keys}
          itemRenderer={itemRenderer}
          timeSteps={{
            minute: 15,
            hour: buttonName == "day" ? 6 : 1,
            day: 1,
            month: 1,
            year: 12,
          }}
          Height={50}
          itemTouchSendsClick={false}
          onItemMove={handleItemMove}
          onItemResize={handleItemResize}
          groupRenderer={groupRender}
        >
          <TimelineHeaders unit="day">
            <SidebarHeader>
              {({ getRootProps }) => {
                return (
                  <div {...getRootProps()}>
                    <div className="range">
                      <div className="sliderValue">
                        <span>{Value}</span>
                      </div>
                      <div className="field">
                        <div
                          class="value left"
                          onClick={() => {
                            setValue((prev) => Math.max(0, prev - 100));
                          }}
                        >
                          -
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="200"
                          value={Value}
                          steps="1"
                          onChange={(e) => setValue(e.target.value)}
                        />
                        <div
                          className="value right"
                          onClick={() => {
                            setValue((prev) => Math.min(200, prev + 100));
                          }}
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }}
            </SidebarHeader>

            {buttonName == "month" ? (
              <>
                <DateHeader unit="year" height={60} />
                <DateHeader unit="month" height={60} />
              </>
            ) : buttonName == "day" ? (
              <>
                <DateHeader unit="day" height={60} />
                <DateHeader unit="hour" height={60} />
              </>
            ) : (
              <>
                <DateHeader unit="hour" height={60} />
                <DateHeader unit="minute" height={60} />
              </>
            )}
          </TimelineHeaders>
          <TimelineMarkers>
            <TodayMarker>
              {({ styles, date }) => {
                const customStyles = {
                  ...styles,
                  backgroundColor: "red",
                  width: "4px",
                  zIndex:"9999"
                };
                return <div style={customStyles} />;
              }}
            </TodayMarker>
          </TimelineMarkers>
        </Timeline>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              date Starte :{" "}
              {moment(Item?.date_start).format("MM-DD-yyyy HH:mm")}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              distance : {Item?.distance} km
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              number passengers : {Item?.number_passengers}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              price TTC : {Item?.price_ttc}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              payment method : {Item?.payment_method_string}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              train number : {Item?.train_number}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              flight number : {Item?.flight_number}
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default DTimeline;
