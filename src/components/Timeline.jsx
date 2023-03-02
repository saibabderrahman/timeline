import React from 'react'
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
import Svg from './Svg'
import img from './antonio-perdichizzi.webp'


const DTimeline = () => {
    const groups = [{ id: 1, title: 'raid dj' ,    rightTitle: false,  height: 60},
       { id: 2, title: `walide` ,    rightTitle: true, img:'' },
      { id: 3, title: 'raid dj' ,    rightTitle: true,  },
       { id: 4, title: 'walide ' ,    rightTitle: true, },
       { id: 5, title: 'raid dj' ,    rightTitle: false, },
        { id: 6, title: 'walide ' ,    rightTitle: true},
       { id: 7, title: 'walide ' ,    rightTitle: true}, 
        { id: 8, title: 'walide ' ,    rightTitle: false},
        { id: 9, title: 'walide ' ,    rightTitle: true},
        { id: 10, title: 'walide ' ,    rightTitle: true},
        { id: 11, title: 'walide ' ,    rightTitle: false},
        { id: 12, title: 'walide ' ,    rightTitle: false},
        { id: 13, title: 'walide ' ,    rightTitle: false},
        { id: 13, title: 'walide ' ,    rightTitle: true},
        { id: 14, title: 'walide ' ,    rightTitle: true},
        { id: 15, title: 'walide ' ,    rightTitle: true},
        { id: 16, title: 'walide ' ,    rightTitle: true},
        { id: 17, title: 'walide ' ,    rightTitle: true},
        { id: 18, title: 'walide ' ,    rightTitle: true},
        { id: 19, title: 'walide ' ,    rightTitle: true},
        { id: 20, title: 'walide ' ,    rightTitle: true},
        { id: 21, title: 'walide ' ,    rightTitle: true},
        { id: 22, title: 'walide ' ,    rightTitle: true},
]

  const items = [
    {
      id: 1,
      group: 1,
      title: 'additional information',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
      rightTitle: 'title in the right sidebar',

      Color:"blue"
    },
    {
      id: 2,
      group: 2,
      title: 'additional information',
      rightTitle: 'title in the right sidebar',
      start_time: moment().add(1, 'hour'),
      end_time: moment().add(6, 'hour')
    },
    {
      id: 3,
      group: 1,
      title: 'additional information',
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(4, 'hour')
    },
    {
        id: 4,
        group: 4,
        title: 'onligne',
        start_time: moment().add(-2, 'hour'),
        end_time: moment().add(2, 'hour'),
        itemProps: {
          // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
          'data-custom-attribute': 'Random content',
          'aria-hidden': true,
          onDoubleClick: () => { console.log('You clicked double!') },
          className: 'weekend',
          style: {
            background: 'green'
          }
        }
      },
      {
        id: 5,
        group: 5,
        title: 'additional information',
        start_time: moment().add(-5, 'hour'),
        end_time: moment().add(2, 'hour'),
        itemProps: {
          // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
          'data-custom-attribute': 'Random content',
          'aria-hidden': true,
          onDoubleClick: () => { console.log('You clicked double!') },
          className: 'weekend',
          style: {
            background: 'blue'
          }
        }
      },
      {
        id: 6,
        group: 1,
        title: 'additional information',
        start_time: moment().add(-5, 'hour'),
        end_time: moment().add(-2, 'hour'),
        itemProps: {
          // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
          'data-custom-attribute': 'Random content',
          'aria-hidden': true,
          onDoubleClick: () => { console.log('You clicked double!') },
          className: 'weekend',
          style: {
            background: 'black'
          }
        }
      },


  ]


  return (
    <div>
                <Timeline
         traditionalZoom={false}
         

         canMove={ true}
         canResize={ true}
         canChangeGroup={ true}
         groups={groups}
         items={items}
         defaultTimeStart={moment().add(-12, 'hour')}
         defaultTimeEnd={moment().add(12, 'hour')}
         onDoubleClick=  {() => { console.log('You clicked double!') }}
         sidebarWidth={200}
         lineHeight={60}
         Height={50}
         timelineWidth={30}
         minZoom={60}
         maxZoom={60}
         scrollRef={()=>5}
         groupRenderer = {({ group }) => {
          return (
            <>
            <div className="custom-group">
{group.rightTitle ? 
 <div class="container">
 <span></span>
</div>:  <div class="con">
     <span></span>
 </div>}
 <div className='userCart'>

 <span className="title">{group.title}</span>
 <img src={img} class="photo" />
 </div>


</div>
                
                
                

            
            
            
            </>




    
          










          )
        }}
        
        




    >
        <TimelineHeaders>
          
              <DateHeader unit="hour" height={60} 
                         // style={{ background: 'green' }}
                 
               
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
/*

<div class="card">
  <div class="card-top-part">
    <div class="left-part">
      <div class="user-name">
        <p class="name">Jane Doe</p>
        <p class="role"> Admin </p>
      </div>
      <div class="user-position">
        <p class="position">
        Front-End Developer
      </p>
      </div>
    </div>
    <div class="right-part">
      <div class="user-photo">
        <img src="https://randomuser.me/api/portraits/women/79.jpg" class="photo">
      </div>
    </div>
  </div>
  <div class="card-bottom-part">
    <div class="bottom-part">
      <a href="mailto: example@example.com" class="link">
        <span class="icon"> 
          <svg viewBox="0 0 20 20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" data-name="20" id="_20">
            <path transform="translate(1.25 3.75)" d="M16.25,12.5h-15A1.252,1.252,0,0,1,0,11.25v-10A1.252,1.252,0,0,1,1.25,0h15A1.251,1.251,0,0,1,17.5,1.25v10A1.251,1.251,0,0,1,16.25,12.5ZM1.25,1.819V11.25h15V1.819L9.106,6.763a.626.626,0,0,1-.713,0ZM2.625,1.25,8.75,5.487,14.875,1.25Z" id="Fill"></path>
          </svg>
        </span>
          Email
      </a>
    </div>
    <div class="bottom-part">
      <a href="tel: 0123456789" class="link">
        <span class="icon"> 
          <svg viewBox="0 0 20 20" height="20" width="20" xmlns="http://www.w3.org/2000/svg" data-name="20" id="_20">
            <path transform="translate(1.869 1.875)" d="M14.381,16.25h-.106C2,15.544.249,5.179.006,2.019A1.874,1.874,0,0,1,1.731,0H5.175A1.243,1.243,0,0,1,6.337.787l.95,2.337a1.247,1.247,0,0,1-.275,1.35L5.681,5.818a5.875,5.875,0,0,0,4.738,4.75l1.356-1.344a1.25,1.25,0,0,1,1.356-.257l2.356.944a1.245,1.245,0,0,1,.769,1.163v3.3A1.877,1.877,0,0,1,14.381,16.25Zm-12.5-15a.625.625,0,0,0-.625.625v.05C1.545,5.648,3.4,14.375,14.343,15h.038a.625.625,0,0,0,.625-.589V11.075l-2.356-.944-1.794,1.781-.3-.038A6.733,6.733,0,0,1,5.429,8.553,8.171,8.171,0,0,1,4.381,5.7l-.038-.3L6.118,3.606,5.181,1.25Z" id="Fill"></path>
          </svg>
        </span>
          Phone
      </a>
    </div>
  </div>
</div>
*/