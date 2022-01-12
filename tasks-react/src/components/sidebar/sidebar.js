import './sidebar.scss';

function ListItem(props) {
  return (
    <li className="sidebar__item">
      <a href={props.data.url} className="sidebar__link">
        <span className="material-icons">{props.data.icon}</span>
        {props.data.text}
      </a>
    </li>
  )
}

function Sidebar() {

  const mainOptions = [
      {
        text: 'Time Tracker',
        url: 'time-tracker',
        icon: 'schedule'
      },
      {
        text: 'Calendar',
        url: 'calendar',
        icon: 'calendar_today'
      }
  ];

  const analyzeOptions = [
    {
      text: 'Dashboard',
      url: 'dashboard',
      icon: 'grid_view'
    },
    {
      text: 'Reports',
      url: 'reports',
      icon: 'bar_chart'
    },
  ]

  const manageOptions = [
    {
      text: 'Projects',
      url: 'projects',
      icon: 'article'
    },
    {
      text: 'Team',
      url: 'team',
      icon: 'groups'
    },
    {
      text: 'Client',
      url: 'clients',
      icon: 'person'
    },
    {
      text: 'Tags',
      url: 'tags',
      icon: 'local_offer'
    },
    {
      text: 'Settings',
      url: 'settings',
      icon: 'settings'
    },
    {
      text: 'Contact Us',
      url: 'contact-us',
      icon: 'contact_support'
    }
  ]

  return (
    <div className="sidebar">

      <ul className="sidebar__list">
          {mainOptions.map(option => (
            <ListItem key={option.text} data={option} />
          ))}
      </ul>

      <p className="sidebar__title">Analyze</p>
      <ul className="sidebar__list">
        {analyzeOptions.map(option => (
          <ListItem key={option.text} data={option} />
        ))}
      </ul>

      <p className="sidebar__title">Manage</p>
      <ul className="sidebar__list">
        {manageOptions.map(option => (
          <ListItem key={option.text} data={option} />
        ))}
      </ul>
    </div>
  )
}

export default Sidebar;