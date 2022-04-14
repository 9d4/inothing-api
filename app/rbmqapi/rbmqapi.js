/**
 * Put request to RabbitMQ API here. 
 */

const axios = require("axios");
const { sprintf } = require("sprintf-js");
const { ApiUsersName, ApiPermissions, ApiPermissionsVhostUser } = require("./endpoints");

const AUTH = {
    username: process.env.RABBITMQ_USER,
    password: process.env.RABBITMQ_PASS,
};
const VHOST = process.env.RABBITMQ_VHOST;

/** get full url to rabbitmq api
 *  @param {String} path
 * @returns {String}
 */
module.exports.getUrl = async function getUrl(path) {
    // join RABBITMQ_SERVER with path. Give slash if necessary
    const rmqserver = process.env.RABBITMQ_SERVER
    const url = `${rmqserver.endsWith("/") ? rmqserver.substring(0, rmqserver.length - 1) : rmqserver}${path.startsWith('/') ? path : '/' + path}`;

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
    const url = `${rmqserver.endsWith("/") ? rmqserver.substring(0, rmqserver.length - 1) : rmqserver}${path.startsWith('/') ? path : '/' + path}`;

    return url;
}

module.exports.newUser = async (username, password) => {
    const url = await module.exports.getUrl(sprintf(ApiUsersName, username));

    return axios.put(url,
        {
            password: password,
            tags: ["management"],
        },
        {
            auth: {
                username: process.env.RABBITMQ_USER,
                password: process.env.RABBITMQ_PASS,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
}

/**
 * Set user permission against vhost(s) in RabbitMQ
 * set vhost to null or "" to set permission against default vhost 
 * 
 * @param {String} vhost
 * @param {String} username 
 * @param {Object} permission 
 */
module.exports.setUserPermission = async (vhost, username, permission) => {
    vhost = encodeURIComponent(vhost || VHOST);
    username = encodeURIComponent(username);

    const url = await module.exports.getUrl(sprintf(ApiPermissionsVhostUser, vhost, username));

    return axios.put(url,
        {
            configure: permission.configure,
            write: permission.write,
            read: permission.read,
        },
        {
            auth: AUTH,
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
}
