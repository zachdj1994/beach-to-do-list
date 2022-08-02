import React from 'react';
import { render, screen } from '@testing-library/react';
import {PageHeaderComponent} from './PageHeaderComponent';

describe('The page header component', () => {
    it('renders the page header', () => {
        render(<PageHeaderComponent />);
        const header = screen.getByText("Trader Zach's Tropical To Do List");
        expect(header).toBeInTheDocument();
    });
});
