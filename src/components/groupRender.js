


import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function stringToColor(string) {
       let hash = 0;
       let i;
     
       /* eslint-disable no-bitwise */
       for (i = 0; i < string?.length; i += 1) {
         hash = string.charCodeAt(i) + ((hash << 5) - hash);
       }
     
       let color = '#';
     
       for (i = 0; i < 3; i += 1) {
         const value = (hash >> (i * 8)) & 0xff;
         color += `00${value.toString(16)}`.slice(-2);
       }
       /* eslint-enable no-bitwise */
     
       return color;
     }
     function stringAvatar(name) {
       return {
         sx: {
           bgcolor: stringToColor(name),
         },
         children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
       };
     }
const groupRender = ({ group }) => {
  console.log(group)
    return (
      <>
             <div key={group.id} className="custom-group">
                    {group.online == 1 ? 
                           <div className="container">
                           <span></span>
                          </div>:  group.online == 0 ?<div className="con">
                               <span></span>
                           </div> :  group.online  == null && group.enattente ?  <div className="enAttente">
                           <span></span>
                          </div> : group.online  == null && group.confirmées ?  <div className="confirmées">
                           <span></span>
                          </div> :  group.online  == null && group.dispatch ?  <div className="dispatch">
                           <span></span>
                          </div> : <div className="con">
                           <span></span>
                          </div>
                     }
                  <div className='userCart'>
                  { (group.id !== 'B_1' && group.id !== 'B_2' && group.id !== 'B_3') && <></> }

                  <span className="title">{group.first_name || group.fullName}</span>
                 { group.wallet &&  
                        <button className='btn'>
                         <span className="followers">&nbsp;{group.netOFDAy}  $ </span>
                       </button>
                 }
                  </div>
             </div>
      </>
    )
  }


  export default groupRender