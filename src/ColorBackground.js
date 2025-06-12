import colorNames from 'colornames'

const ColorBackground = ({colorValue, setColorValue, sethexValue, isDarkText, SetIsDarkText}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Background Color : {colorValue} </label>
      <input
        autoFocus
        type="text"
        placeholder=""
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value)
          sethexValue(colorNames(e.target.value))
        }} />
    </form>
  )
}

export default ColorBackground;