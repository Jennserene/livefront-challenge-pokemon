import {type ReactElement} from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import '@testing-library/jest-dom'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {...options})

export * from '@testing-library/react'
export {customRender as render}
