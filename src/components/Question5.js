import React, { useState } from "react";

function Question5() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "500px", padding: "40px" }}>
        <h2>Expandable list view</h2>
        <div
          style={{
            backgroundColor: "green",
            color: "white",
            textAlign: "center",
          }}
        >
          <div
            style={{ textDecoration: "none", cursor: "pointer" }}
            href="id"
            onClick={() => {
              setShow1(!show1);
            }}
          >
            Select Item 1
          </div>
          <hr />
          {show1 && (
            <div
              style={{
                backgroundColor: "white",
                color: "black",
                height: "100px",
              }}
            >
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label>Item 1.1</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label>Item 1.2</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label>Item 1.3</label>
              </div>
              <br />
            </div>
          )}
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShow2(!show2);
            }}
          >
            Select Item 2
          </div>
          <hr />
          {show2 && (
            <div
              style={{
                backgroundColor: "white",
                color: "black",
                height: "100px",
              }}
            >
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label>Item 2.1</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label>Item 2.2</label>
                <br />
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label>Item 2.3</label>
              </div>
              <br />
            </div>
          )}
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShow3(!show3);
            }}
          >
            Select Item 3
          </div>
          <hr />
          {show3 && (
            <div
              style={{
                backgroundColor: "white",
                color: "black",
                height: "100px",
              }}
            >
              The cursor is a pointer3 and indicates a link
              <br />
            </div>
          )}
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShow4(!show4);
            }}
          >
            Select Item 4
          </div>
          <hr />
          {show4 && (
            <div
              style={{
                backgroundColor: "white",
                color: "black",
                height: "100px",
              }}
            >
              The cursor is a pointer4 and indicates a link
              <br />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Question5;
