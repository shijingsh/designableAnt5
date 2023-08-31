import { GlobalRegistry, IDesignerRegistry } from '@liukefu/designable-core'
import { globalThisPolyfill } from '@liukefu/designable-shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
