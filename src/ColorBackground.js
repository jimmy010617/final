import colorNames from 'colornames'

const ColorBackground = ({colorValue, setColorValue, sethexValue, isDarkText, SetIsDarkText}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Background Color : </label>
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
      <button
        type="button"
        onClick={() => SetIsDarkText(!isDarkText)} >
        색 전환
      </button>
    </form>
  )
}

export default ColorBackground;