import React from 'react';
import DailyTask from '../dailytask';

interface TaskListProps {
    name: string;
}

const tasks = [0, 1, 2];

class TaskList extends React.Component<TaskListProps, {}> {
    render() {
        return (
            <>
            <h1>{this.props.name}</h1>
            <ol>
                {tasks.map(t => 
                    <DailyTask taskNumber={t}/>
                )}
            </ol>
            </>
        );
    }
}

export default TaskList;