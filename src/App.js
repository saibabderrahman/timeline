import logo from './logo.svg';
import './App.css';
import 'react-calendar-timeline/lib/Timeline.css'
import Timeline, {
  TimelineMarkers,
  CustomMarker,
  TodayMarker,
  CursorMarker
} from 'react-calendar-timeline'
import moment from 'moment'



function App() {
  const groups = [{ id: 1, title: 'raid dj' ,    tip: 'additional information'
}, { id: 2, title: 'walide ' ,    tip: 'additional information'
},{ id: 3, title: 'raid dj' ,    tip: 'additional information'
}, { id: 4, title: 'walide ' ,    tip: 'additional information'
},{ id: 5, title: 'raid dj' ,    tip: 'additional information'
}, { id: 6, title: 'walide ' ,    tip: 'additional information'
}]

  const items = [
    {
      id: 1,
      group: 1,
      title: 'item 1',
      descption:"thisbis jsut a test",
      start_time: moment(),
      end_time: moment().add(1, 'hour')
    },
    {
      id: 2,
      group: 2,
      title: 'item 2',
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(0.5, 'hour')
    },
    {
      id: 3,
      group: 1,
      title: 'item 3',
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(3, 'hour')
    },

  ]

  

  return (
    <div className="App">
        <Timeline
        traditionalZoom={false}
        canMove={ true}
        canResize={ true}
        canChangeGroup={ true}
         groups={(groups)}
         items={items}
         defaultTimeStart={moment().add(-12, 'hour')}
         defaultTimeEnd={moment().add(12, 'hour')}
         onDoubleClick=  {() => { console.log('You clicked double!') }}
         sidebarWidth={150}
         lineHeight={60}
         Height={50}


    >
        <TimelineMarkers>
    <TodayMarker />
    <CustomMarker date={moment()} />
    <CustomMarker date={moment().add(24, 'hour')}>
      {/* custom renderer for this marker */}
      {({ styles, date }) => {
        const customStyles = {
          ...styles,
          backgroundColor: 'deeppink',
          width: '4px'
        }
        return <div style={customStyles}  />
      }}
    </CustomMarker>
    <CursorMarker />
  </TimelineMarkers>

      </Timeline>

    </div>
  );
}

export default App;