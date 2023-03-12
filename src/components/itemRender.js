
import React from 'react';

import karhoo from './karhoo.png'
import wallet from './wallet.png'
import cash from './cash.png'
import company from './company.png'
import cart from './abourd.png'
const itemRenderer = ({ item, timelineContext, itemContext, getItemProps, getResizeProps }) => {



  const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
  return (
    <div
      {...getItemProps({
        style: {
          display:'flex', alignItem:"start",justifyContent:"start",
          backgroundColor:item.id_driver=="B_1" ? '#ffeed2 '  : item.id_driver=="B_2" ?  "#ddf2e2"  :   item.id_driver=="B_3" ?  "#fae9fb"  :  "#e0edff"  ,
          color: item.id_driver=="B_1" ? '#e8ac51 ' : item.id_driver=="B_2" ?  "#5fca75"  :   item.id_driver=="B_3" ?  "#b76ec7"  :  "#357fcc"     ,
        },
      })}
    >
      {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

      <div
      key={itemContext.title}
        style={{
          height: itemContext.dimensions.height,
          overflow: "hidden",
          paddingLeft: 3,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }}
      >
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
           {item.is_karhoo == 1 && <img style={{height:'2.5rem' }} src={karhoo}  /> } 



           {
            item.payment_method == 1 ? 
            <img style={{width:'2rem' ,marginLeft:'3rem',marginTop:"0.5rem",height:"1.5rem" }} src={cash}  />
            :     item.payment_method == 2 ?
            <img style={{width:'2rem' ,marginLeft:'3rem',marginTop:"0.5rem",height:"1.5rem" }} src={wallet}  />
            :     item.payment_method == 3 ?
            <img style={{width:'2rem' ,marginLeft:'3rem',marginTop:"0.5rem",height:"1.5rem" }} src={cart}  />
            :     item.payment_method == 4 ?
            <img style={{width:'2rem' ,marginLeft:'3rem' ,marginTop:"0.5rem",height:"1.5rem" }} src={company}  />
            :
            <> </>

           }
        </div>
      </div>

      {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}

   
    </div>
  );
};


export default itemRenderer







