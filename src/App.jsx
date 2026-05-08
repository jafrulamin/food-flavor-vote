import { useState } from "react"

// Button component - receives handler and text as props
const Button = ({ handleClick, text, emoji }) => {
  return (
    <button
      onClick={handleClick}
      style={{
        padding: "12px 28px",
        fontSize: "18px",
        border: "2px solid #333",
        borderRadius: "8px",
        cursor: "pointer",
        background: "#fff",
        transition: "transform 0.1s",
        margin: "0 6px",
      }}
      onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
    >
      {emoji} {text}
    </button>
  )
}

// StatisticLine component - displays a single stat row
const StatisticLine = ({ label, value }) => {
  return (
    <tr>
      <td style={{ padding: "6px 16px", textAlign: "left" }}>{label}</td>
      <td style={{ padding: "6px 16px", textAlign: "right", fontWeight: "bold" }}>{value}</td>
    </tr>
  )
}

// Statistics component - shows all the stats or a message if no votes
const Statistics = ({ spicy, mild, sweet }) => {
  const total = spicy + mild + sweet

  // conditional rendering: show message if no data yet
  if (total === 0) {
    return (
      <div style={{
        marginTop: "24px",
        padding: "20px",
        color: "#fff",
      }}>
        No votes yet... click a button to get started!
      </div>
    )
  }

  return (
    <div style={{ marginTop: "24px" }}>
      <table style={{
        margin: "0 auto",
        borderCollapse: "collapse",
        background: "#fafafa",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      }}>
        <tbody>
          <StatisticLine label="🌶️ Spicy" value={spicy} />
          <StatisticLine label="🧈 Mild" value={mild} />
          <StatisticLine label="🍯 Sweet" value={sweet} />
          <StatisticLine label="📊 Total votes" value={total} />
        </tbody>
      </table>
    </div>
  )
}

// main App component
const App = () => {
  // state for each category
  const [spicy, setSpicy] = useState(0)
  const [mild, setMild] = useState(0)
  const [sweet, setSweet] = useState(0)

  // event handlers defined here in parent
  const handleSpicy = () => setSpicy(spicy + 1)
  const handleMild = () => setMild(mild + 1)
  const handleSweet = () => setSweet(sweet + 1)

  const handleReset = () => {
    setSpicy(0)
    setMild(0)
    setSweet(0)
  }

  return (
    <div style={{
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      padding: "40px 20px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#1d91c0",
    }}>
      <h1 style={{ fontSize: "36px", marginBottom: "4px", color: "#fff" }}>
        🍽️ Food Flavor Vote
      </h1>
      <p style={{ color: "#e0f0f8", marginBottom: "30px", fontSize: "16px" }}>
        What flavor do you prefer? Cast your vote!
      </p>

      {/* buttons - handlers passed as props */}
      <div style={{ marginBottom: "10px" }}>
        <Button handleClick={handleSpicy} text="Spicy" emoji="🌶️" />
        <Button handleClick={handleMild} text="Mild" emoji="🧈" />
        <Button handleClick={handleSweet} text="Sweet" emoji="🍯" />
      </div>

      <button
        onClick={handleReset}
        style={{
          marginTop: "8px",
          padding: "6px 18px",
          fontSize: "13px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          cursor: "pointer",
          background: "#4a90d9",
          color: "#fff",
        }}
      >
        Reset
      </button>

      {/* statistics - state passed as props */}
      <Statistics spicy={spicy} mild={mild} sweet={sweet} />
    </div>
  )
}

export default App
