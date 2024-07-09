import { Application } from "@hotwired/stimulus"
import Flatpickr from 'stimulus-flatpickr';

const application = Application.start()
application.debug = false
window.Stimulus   = application

import { Alert, Autosave, ColorPreview, Dropdown, Modal, Tabs, Popover, Toggle, Slideover } from "tailwindcss-stimulus-components"
application.register('alert', Alert)
application.register('autosave', Autosave)
application.register('color-preview', ColorPreview)
application.register('dropdown', Dropdown)
application.register('modal', Modal)
application.register('popover', Popover)
application.register('slideover', Slideover)
application.register('tabs', Tabs)
application.register('toggle', Toggle)
application.register('flatpickr', Flatpickr)

export { application }
