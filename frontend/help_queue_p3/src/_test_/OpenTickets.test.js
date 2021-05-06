import React from 'react';
import renderer from 'react-test-renderer';
import OpenTickets from  '../Components/TicketComponent/OpenTickets';





it('renders correctly', () => {
    const title = "Jest ";
    const topic = "Jest Test ";
    const traineeName = "Shamsi";
    const cohort = "cne";
    const trainer = "Reece";
    const description = "Jest Test description";
    const time = "0505";
    const tree = renderer.create(<OpenTickets title={title} topic={topic} traineeName={traineeName} cohort={cohort} trainer={trainer} description={description} time={time}/>).toJSON();
    expect(tree).toMatchSnapshot();
});


// import React from 'react';
// import renderer from 'react-test-renderer';
// import CreateTicket from  '../Components/TicketComponent/CreateTicket';
// import ClosedTickets from  '../Components/TicketComponent/ClosedTickets';





// it('renders correctly', () => {
//     const id = 2;
//     const title = "Jest ";
//     const topic = "Jest Test ";
//     const traineeName = "Shamsi";
//     const cohort = "cne";
//     const trainer = "Reece";
//     const description = "Jest Test description";
//     const time = "0505";
//     // const completed = true;
//     const tree = renderer.create(<ClosedTickets id={id} Title={title} topic={topic} traineeName={traineeName} cohort={cohort} trainer={trainer} description={description} time={time} />).toJSON();
//     expect(tree).toMatchSnapshot();
// });

