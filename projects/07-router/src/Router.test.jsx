import { describe, it, expect, beforeEach, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Router } from "./Router.jsx";
import { getCurrentPath } from "./utils/getCurrentPath.js";

vi.mock('../utils/getCurrentPath.js', () => ({
    getCurrentPath: vi.fn()
  }))

describe('Router', () => {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })

    it('should render without problems', () => {
       render(<Router routes={[]}/>)
       expect(true).toBeTruthy()
    })

    it('should render 404 if noutes match', () => {
        render(<Router routes={[]} DefaultComponent={() => <h1>404</h1>}/>)
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('should render the component of the first route that matches', () => {
        getCurrentPath.mockReturnValue('/about')
    
        const routes = [
          {
            path: '/',
            Component: () => <h1>Home</h1>
          },
          {
            path: '/about',
            Component: () => <h1>About</h1>
          }
        ]
    
        render(<Router routes={routes} />)
        expect(screen.getByText('About')).toBeTruthy()
      })

})