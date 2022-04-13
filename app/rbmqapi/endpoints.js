module.exports.ApiOverview = "/api/overview";

module.exports.ApiCluster_name = "/api/cluster-name";

module.exports.ApiNodes = "/api/nodes";

// /api/nodes/<name>
module.exports.ApiNodesName = "/api/nodes/%s";

module.exports.ApiExtensions = "/api/extensions";

module.exports.ApiDefinitions = "/api/definitions";

// /api/definitions/<vhost>
module.exports.ApiDefinitionsVhost = "/api/definitions/%s";

module.exports.ApiWhoami = "/api/whoami";

// ------------------------------------------------------
// AUTHS
// ------------------------------------------------------

module.exports.ApiAuth = "/api/auth";

// /api/auth/attempts/<node>
module.exports.ApiAuthAttemptsNode = "/api/auth/attempts/%s";

// /api/auth/attempts/<node>/source
module.exports.ApiAuthAttemptsNodeSource = "/api/auth/%s/source";

// ------------------------------------------------------

// ------------------------------------------------------
// BINDINGS
// ------------------------------------------------------

module.exports.ApiBindings = "/api/bindings";

// /api/bindings/<vhost>
module.exports.ApiBindingsVhost = "/api/bindings/%s";

// /api/bindings/<vhost>/e/<exchange>/q/<queue>
module.exports.ApiBindingsVhostEExchangeQQueue = "/api/bindings/%s/e/%s/q/%s";

// /api/bindings/<vhost>/e/<exchange>/q/<queue>/<props>
module.exports.ApiBindingsVhostEExchangeQQueueProps = "/api/bindings/%s/e/%s/q/%s/%s";

// /api/bindings/<vhost>/e/<source>/e/<destination>
module.exports.ApiBindingsVhostESourceEDestination = "/api/bindings/%s/e/%s/e/%s";

// /api/bindings/<vhost>/e/<source>/e/<destination>/<props>
module.exports.ApiBindingsVhostESourceEDestinationProps = "/api/bindings/%s/e/%s/e/%s/%s";

// ------------------------------------------------------

// ------------------------------------------------------
// CONNECTIONS
// ------------------------------------------------------
module.exports.ApiConnections = "/api/connections";

// /api/connections/<name>
module.exports.ApiConnectionsName = "/api/connections/%s";

// /api/connections/<name>/channels
module.exports.ApiConnectionsNameChannels = "/api/connections/%s/channels";

module.exports.ApiChannels = "/api/channels";

// /api/channels/<channel>
module.exports.ApiChannelsChannel = "/api/channels/%s";

module.exports.ApiConsumers = "/api/consumers";

// /api/consumers/<vhost>
module.exports.ApiConsumersVhost = "/api/consumers/%s";

// ------------------------------------------------------

// ------------------------------------------------------
// EXCHANGES
// ------------------------------------------------------

module.exports.ApiExchanges = "/api/exchanges";

// /api/exchanges/<vhost>
module.exports.ApiExchangesVhost = "/api/exchanges/%s";

// /api/exchanges/<vhost>/<name>
module.exports.ApiExchangesVhostName = "/api/exchanges/%s/%s";

// /api/exchanges/<vhost>/<name>/bindings/source
module.exports.ApiExchangesVhostNameBindingsSource = "/api/exchanges/%s/%s/bindings/source";

// /api/exchanges/<vhost>/<name>/bindings/destination
module.exports.ApiExchangesVhostNameBindingsDestination = "/api/exchanges/%s/%s/bindings/destination";

// /api/exchanges/<vhost>/<name>/publish
module.exports.ApiExchangesVhostNamePublish = "/api/exchanges/%s/%s/publish";

// ------------------------------------------------------

// ------------------------------------------------------
// FEDERATIONS
// ------------------------------------------------------

module.exports.ApiFederation_links = "/api/federation-links";

// /api/federation-links/<vhost>
module.exports.ApiFederation_linksVhost = "/api/federation-links/%s";

// ------------------------------------------------------

// ------------------------------------------------------
// HEALTHS
// ------------------------------------------------------

// /api/aliveness-test/<vhost>
module.exports.ApiAliveness_testVhost = "/api/aliveness-test/%s";

module.exports.ApiHealthChecksAlarms = "/api/health/checks/alarms";

module.exports.ApiHealthChecksLocal_alarms = "/api/health/checks/local-alarms";

// /api/health/checks/certificate-expiration/<within>/<unit>
module.exports.ApiHealthChecksCertificate_expirationWithinUnit = "/api/health/checks/certificate-expiration/%s/%s";

// /api/health/checks/port-listener/<port>
module.exports.ApiHealthChecksPort_listenerPort = "/api/health/checks/port-listener/%s";

// /api/health/checks/protocol-listener/<protocol>
module.exports.ApiHealthChecksProtocol_listenerProtocol = "/api/health/checks/protocol-listener/%s";

module.exports.ApiHealthChecksVirtual_hosts = "/api/health/checks/virtual-hosts";

module.exports.ApiHealthChecksNode_is_mirror_sync_critical = "/api/health/checks/node-is-mirror-sync-critical";

module.exports.ApiHealthChecksNode_is_quorum_critical = "/api/health/checks/node-is-quorum-critical";

// ------------------------------------------------------

// ------------------------------------------------------
// PARAMETERS
// ------------------------------------------------------

module.exports.ApiParameters = "/api/parameters";

// /api/parameters/<component>
module.exports.ApiParametersComponent = "/api/parameters/%s";

// /api/parameters/<component>/<vhost>
module.exports.ApiParametersComponentVhost = "/api/parameters/%s/%s";

// /api/parameters/<component>/<vhost>/<name>
module.exports.ApiParametersComponentVhostName = "/api/parameters/%s/%s/%s";

module.exports.ApiGlobal_parameters = "/api/global-parameters";

// /api/global-parameters/<name>
module.exports.ApiGlobal_parametersName = "/api/global-parameters/%s";

// ------------------------------------------------------

// ------------------------------------------------------
// PERMISSIONS
// ------------------------------------------------------

module.exports.ApiPermissions = "/api/permissions";

// /api/permissions/<vhost>/<user>
module.exports.ApiPermissionsVhostUser = "/api/permissions/%s/%s";

module.exports.ApiTopic_permissions = "/api/topic-permissions";

// /api/topic-permissions/<vhost>/<user>
module.exports.ApiTopic_permissionsVhostUser = "/api/topic-permissions/%s/%s";

// ------------------------------------------------------

// ------------------------------------------------------
// POLICIES
// ------------------------------------------------------

module.exports.ApiPolicies = "/api/policies";

// /api/policies/<vhost>
module.exports.ApiPoliciesVhost = "/api/policies/%s";

// /api/policies/<vhost>/<name>
module.exports.ApiPoliciesVhostName = "/api/policies/%s/%s";
module.exports.ApiOperator_policies = "/api/operator-policies";

// /api/operator-policies/<vhost>
module.exports.ApiOperator_policiesVhost = "/api/operator-policies/%s";

// /api/operator-policies/<vhost>/<name>
module.exports.ApiOperator_policiesVhostName = "/api/operator-policies/%s/%s";

// ------------------------------------------------------

// ------------------------------------------------------
// QUEUES
// ------------------------------------------------------

module.exports.ApiQueues = "/api/queues";

// /api/queues/<vhost>/<name>
module.exports.ApiQueuesVhost = "/api/queues/%s";

// /api/queues/<vhost>/<name>
module.exports.ApiQueuesVhostName = "/api/queues/%s/%s";

// /api/queues/<vhost>/<name>/bindings
module.exports.ApiQueuesVhostNameBindings = "/api/queues/%s/%s/bindings";

// /api/queues/<vhost>/<name>/contents
module.exports.ApiQueuesVhostNameContents = "/api/queues/%s/%s/contents";

// /api/queues/<vhost>/<name>/actions
module.exports.ApiQueuesVhostNameActions = "/api/queues/%s/%s/actions";

// /api/queues/<vhost>/<name>/get
module.exports.ApiQueuesVhostNameGet = "/api/queues/%s/%s/get";

module.exports.ApiRebalanceQueues = "/api/rebalance/queues";

// ------------------------------------------------------

// ------------------------------------------------------
// USERS
// ------------------------------------------------------

module.exports.ApiUsers = "/api/users";
module.exports.ApiUsersWithout_permissions = "/api/users/without-permissions";
module.exports.ApiUsersBulk_delete = "/api/users/bulk-delete";

// /api/users/<name>
module.exports.ApiUsersName = "/api/users/%s";

// /api/users/<user>/permissions
module.exports.ApiUsersUserPermissions = "/api/users/%s/permissions";

// ------------------------------------------------------

// /api/users/<user>/topic-permissions
module.exports.ApiUsersUserTopic_permissions = "/api/users/%s/topic-permissions";

// ------------------------------------------------------
// USERS LIMITS
// ------------------------------------------------------

module.exports.ApiUser_limits = "/api/user-limits";

// /api/user-limits/<user>
module.exports.ApiUser_limitsUser = "/api/user-limits/%s";

// /api/user-limits/<user>/<name>
module.exports.ApiUser_limitsUserName = "/api/user-limits/%s/%s";

// ------------------------------------------------------

// ------------------------------------------------------
// VHOSTS
// ------------------------------------------------------

module.exports.ApiVhosts = "/api/vhosts";

// /api/vhosts/<name>
module.exports.ApiVhostsName = "/api/vhosts/%s";

// /api/vhosts/<vhost>/channels
module.exports.ApiVhostsVhostChannels = "/api/vhosts/%s/channels";

// /api/vhosts/<vhost>/connections
module.exports.ApiVhostsVhostConnections = "/api/vhosts/%s/connections";

// /api/vhosts/<name>/permissions
module.exports.ApiVhostsNamePermissions = "/api/vhosts/%s/permissions";

// /api/vhosts/<name>/start/<node>
module.exports.ApiVhostsNameStartNode = "/api/vhosts/%s/start/%s";

// /api/vhosts/<name>/topic-permissions
module.exports.ApiVhostsNameTopic_permissions = "/api/vhosts/%s/topic-permissions";

module.exports.ApiVhost_limits = "/api/vhost-limits";

// /api/vhost-limits/<vhost>
module.exports.ApiVhost_limitsVhost = "/api/vhost-limits/%s";

// /api/vhost-limits/<vhost>/<name>
module.exports.ApiVhost_limitsVhostName = "/api/vhost-limits/%s/%s";

// ------------------------------------------------------
