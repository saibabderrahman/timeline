import React,{useEffect,useState,useRef} from 'react'
import Timeline from 'react-calendar-timeline';
import moment from 'moment';
import 'react-calendar-timeline/lib/Timeline.css';



const OneTimeLine = () => {

    
    const groups = [
        { id: 1, title: 'Group 1' },
        { id: 2, title: 'Group 2' },
        { id: 3, title: 'Group 3' },
      ];
    
      const items = [
        {
          id: 1,
          group: 1,
          title: 'Item 1',
          start_time: moment().add(-1, 'hour'),
          end_time: moment(),
        },
        {
          id: 2,
          group: 2,
          title: 'Item 2',
          start_time: moment().add(-0.5, 'hour'),
          end_time: moment().add(0.5, 'hour'),
        },
        {
          id: 3,
          group: 1,
          title: 'Item 3',
          start_time: moment().add(2, 'hour'),
          end_time: moment().add(3, 'hour'),
        },
      ];
    
      const handleScroll = useRef((e) => {});
    
      useEffect(() => {
        handleScroll.current = (e) => {
          if (e.ctrlKey) {
            const zoom = e.deltaY > 0 ? 0.2 : -0.2;
            const timeline = document.querySelector('.react-calendar-timeline');
            const visibleTimeStart = moment(
              timeline.getAttribute('data-visible-time-start')
            );
            const visibleTimeEnd = moment(
              timeline.getAttribute('data-visible-time-end')
            );
            const zoomStartTime = moment(
              visibleTimeStart.valueOf() +
                (visibleTimeEnd.valueOf() - visibleTimeStart.valueOf()) * zoom
            );
            const zoomEndTime = moment(
              visibleTimeEnd.valueOf() -
                (visibleTimeEnd.valueOf() - visibleTimeStart.valueOf()) * zoom
            );
            timeline.setAttribute('data-visible-time-start', zoomStartTime);
            timeline.setAttribute('data-visible-time-end', zoomEndTime);
          }
        };
      }, []);
    
      useEffect(() => {
        document.addEventListener('wheel', handleScroll.current);
        return () => {
          document.removeEventListener('wheel', handleScroll.current);
        };
      }, []);
  return (
    <div>   
     <Timeline
     itemHeightRatio={0.8}
     lineHeight={50}
     onZoom={(timelineContext, unit)=>{console.log(timelineContext, unit)}}
    groups={groups}
    items={items}
    defaultTimeStart={moment().add(-12, 'hour')}
    defaultTimeEnd={moment().add(12, 'hour')}
  /></div>
  )
}

export default OneTimeLine