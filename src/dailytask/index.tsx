import React from "react";

interface DailyTaskProps {
  taskNumber: number;
}

class DailyTask extends React.Component<DailyTaskProps, {}> {
  render() {
    return (
      <li>
        <p>Yay {this.props.taskNumber}!</p>
      </li>
    );
  }
}

export default DailyTask;
