import React from 'react';
import './App.scss';

import Card from './components/Card';
import calculatorIcon from './assets/icon-calculator.svg';
import karmaIcon from './assets/icon-karma.svg';
import supervisorIcon from './assets/icon-supervisor.svg';
import teamBuilderIcon from './assets/icon-team-builder.svg';

const App = function MainApp() {
  return (
    <section className="cards">
      <Card color="cyan" name="Supervisor" icon={supervisorIcon} description="Monitors activity to identify projects roadblocks" />
      <div className="center">
        <Card color="red" name="Team Builder" icon={teamBuilderIcon} description="Monitors activity to identify projects roadblocks" />
        <Card color="orange" name="Karma" icon={karmaIcon} description="Monitors activity to identify projects roadblocks" />
      </div>
      <Card color="blue" name="Calculator" icon={calculatorIcon} description="Monitors activity to identify projects roadblocks" />
    </section>
  );
};

export default App;
