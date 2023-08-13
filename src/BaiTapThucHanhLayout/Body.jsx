


import React from 'react'
import Banner from './Banner'
import Item from './Item'

export default function Body(props) {
  return (
    <>
        
        
        <Banner/>
        
       {/* Page Content*/}
<section className="pt-4">
  <div className="container px-lg-5">
    {/* Page Features*/}
    <div className="row gx-lg-5">
      
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
    </div>
  </div>
</section>

          
        
    </>
  );
}
