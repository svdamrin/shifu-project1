import React, { Component } from 'react';
import data from '../list.json'


class Admin extends Component {
   render() {
      return (
         <div>
            <h2>Admin</h2>
            <ul>
        {
          data.map(function(eventlist){
            return <li>{eventlist.title}  {eventlist.content} {eventlist.slug}</li>;
          })
        }
        </ul>
         </div>
      );
   }
}
export default Admin;