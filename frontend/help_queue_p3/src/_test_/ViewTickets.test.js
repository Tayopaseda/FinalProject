import React from 'react';
import renderer from 'react-test-renderer';
import ViewTickets from  '../Components/TicketComponent/ViewTickets';





it('ViewTicket should match the snapshot every time it is rendered', () => {
    const id = 2;
    const title = "Jest ";
    const topic = "Jest Test ";
    const traineeName = "Trainee 1";
    const cohort = "CloudNative";
    const trainer = "Vinesh Ghela";
    const description = "Jest Test description";
    const time = "06/05/2021, 11:46:13";
    const completed = true;
    const solution = "Solution"
    const tree = renderer.create(<ViewTickets id={id} title={title} topic={topic} traineeName={traineeName} cohort={cohort} trainer={trainer} description={description} time={time} completed={completed} solution= {solution}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

