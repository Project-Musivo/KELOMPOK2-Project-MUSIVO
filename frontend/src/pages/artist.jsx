import React from 'react'
import NavigationBar from '../components/layouts/navigationBar/navigationBar'
import Sidebar from '../components/layouts/sidebar/sidebar'

const artist = () => {
  return (
    <React.Fragment>
        <div className="flex">
            <Sidebar/>
            <div className="flex">
                <NavigationBar/>
            </div>
        </div>
    </React.Fragment>
  )
}

export default artist