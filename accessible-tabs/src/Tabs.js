import { useState } from "react"
import "./Tabs.css"

const headings = [
  'First tab', 'Second tab', 'Third tab'
]
const content = [
  'This is the first tab content',
  'The second tab is much the same as the first tab',
  'But the third tabe does its own thing'
]

function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleKeyUp = (e, idx) => {
    if(e.key === ' ' || e.key === 'Enter'){
        setSelectedTab(idx)
    }
    }
  
  
  return <div className="Tabs">
    <div role='tablist'>
      { headings.map((text, idx) => {
        return <TabHeading
          key={idx}
          onClick={() => {setSelectedTab(idx)}}
          onKeyUp={(e)=>handleKeyUp(e, idx)}
          onFocus={(e)=>console.log(e)}
          selected={selectedTab === idx}
          title={headings[idx]}/>
      })}
    </div>
    <div className="tabcontent" role='tabpanel' 
    id={selectedTab} aria-labelledby={selectedTab}
    >{content[selectedTab]}</div>
  </div>
}

function TabHeading(props) {
  return <span
    id={props.key}
    tabIndex={0}
    role='tab'
    aria-selected={props.selected}
    aria-controls={props.key}
    onClick={props.onClick}
    onKeyUp={props.onKeyUp}
    onFocus={props.onFocus}
    className={props.selected ? 'tab selected': 'tab'}>
    {props.title}
  </span>
}

export default Tabs