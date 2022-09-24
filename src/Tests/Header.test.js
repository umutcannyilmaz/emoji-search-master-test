import React from 'react';
import '@testing-library/jest-dom';
import Header from "../Header"
import {render, screen} from '@testing-library/react'

test("Header render", () => {
    render(<Header/>);

    const headerDom = screen.getByText(/Emoji Search/i);
    expect(headerDom).toBeInTheDocument();
})