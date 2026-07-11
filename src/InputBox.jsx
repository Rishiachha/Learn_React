export const InputBox = ({ name, setName }) => {
  return (
    <input
      type="text"
      placeholder="Enter Name"
      value={name}
      // Update the parent's state
      onChange={(e)=>setName(e.target.value)}
    />
  )
}
