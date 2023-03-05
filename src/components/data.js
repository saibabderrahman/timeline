  
  import moment from 'moment'
  import img from './antonio-perdichizzi.webp'
  import img1 from './images.jpg'
  import img2 from './trump.jpg'
  
  
  export const items = [

    
    {  
      id: 0,
      group: 5,
      title: 'additional information',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
      rightTitle: 'title in the right sidebar',
      className: 'assign',

      selectedBgColor: 'rgba(225, 166, 244, 1)',
  
      className: 'pending',
  


    },
    {
      id:1,
      group: 6,
      title: 'test',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
      rightTitle: 'title in the right sidebar',
      className: 'assign',

      selectedBgColor: 'rgba(225, 166, 244, 1)',
  
      className: 'pending',
  

    },
    {
      id: 2,
      group: 8,
      title: 'additional information',
      rightTitle: 'title in the right sidebar',
      start_time: moment().add(1, 'hour'),
      end_time: moment().add(6, 'hour'),
      className: 'assign',

      selectedBgColor: 'rgba(225, 166, 244, 1)',
  
      className: 'pending',
  
    },
    {
      id: 3,
      group: 9,
      title: 'additional information',
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(4, 'hour'),    className: 'assign',

      selectedBgColor: 'rgba(225, 166, 244, 1)',
  
      className: 'pending',
  
    },
    {
        id: 4,
        group: 4,
        title: 'onligne',
        start_time: moment().add(-2, 'hour'),
        end_time: moment().add(2, 'hour'),
     //  itemProps: {
     //    // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
     //    'data-custom-attribute': 'Random content',
     //    'aria-hidden': true,
     //    onDoubleClick: () => { console.log('You clicked double!') },
     //    className: 'weekend',
     //    style: {
     //      background: '#d87981'
     //    }
     //  },
        className: 'assign',

        selectedBgColor: 'rgba(225, 166, 244, 1)',
    
        className: 'pending',
    
      },
      {
        id: 5,
        group: 5,
        title: 'additional information',
        start_time: moment().add(-5, 'hour'),
        end_time: moment().add(2, 'hour'),
      //  itemProps: {
      //    // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
      //    'data-custom-attribute': 'Random content',
      //    'aria-hidden': true,
      //    onDoubleClick: () => { console.log('You clicked double!') },
      //    className: 'weekend',
      //    style: {
      //      background: '#5d90c8            '
      //    }
      //  }
      },
      {
        id: 6,
        group: 7,
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
            background: '#6cc47b            '
          }
        }
      },
      {
        id: 7,
        group: 1,
        title: 'reservations en attente',
        start_time: moment().add(-2, 'hour'),
        end_time: moment().add(2, 'hour'),
        itemProps: {
          // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
          'data-custom-attribute': 'Random content',
          'aria-hidden': true,
          onDoubleClick: () => { console.log('You clicked double!') },
          className: 'weekend',
          style: {
            background: '#ffeed2', color:'#e8ac51 '
          }
        }
      },
      {
        id:8,
        group: 1,
        title: 'reservations en attente',
        start_time: moment().add(3, 'hour'),
        end_time: moment().add(6, 'hour'),
        itemProps: {
          // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
          'data-custom-attribute': 'Random content',
          'aria-hidden': true,
          onDoubleClick: () => { console.log('You clicked double!') },
          className: 'weekend',
          style: {
            background: '#f9c56d '
          }
        }
      },
      {
        id:9,
        group: 2,
        title: 'reservations en attente',
        start_time: moment().add(-5, 'hour'),
        end_time: moment().add(2, 'hour'),
        itemProps: {
          // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
          'data-custom-attribute': 'Random content',
          'aria-hidden': true,
          onDoubleClick: () => { console.log('You clicked double!') },
          className: 'weekend',
          style: {
            background: '#8ece96'
          }
        }
      },
      {
        id: 10,
        group: 3,
        title: 'reservations en attente',
        start_time: moment().add(-5, 'hour'),
        end_time: moment().add(-2, 'hour'),
        itemProps: {
          // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
          'data-custom-attribute': 'Random content',
          'aria-hidden': true,
          onDoubleClick: () => { console.log('You clicked double!') },
          className: 'weekend',
          style: {
            background: '#aa5cb8            '
          }
        }
      },


  ]

   
  export const group = [
    { id: 1, title: `reservations en attente` , enattente: true    ,rightTitle: null, },
    { id: 2, title: 'reservations confirmées' , confirmées: true    ,rightTitle: null, },
    { id: 3, title: 'reservations en course de dispatch ' ,   dispatch: true    ,   rightTitle: null },
    { id: 4, title: 'raid dj' ,    rightTitle: true ,img:img,wallet: 2000 },
     { id: 5, title: 'raid dj' ,    rightTitle: false,img:img , wallet: 1000},
      { id: 6, title: 'walide ' ,    rightTitle: true,img:img , wallet: 634},
     { id: 7, title: 'walide ' ,    rightTitle: true ,img:img , wallet: 8000}, 
      { id: 8, title: 'walide ' ,    rightTitle: false ,img:img , wallet: 8000},
      { id: 9, title: 'walide ' ,    rightTitle: true ,img:img , wallet: 8000},
      { id: 10, title: 'walide ' ,    rightTitle: true ,img:img , wallet: 8000},
      { id: 11, title: 'walide ' ,    rightTitle: false ,img:img , wallet: 8000},
      { id: 12, title: 'walide ' ,    rightTitle: false ,img:img , wallet: 8000},
      { id: 13, title: 'walide ' ,    rightTitle: false ,img:img , wallet: 8000},
      { id: 30, title: 'walide ' ,    rightTitle: true ,img:img , wallet: 8000},
      { id: 14, title: 'walide ' ,    rightTitle: true ,img:img , wallet: 8000},
      { id: 15, title: 'walide ' ,    rightTitle: true ,img:img , wallet: 8000},
      { id: 16, title: 'walide ' ,    rightTitle: true ,img:img , wallet: 8000},
      { id: 17, title: 'walide ' ,    rightTitle: true ,img:img , wallet: 8000},
      { id: 18, title: 'walide ' ,    rightTitle: true ,img:img , wallet: 8000},
      { id: 19, title: 'walide ' ,    rightTitle: true ,img:img , wallet: 8000},
      { id: 20, title: 'walide ' ,    rightTitle: true ,img:img , wallet: 8000} ,
      { id: 21, title: 'walide ' ,    rightTitle: true ,img:img , wallet: 8000},
      { id: 22, title: 'walide ' ,    rightTitle: true ,img:img , wallet: 8000},
]
