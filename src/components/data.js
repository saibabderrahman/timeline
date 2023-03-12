  
  import moment from 'moment'
  
  
  export const items = [
    { 
       id: 81,
      id_driver: "B_3",
      title: 'additional information',
      date_start: moment().add(-20, 'hour'),
      date_end :moment().add(+70, 'hour'),
      is_karhoo: 0,
      rightTitle: 'title in the right sidebar',
      className: 'assign',
      selectedBgColor: 'rgba(225, 166, 244, 1)',
      payment_method:1,
    },
    {
      id: 82,
      id_driver: "B_1",
      title: 'additional information',
      date_start: moment().add(-300, 'hour'),
      date_end :moment().add(-10, 'hour'),
      is_karhoo: 0,
      rightTitle: 'title in the right sidebar',
      className: 'assign',
      selectedBgColor: 'rgba(225, 166, 244, 1)',
      payment_method:2,

  

    },
    {
      id: 83,
      id_driver: 1,
      title: 'additional information',
      date_start: moment(),
      date_end :moment().add(200, 'hour'),
      is_karhoo: 0,
      rightTitle: 'title in the right sidebar',
      className: 'assign',
      selectedBgColor: 'rgba(225, 166, 244, 1)',
      payment_method:3,

  
  
    },
    {
      id: 84,
      id_driver: "B_3",
      title: 'additional information',
      date_start: moment().add(-5, 'hour'),
      date_end :moment().add(-150, 'hour'),
      is_karhoo: 0,
      rightTitle: 'title in the right sidebar',
      className: 'assign',
      selectedBgColor: 'rgba(225, 166, 244, 1)',
      payment_method:4,

  
    },
    {
      id: 85,
      id_driver: 2,
      title: 'additional information',
      date_start: moment().add(-3, 'hour'),
      date_end :moment().add(200, 'hour'),
      is_karhoo: 1,
      rightTitle: 'title in the right sidebar',
      className: 'assign',
      selectedBgColor: 'rgba(225, 166, 244, 1)',
      payment_method:5,

    
      },
      {
        id: 86,
        id_driver: "2",
        title: 'additional information',
        date_start: moment().add(3, 'hour'),
        date_end :moment().add(50, 'hour'),
        is_karhoo: 1,
        rightTitle: 'title in the right sidebar',
        className: 'assign',
        selectedBgColor: 'rgba(225, 166, 244, 1)',
         payment_method:5,

      },
      {
        id: 87,
        id_driver: "B_1",
        title: 'additional information',
        date_start: moment().add(-3, 'hour'),
        date_end :moment().add(100, 'hour'),
        is_karhoo: 0,
        rightTitle: 'title in the right sidebar',
        className: 'assign',
        selectedBgColor: 'rgba(225, 166, 244, 1)',
        payment_method:2,

      },
      {
        id: 88,
        id_driver: "B_3",
        title: 'additional information',
        date_start: moment().add(-20, 'hour'),
        date_end :moment().add(48, 'hour'),
        is_karhoo: 1,
        rightTitle: 'title in the right sidebar',
        className: 'assign',
        selectedBgColor: 'rgba(225, 166, 244, 1)',
        payment_method:5,

      },
      {
        id: 89,
        id_driver: 1,
        title: 'additional information',
        date_start: moment(),
        date_end :moment().add(25, 'hour'),
        is_karhoo: 0,
        rightTitle: 'title in the right sidebar',
        className: 'assign',
        selectedBgColor: 'rgba(225, 166, 244, 1)',
         payment_method:3,

      },
      {
        id:90,
        id_driver: "B_3",
        title: 'additional information',
        date_start: moment().add(-15, 'hour'),
        date_end :moment().add(15, 'hour'),
        is_karhoo: 0,
        rightTitle: 'title in the right sidebar',
        className: 'assign',
        selectedBgColor: 'rgba(225, 166, 244, 1)',
      payment_method:3,

      },
      {
        id: 91,
        id_driver: "B_3",
        title: 'additional information',
        date_start: moment().add(-5, 'hour'),
        date_end :moment().add(1, 'hour'),
        is_karhoo: 0,
        rightTitle: 'title in the right sidebar',
        className: 'assign',
        selectedBgColor: 'rgba(225, 166, 244, 1)',
      payment_method:3,

      },


  ]

   
  export const group = [
    { id:"B_1",fullName: `reservations en attentes de dispatch ` , enattente: true    ,rightTitle: null, },
    { id:"B_3",fullName: 'reservations en cours de dispatch ' ,   dispatch: true    ,   rightTitle: null },

]
