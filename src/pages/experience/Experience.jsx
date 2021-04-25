import React from 'react'
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import timelineElements from './timelineElements';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Experience = () => {
  let workIconStyles = { background: "white" };
  let schoolIconStyles = { background: "grey" };
  return (
    <div id="experience">
      <h1 className="pt-3 text-center  pb-3">Experience</h1>
     <VerticalTimeline>
      { timelineElements.map(element=>{
        let isWorkIcon = element.icon === "work";
        return(
          <VerticalTimelineElement
          key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}>
           <h4 className="vertical-timeline-element-title">{element.title}</h4>
         <h6 className="vertical-timeline-element-subtitle">{element.location}</h6>
          <p id="description">{element.description}</p>
          </VerticalTimelineElement>
        )

       })}
     </VerticalTimeline>
    </div>
  )
}

export default Experience
