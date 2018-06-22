import React, { Component } from 'react';
import { SidebarItem, SidebarSubItem } from './';
import './Components.css';
import './Responsive.css';

const itemArr = [
  {
    title: 'Catalog',
    icon: 'fas fa-user',
    subitems: [{ title: 'products', link: '' }, { title: 'cart routes', link: '' }, { title: 'orders', link: '' }, { title: 'modules', link: '' }]
  },
  {
    title: 'Catalog2',
    icon: 'fas fa-anchor',
    subitems: [{ title: 'products2', link: '' }, { title: 'cart routes2', link: '' }, { title: 'orders2', link: '' }, { title: 'modules2', link: '' }]
  }
];

class Sidebar extends Component {

  state = {
    activeTab: null,
    activeItem: '',
    activeSubitem: '',
  };

  setItem = (index, e)  => {
    this.setState({activeItem: index, activeSubitem: 0});
  }
  setSubitem = (i, e)  => {
    this.setState({activeSubitem: i});
  }

  render() {
    const { activeTab, activeItem, activeSubitem } = this.state;
    const { onSidebarChange, expanded } = this.props;

    return (
      <ul className="list-group p-0 text-white">
        {itemArr.map((item, index) => {
          return (
            <SidebarItem key={index} className={`${activeItem === index ? 'active' : ''}`} icon={item.icon} expanded={expanded} active={activeItem === index && expanded} title={item.title}  onClick={this.setItem.bind(null, index)}>
             <ul className={`list-group p-0 ${activeItem === index ? 'active' : ''}`}>
             {item.subitems.map((subitem, i) => <SidebarSubItem key={`${index}-${i}`} className={`${activeItem === index && activeSubitem === i ? 'active' : null}`} expanded={expanded}  title={subitem.title} onClick={this.setSubitem.bind(null, i)} />)}
             </ul>
            </SidebarItem>
          )
        })}
        
        <SidebarItem icon='fas fa-align-justify' onClick={onSidebarChange}>
        </SidebarItem>
        <li className="text-white">{expanded ? 'EXPANDED' : 'MIN'}</li>
      </ul>
    );
  }
}

export default Sidebar;
