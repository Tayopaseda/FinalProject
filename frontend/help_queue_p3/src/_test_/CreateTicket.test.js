import React from 'react';
import renderer from 'react-test-renderer';
import CreateTicket from  '../Components/TicketComponent/CreateTicket';





it('renders correctly', () => {
    const title = "Jest ";
    const topic = "Jest Test ";
    const traineeName = "Shamsi";
    const cohort = "cne";
    const trainer = "Reece";
    const description = "Jest Test description";
    const time = "0505";
    const tree = renderer.create(<CreateTicket title={title} topic={topic} traineeName={traineeName} cohort={cohort} trainer={trainer} description={description} time={time}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

