const { expect } = require('chai')
const { JSDOM } = require('jsdom')
const React = require('react')
const ReactDOM = require('react-dom')
const { act } = require('react-dom/test-utils')
const useCountDown = require('../test-lib/index')

const dom = new JSDOM('')

global.window = dom.window
global.document = dom.window.document

describe('index', () => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })

  it('', () => {
    act(() => {
      ReactDOM.render(React.createElement('div'), container)
    })
    expect(container.querySelector('div')).to.not.equal(null)
  })
})
