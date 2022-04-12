export const ApiOverview = "/api/overview";

export const ApiCluster_name = "/api/cluster-name";

export const ApiNodes = "/api/nodes";

// /api/nodes/<name>
export const ApiNodesName = "/api/nodes/%s";

export const ApiExtensions = "/api/extensions";

export const ApiDefinitions = "/api/definitions";

// /api/definitions/<vhost>
export const ApiDefinitionsVhost = "/api/definitions/%s";

export const ApiWhoami = "/api/whoami";

// ------------------------------------------------------
// AUTHS
// ------------------------------------------------------

export const ApiAuth = "/api/auth";

// /api/auth/attempts/<node>
export const ApiAuthAttemptsNode = "/api/auth/attempts/%s";

// /api/auth/attempts/<node>/source
export const ApiAuthAttemptsNodeSource = "/api/auth/%s/source";

// ------------------------------------------------------

// ------------------------------------------------------
// BINDINGS
// ------------------------------------------------------

export const ApiBindings = "/api/bindings";

// /api/bindings/<vhost>
export const ApiBindingsVhost = "/api/bindings/%s";

// /api/bindings/<vhost>/e/<exchange>/q/<queue>
export const ApiBindingsVhostEExchangeQQueue = "/api/bindings/%s/e/%s/q/%s";

// /api/bindings/<vhost>/e/<exchange>/q/<queue>/<props>
export const ApiBindingsVhostEExchangeQQueueProps = "/api/bindings/%s/e/%s/q/%s/%s";

// /api/bindings/<vhost>/e/<source>/e/<destination>
export const ApiBindingsVhostESourceEDestination = "/api/bindings/%s/e/%s/e/%s";

// /api/bindings/<vhost>/e/<source>/e/<destination>/<props>
export const ApiBindingsVhostESourceEDestinationProps = "/api/bindings/%s/e/%s/e/%s/%s";

// ------------------------------------------------------

// ------------------------------------------------------
// CONNECTIONS
// ------------------------------------------------------
export const ApiConnections = "/api/connections";

// /api/connections/<name>
export const ApiConnectionsName = "/api/connections/%s";

// /api/connections/<name>/channels
export const ApiConnectionsNameChannels = "/api/connections/%s/channels";

export const ApiChannels = "/api/channels";

// /api/channels/<channel>
export const ApiChannelsChannel = "/api/channels/%s";

export const ApiConsumers = "/api/consumers";

// /api/consumers/<vhost>
export const ApiConsumersVhost = "/api/consumers/%s";

// ------------------------------------------------------

// ------------------------------------------------------
// EXCHANGES
// ------------------------------------------------------

export const ApiExchanges = "/api/exchanges";

// /api/exchanges/<vhost>
export const ApiExchangesVhost = "/api/exchanges/%s";

// /api/exchanges/<vhost>/<name>
export const ApiExchangesVhostName = "/api/exchanges/%s/%s";

// /api/exchanges/<vhost>/<name>/bindings/source
export const ApiExchangesVhostNameBindingsSource = "/api/exchanges/%s/%s/bindings/source";

// /api/exchanges/<vhost>/<name>/bindings/destination
export const ApiExchangesVhostNameBindingsDestination = "/api/exchanges/%s/%s/bindings/destination";

// /api/exchanges/<vhost>/<name>/publish
export const ApiExchangesVhostNamePublish = "/api/exchanges/%s/%s/publish";

// ------------------------------------------------------

// ------------------------------------------------------
// FEDERATIONS
// ------------------------------------------------------

export const ApiFederation_links = "/api/federation-links";

// /api/federation-links/<vhost>
export const ApiFederation_linksVhost = "/api/federation-links/%s";

// ------------------------------------------------------

// ------------------------------------------------------
// HEALTHS
// ------------------------------------------------------

// /api/aliveness-test/<vhost>
export const ApiAliveness_testVhost = "/api/aliveness-test/%s";

export const ApiHealthChecksAlarms = "/api/health/checks/alarms";

export const ApiHealthChecksLocal_alarms = "/api/health/checks/local-alarms";

// /api/health/checks/certificate-expiration/<within>/<unit>
export const ApiHealthChecksCertificate_expirationWithinUnit = "/api/health/checks/certificate-expiration/%s/%s";

// /api/health/checks/port-listener/<port>
export const ApiHealthChecksPort_listenerPort = "/api/health/checks/port-listener/%s";

// /api/health/checks/protocol-listener/<protocol>
export const ApiHealthChecksProtocol_listenerProtocol = "/api/health/checks/protocol-listener/%s";

export const ApiHealthChecksVirtual_hosts = "/api/health/checks/virtual-hosts";

export const ApiHealthChecksNode_is_mirror_sync_critical = "/api/health/checks/node-is-mirror-sync-critical";

export const ApiHealthChecksNode_is_quorum_critical = "/api/health/checks/node-is-quorum-critical";

// ------------------------------------------------------

// ------------------------------------------------------
// PARAMETERS
// ------------------------------------------------------

export const ApiParameters = "/api/parameters";

// /api/parameters/<component>
export const ApiParametersComponent = "/api/parameters/%s";

// /api/parameters/<component>/<vhost>
export const ApiParametersComponentVhost = "/api/parameters/%s/%s";

// /api/parameters/<component>/<vhost>/<name>
export const ApiParametersComponentVhostName = "/api/parameters/%s/%s/%s";

export const ApiGlobal_parameters = "/api/global-parameters";

// /api/global-parameters/<name>
export const ApiGlobal_parametersName = "/api/global-parameters/%s";

// ------------------------------------------------------

// ------------------------------------------------------
// PERMISSIONS
// ------------------------------------------------------

export const ApiPermissions = "/api/permissions";

// /api/permissions/<vhost>/<user>
export const ApiPermissionsVhostUser = "/api/permissions/%s/%s";

export const ApiTopic_permissions = "/api/topic-permissions";

// /api/topic-permissions/<vhost>/<user>
export const ApiTopic_permissionsVhostUser = "/api/topic-permissions/%s/%s";

// ------------------------------------------------------

// ------------------------------------------------------
// POLICIES
// ------------------------------------------------------

export const ApiPolicies = "/api/policies";

// /api/policies/<vhost>
export const ApiPoliciesVhost = "/api/policies/%s";

// /api/policies/<vhost>/<name>
export const ApiPoliciesVhostName = "/api/policies/%s/%s";
export const ApiOperator_policies = "/api/operator-policies";

// /api/operator-policies/<vhost>
export const ApiOperator_policiesVhost = "/api/operator-policies/%s";

// /api/operator-policies/<vhost>/<name>
export const ApiOperator_policiesVhostName = "/api/operator-policies/%s/%s";

// ------------------------------------------------------

// ------------------------------------------------------
// QUEUES
// ------------------------------------------------------

export const ApiQueues = "/api/queues";

// /api/queues/<vhost>/<name>
export const ApiQueuesVhost = "/api/queues/%s";

// /api/queues/<vhost>/<name>
export const ApiQueuesVhostName = "/api/queues/%s/%s";

// /api/queues/<vhost>/<name>/bindings
export const ApiQueuesVhostNameBindings = "/api/queues/%s/%s/bindings";

// /api/queues/<vhost>/<name>/contents
export const ApiQueuesVhostNameContents = "/api/queues/%s/%s/contents";

// /api/queues/<vhost>/<name>/actions
export const ApiQueuesVhostNameActions = "/api/queues/%s/%s/actions";

// /api/queues/<vhost>/<name>/get
export const ApiQueuesVhostNameGet = "/api/queues/%s/%s/get";

export const ApiRebalanceQueues = "/api/rebalance/queues";

// ------------------------------------------------------

// ------------------------------------------------------
// USERS
// ------------------------------------------------------

export const ApiUsers = "/api/users";
export const ApiUsersWithout_permissions = "/api/users/without-permissions";
export const ApiUsersBulk_delete = "/api/users/bulk-delete";

// /api/users/<name>
export const ApiUsersName = "/api/users/%s";

// /api/users/<user>/permissions
export const ApiUsersUserPermissions = "/api/users/%s/permissions";

// ------------------------------------------------------

// /api/users/<user>/topic-permissions
export const ApiUsersUserTopic_permissions = "/api/users/%s/topic-permissions";

// ------------------------------------------------------
// USERS LIMITS
// ------------------------------------------------------

export const ApiUser_limits = "/api/user-limits";

// /api/user-limits/<user>
export const ApiUser_limitsUser = "/api/user-limits/%s";

// /api/user-limits/<user>/<name>
export const ApiUser_limitsUserName = "/api/user-limits/%s/%s";

// ------------------------------------------------------

// ------------------------------------------------------
// VHOSTS
// ------------------------------------------------------

export const ApiVhosts = "/api/vhosts";

// /api/vhosts/<name>
export const ApiVhostsName = "/api/vhosts/%s";

// /api/vhosts/<vhost>/channels
export const ApiVhostsVhostChannels = "/api/vhosts/%s/channels";

// /api/vhosts/<vhost>/connections
export const ApiVhostsVhostConnections = "/api/vhosts/%s/connections";

// /api/vhosts/<name>/permissions
export const ApiVhostsNamePermissions = "/api/vhosts/%s/permissions";

// /api/vhosts/<name>/start/<node>
export const ApiVhostsNameStartNode = "/api/vhosts/%s/start/%s";

// /api/vhosts/<name>/topic-permissions
export const ApiVhostsNameTopic_permissions = "/api/vhosts/%s/topic-permissions";

export const ApiVhost_limits = "/api/vhost-limits";

// /api/vhost-limits/<vhost>
export const ApiVhost_limitsVhost = "/api/vhost-limits/%s";

// /api/vhost-limits/<vhost>/<name>
export const ApiVhost_limitsVhostName = "/api/vhost-limits/%s/%s";

// ------------------------------------------------------
