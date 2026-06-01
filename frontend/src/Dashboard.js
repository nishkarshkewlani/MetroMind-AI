export default function Dashboard({ data }) {

  return (

    <div style={{
      display: "flex",
      gap: "20px",
      marginTop: "20px"
    }}>

      <div style={{
        background: "#dbeafe",
        padding: "20px",
        borderRadius: "10px",
        width: "200px"
      }}>
        <h2>Traffic</h2>
        <p>{data.traffic}</p>
      </div>

      <div style={{
        background: "#dcfce7",
        padding: "20px",
        borderRadius: "10px",
        width: "200px"
      }}>
        <h2>Weather</h2>
        <p>{data.weather}°C</p>
      </div>

      <div style={{
        background: "#fee2e2",
        padding: "20px",
        borderRadius: "10px",
        width: "200px"
      }}>
        <h2>Crowd</h2>
        <p>{data.crowd}</p>
      </div>

    </div>

  );
}
