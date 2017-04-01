import logatim from 'logatim'

logatim.setLevel('trace')

const now = () => {
    const today = new Date()
    return `${today.toLocaleTimeString()}:${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()} -`
}

const info = function() {
    logatim.bold.green.info(now(), 'INFO:',...arguments);
}
const debug = function() {
    logatim.bold.blue.debug(now(), 'DEBUG:',...arguments);
}
const error = function() {
    logatim.red.bold.error(now(), 'ERROR:',...arguments);
}

export {
    info, debug, error
}
