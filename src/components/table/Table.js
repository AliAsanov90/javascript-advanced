import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { $ } from '@core/Dom'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor ($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    })
  }

  toHTML () {
    return createTable(30)
  } 

  onMousedown (e) {
    if (e.target.dataset.resize) {
      const $target = $(e.target)

      console.log($target)

      document.onmousemove = e => {
        console.log($target)
      }
    }
  }
}
