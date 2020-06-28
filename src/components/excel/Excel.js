import { $ } from '@core/Dom'

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector) 
    this.components = options.components || []
  }

  getRoot () {
    const $root = $.create('div', 'excel')
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      
      const component = new Component($el)
      // if (component.name) 
      //   window['c' + component.name] = component
      
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
    return $root
  }

  render () {
    this.$el.append(this.getRoot())

    this.components.forEach(component => component.init())
  }

  // observeDomChanges () {
  //   const $target = document.querySelector('.excel')
  //   const config = { childList: true }

  //   const callback = mutationList => {
  //     for (const mutation of mutationList) {
  //       const removedNodes = Array.from(mutation.removedNodes)
  //       const addedNodes = Array.from(mutation.addedNodes)
  //       manageComponents(this.components, removedNodes, 'destroy')
  //       manageComponents(this.components, addedNodes, 'init')
  //     }
  //   }
  //   const observer = new MutationObserver(callback)
  //   observer.observe($target, config)
  // }
}

// function manageComponents (allComponents, changedNodes, action) {
//   if (changedNodes.length) allComponents
//     .filter(comp => changedNodes.includes(comp.$root.$el))
//     .forEach(changedComp => changedComp[action]())
// }
