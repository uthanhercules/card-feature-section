import React from 'react';
import './style.scss';

export default function index(props) {
  const {
    name, color, icon, description,
  } = props;

  const styleSheet = {
    borderColor: `${color}`,
  };

  return (
    <section className="card" style={styleSheet}>
      <h2>{name}</h2>
      <p>{description}</p>
      <div>
        <img src={icon} alt={`${name} icon`} />
      </div>
    </section>
  );
}
