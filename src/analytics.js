import * as $ from 'jquery'

const createAnalytics = () => {
    let counter = 0
    let destroyed = false

    const listener = () => counter++

    $(document).on('click', listener)

    return {
        destroy() {
            $(document).off('click', listener)
            destroyed = true
        },

        getClicks() {
            // if (isDestroyed) {
            //     return 'Analytics is destroyed'
            // }
            // return counter
            return destroyed ? `Analytics is destroyed. Total click = ${counter}` : counter
        }
    }
}

window.analytics = createAnalytics()