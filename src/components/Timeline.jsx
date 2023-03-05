import React,{useState} from 'react'
import 'react-calendar-timeline/lib/Timeline.css'
import Timeline, {
  TimelineMarkers,
  CustomMarker,
  TodayMarker,
  CursorMarker,   TimelineHeaders,
  SidebarHeader,
  DateHeader,CustomHeader


} from 'react-calendar-timeline'
import moment from 'moment'
import img from './antonio-perdichizzi.webp'
import img1 from './images.jpg'
import img2 from './trump.jpg'
import containerResizeDetector from 'react-calendar-timeline/lib/resize-detector/container'
import {group ,items} from './data'
import itemRender from './itemRender'




const DTimeline = () => {

  



  const [groups, setGroups] = useState(group)
  const [allItems, setAllItems] = useState(items)

  const addItemHandler = (item) => {
    const newItem = {
      id: 1 + allItems.reduce((max, value) => value.id > max ? value.id : max, 0),
      group: item.group,
      title: item.title,
      className: item.status,
      start_time: moment(new Date(item.start)),
      end_time: moment(new Date(item.end)),
    }
    setAllItems([...allItems, newItem])
  }

  const handleItemMove = (itemId, dragTime, newGroupOrder) => {
    console.log(itemId, dragTime, newGroupOrder)

    const updatedItems = allItems.map((item) =>
    
      item.id === itemId
        ? {
            ...item,
            title:'abderrahman',  

            start_time: dragTime,
            end_time: dragTime + ( item.end_time -item.start_time ),
            group: newGroupOrder +1,
          }
        : item
    )
    console.log(updatedItems)
    setAllItems(updatedItems)
    console.log('Moved', itemId, dragTime, newGroupOrder)
  }

  const handleItemResize = (itemId, time, edge) => {
    const updatedItems = allItems.map((item) =>
      item.id === itemId
        ? {
            ...item,
            start_time: edge === 'left' ? time : item.start_time,
            end_time: edge === 'left' ? item.end_time  : time,
          }
        : item
    )
    setAllItems(updatedItems)
    console.log('Resized', itemId, time, edge)
  }



  return (
    <div>
                <Timeline
                  style={{textAlign:"center"}}
                  traditionalZoom={false}
                  resizeDetector={containerResizeDetector}
                  sidebarContent="drivers"
                  canMove={true}
                  canResize={'both'}
                  groups={groups}
                  items={allItems}
                  defaultTimeStart={moment().add(-12, 'hour')}
                  defaultTimeEnd={moment().add(12, 'hour')}
                  onDoubleClick=  {() => { console.log('You clicked double!') }}
                  sidebarWidth={300}
                  lineHeight={60}
                  stackItems

                  Height={50}
                  maxZoom={1.5 * 365.24 * 86400 * 1000}
                  minZoom={1.24 * 86400 * 1000 * 7 * 3}
                  showCursorLine
                  fullUpdate
                  itemTouchSendsClick={false}
                  onItemMove={handleItemMove}
                  onItemResize={handleItemResize}
                  scrollRef={()=>5}
                  groupRenderer = {({ group }) => {
          return (
            <>
                   <div className="custom-group">
                          {group.rightTitle ? 
                                 <div className="container">
                                 <span></span>
                                </div>:  group.rightTitle == false ?<div className="con">
                                     <span></span>
                                 </div> :  group.rightTitle == null && group.enattente ?  <div className="enAttente">
                                 <span></span>
                                </div> : group.rightTitle == null && group.confirmées ?  <div className="confirmées">
                                 <span></span>
                                </div> :  group.rightTitle == null && group.dispatch ?  <div className="dispatch">
                                 <span></span>
                                </div> : <div className="con">
                                 <span></span>
                                </div>
                           }
                        <div className='userCart'>
                        {  group.img && <img src={group.img} className="photo" />}
                        <span className="title">{group.title}</span>
                       { group.wallet &&  
                              <button className='btn'>
                               <span className="followers">&nbsp;{group.wallet}  $ </span>
                             </button>
                       }
                        </div>
                   </div>
            </>
          )
        }}
    >
        <TimelineHeaders>
          
              <DateHeader unit="hour" height={60}  // style={{ background: 'green' }}
          />


     
         </TimelineHeaders>
        <TimelineMarkers>
                <TodayMarker >
                                  {({ styles, date }) => {
  const customStyles = {
    ...styles,
    backgroundColor: 'red',
    width: '4px'
  }
  return <div style={customStyles}  />
                  }}
                </TodayMarker>
       </TimelineMarkers>

      </Timeline>
    </div>
  )
}

export default DTimeline
