import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Home from '../app/page'

// Mock the child components to avoid deep rendering issues in unit tests
// and because we are only testing the Home page integration
import { vi } from 'vitest'

vi.mock('../components/Hero', () => ({
    default: () => <div data-testid="hero">Hero</div>
}))

vi.mock('../components/Services/ServicesGrid', () => ({
    default: () => <div data-testid="services">Services</div>
}))

describe('Home Page', () => {
    it('renders without crashing', () => {
        render(<Home />)
        expect(true).toBeTruthy()
    })
})
