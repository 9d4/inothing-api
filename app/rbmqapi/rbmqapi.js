/**
 * Put request to RabbitMQ API here. 
 */

/** get full url to rabbitmq api
 *  @param {String} path
 * @returns {String}
 */
module.exports.getUrl = async function getUrl(path) {
    // join RABBITMQ_SERVER with path. Give slash if necessary
    const rmqserver = process.env.RABBITMQ_SERVER
    const url = `${rmqserver.endsWith("/") ? rmqserver.substring(0, rmqserver.length - 1) : rmqserver}/api${path.startsWith('/') ? path : '/' + path}`;

    return url;
}

/** @alias module:rbmqapi.getUrl but synchronous
 *  get full url to rabbitmq api
 *  @param {String} path
 *  @returns {String}
 */
module.exports.getUrlSync = function getUrlSync(path) {
    // join RABBITMQ_SERVER with path. Give slash if necessary
    const rmqserver = process.env.RABBITMQ_SERVER
    const url = `${rmqserver.endsWith("/") ? rmqserver.substring(0, rmqserver.length - 1) : rmqserver}/api${path.startsWith('/') ? path : '/' + path}`;

    return url;
}

module.exports.newUser = async () => {

}
