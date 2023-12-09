import fs from 'fs'

import { readFile } from './mock_module'

jest.mock('fs')
const mockFs = jest.mocked(fs)
mockFs.readFileSync.mockReturnValue('dummy data')

it('readFileがデータを返却する', () => {
  const result = readFile('path/dummy')
  expect(result).toBe('dummy data')
  expect(fs.readFileSync).toHaveBeenCalledTimes(1)
  expect(fs.readFileSync).toHaveBeenCalledWith('path/dummy', {
    encoding: 'utf-8',
  })
})
