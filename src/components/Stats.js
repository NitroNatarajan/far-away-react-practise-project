export default function Stats ({items}){
  if(!items.length){
    return (<footer>
      <em>Start add some items 💼 for the trip 🚜 ✈</em>
      </footer>)
  }
  const numItems = items.length;
  const numPacked = items.filter((item)=> item.packed).length
  const percentage = Math.round(numPacked/numItems *100)
  return <footer className="footer">
    <em>{percentage === 100 ? "You have got all the goods you need .. Ready to Go: ✈✈": ` You have ${numItems} items in your paking list and you have packed ${numPacked} items. In percentages, you have packed ${percentage}% out of 100% .👜` }</em>
  </footer>
}