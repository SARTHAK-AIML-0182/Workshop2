function App() {
  const Name = "Sarthak Mishra";
  const Course = "OOPS with C++";
  const Attendance = "82%";

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Student Details</h1>
      <p><b>Name:</b> {Name}</p>
      <p><b>Course:</b> {Course}</p>
      <p><b>Attendance:</b> {Attendance}</p>

      <h2>Welcome to react</h2>
      <p>This is my first react application</p>
    </div>
  );
}

export default App;