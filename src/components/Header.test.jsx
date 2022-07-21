import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Header } from './Header'

it('should render Header with text React Hoowks', () => {
  render(<Header>React Hoowks</Header>)
  const heading = screen.getByRole('heading', { name: /React Hooks and How/ })
  expect(heading).toBeInTheDocument()
  screen.debug()
})