import React from 'react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';
import {expect, it} from '@jest/globals';
import UpdateTicket from '../Components/TicketComponent/UpdateTicket';

describe(`Ticket render tests with ticket data props`, () => {

    const ticketValues = {
        title: "title",
        topic: "topic",
        trainee: "traineeName",
        cohort: "cohort",
        trainer: "trainer",
        description: "description",
        dateTime: "time"
    }
    let componentToTest;

beforeEach( () => {
    const TestInstance = create(<UpdateTicket{...ticketValues}/>)
    componentToTest = TestInstance.root;
});

it(`Should render "title" in a title form`, () => {
    const titl = componentToTest.findByProps({ id: "tickTitle"});
    expect(titl.children).toEqual([ticketValues.title]);
});

})