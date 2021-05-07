import React from 'react';
import renderer from 'react-test-renderer';
import DeleteTicket from  '../Components/TicketComponent/DeleteTicket';

it('DeleteTicket should match the snapshot every time it is rendered', () => {
    const id = 2;
    const title = "Jest ";
    const topic = "Jest Test ";
    const traineeName = "Trainee 1";
    const cohort = "CloudNative";
    const trainer = "Vinesh Ghela";
    const description = "Jest Test description";
    const time = "06/05/2021, 11:46:13";
    const tree = renderer.create(<DeleteTicket id={id} title={title} topic={topic} traineeName={traineeName} cohort={cohort} trainer={trainer} description={description} time={time}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
