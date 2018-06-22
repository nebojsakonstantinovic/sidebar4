import React from 'react';

const SidebarSubItem = ({ title, onClick, parentActive, expanded, className }) => {
  return (
    <li className={`mt-0 list-group-item p-0 liItem hover ${className}`} style={{ color: '#FFF', border: '1px solid #FFF',  }} onClick={onClick}>
    {/* backgroundColor: !parentActive ? '#CCc' : null, */}
      {parentActive && expanded
        ? (
          <div className="d-flex 100w justify-content-end" onClick={onClick}>
            <div className="w70 p20 text-left" >
              {title}
            </div>
          </div>
        )
        : <div className="text-left p20 pl-3">{title}</div>
      }
    </li>
  )
}

export default SidebarSubItem;

// style={{paddingLeft: '10px' ,borderLeft: parentActive ? '1px solid #FFF' : null}}