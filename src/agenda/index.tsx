import React from 'react';
import TaskList from '../tasklist';

function Agenda() {
    return (
        <>
          <TaskList name="Overdue" />
          <TaskList name="Today" />
        </>
      );
      
}

export default Agenda;