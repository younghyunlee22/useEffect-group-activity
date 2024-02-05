export default function StarShipCard ({starShipData, index}) {
  console.log("line2", starShipData)
  return (
    <>
    <ul style={{color: "salmon"}}>
      <p>======={index}=======</p>
      <li key={index}>{starShipData.name}</li>
      <li key={index}>{starShipData.manufacturer}</li>
    </ul>
  </>
  )
}
