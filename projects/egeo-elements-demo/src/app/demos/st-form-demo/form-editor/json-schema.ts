/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
export const JSON_SCHEMA: any = {
   'type': 'object',
   'additionalProperties': false,
   'properties': {
      'general': {
         'type': 'object',
         'additionalProperties': false,
         'ui': {
            'component': 'standard'
         },
         'name': 'general',
         'title': 'General',
         'description': '',
         'properties': {
            'serviceId': {
               'description': 'Service ID of the Service',
               'type': 'string',
               'readOnly': false,
               'pattern': '(.*)',
               'title': 'Service ID',
               'default': '/discovery/discovery'
            },
            'marathonlb': {
               'type': 'object',
               'additionalProperties': false,
               'ui': {
                  'component': 'standard'
               },
               'name': 'marathonlb',
               'title': 'Marathon LB',
               'description': 'Host & Path to connect to our Discovery service.',
               'properties': {
                  'haproxyhost': {
                     'description': 'HA Proxy host',
                     'type': 'string',
                     'title': 'HA Proxy host',
                     'default': 'discovery.labs.demo.com'
                  },
                  'haproxypath': {
                     'description': 'HA Proxy path to expose',
                     'type': 'string',
                     'title': 'Path HA Proxy',
                     'default': '/discovery'
                  }
               },
               'required': [
                  'haproxyhost',
                  'haproxypath'
               ]
            },
            'datastore': {
               'type': 'object',
               'additionalProperties': false,
               'ui': {
                  'component': 'standard'
               },
               'name': 'datastore',
               'title': 'PostgreSQL',
               'description': 'Datastore where Discovery will place the configuration settings.',
               'properties': {
                  'dbSslEnabled': {
                     'description': 'TLS secured connection with PostgreSQL',
                     'type': 'boolean',
                     'readOnly': true,
                     'title': 'Connection with SSL',
                     'default': true
                  },
                  'dbType': {
                     'description': '',
                     'type': 'string',
                     'readOnly': false,
                     'title': 'Type of database',
                     'default': 'postgres'
                  },
                  'metadataDbHost': {
                     'description': 'The host of the database uses as metadata repository',
                     'type': 'string',
                     'maxLength': 100,
                     'minLength': 3,
                     'readOnly': false,
                     'title': 'Host',
                     'default': 'pg-0001.test.mesos'
                  },
                  'dbPort': {
                     'description': 'The port of the database used as metadata repository',
                     'type': 'integer',
                     'minimum': 1,
                     'readOnly': false,
                     'title': 'Port of the database',
                     'default': 5432
                  },
                  'metadataDbName': {
                     'description': 'The database name used in the database with the metadata repository',
                     'type': 'string',
                     'maxLength': 100,
                     'minLength': 3,
                     'readOnly': false,
                     'title': 'Database name',
                     'default': 'discovery'
                  },
                  'tenantName': {
                     'description': 'The tenant name used in vault to store de secrets of this instance',
                     'type': 'string',
                     'maxLength': 100,
                     'minLength': 3,
                     'readOnly': false,
                     'title': 'Tenant Name',
                     'default': 'discovery'
                  },
                  'metadataDbUser': {
                     'description': 'The user name of the database with the metabase repository if we are using user to connect to the database',
                     'type': 'string',
                     'maxLength': 100,
                     'minLength': 3,
                     'readOnly': false,
                     'title': 'Database user'
                  }
               },
               'required': [
                  'metadataDbHost',
                  'dbPort'
               ]
            },
            'identity': {
               'type': 'object',
               'additionalProperties': false,
               'ui': {
                  'component': 'standard'
               },
               'name': 'identity',
               'title': 'Service indentity',
               'description': '',
               'properties': {
                  'approlename': {
                     'description': 'App role used to recover a Vault token with a pre-defined policy',
                     'type': 'string',
                     'readOnly': false,
                     'title': 'Vault role',
                     'default': 'open'
                  }
               },
               'required': []
            },
            'calico': {
               'type': 'object',
               'additionalProperties': false,
               'ui': {
                  'component': 'standard'
               },
               'name': 'calico',
               'title': 'Calico Network',
               'description': '',
               'properties': {
                  'networkSegmentation': {
                     'description': 'Enable Calico network for PostgreSQL Agent.',
                     'type': 'boolean',
                     'readOnly': true,
                     'title': 'Network segmentation',
                     'default': true
                  },
                  'useDynamicAuthentication': {
                     'description': 'Enable dynamic authentication',
                     'type': 'boolean',
                     'readOnly': true,
                     'title': 'Dynamic authentication',
                     'default': true
                  },
                  'calicoNetwork': {
                     'description': 'Network\'s name where PostgreSQL Agent will be added.',
                     'type': 'string',
                     'readOnly': false,
                     'title': 'Calico network'
                  },
                  'networkName': {
                     'description': 'Docker user network name',
                     'type': 'string',
                     'readOnly': false,
                     'title': 'Network name',
                     'enum': [
                        'demo'
                     ]
                  }
               },
               'required': [
                  'networkName'
               ]
            },
            'resources': {
               'type': 'object',
               'additionalProperties': false,
               'ui': {
                  'component': 'accordion'
               },
               'name': 'resources',
               'title': 'Resources',
               'description': '',
               'properties': {
                  'instances': {
                     'description': 'Number of Discovery instances to run.',
                     'type': 'integer',
                     'readOnly': false,
                     'title': 'Instances',
                     'default': 1
                  },
                  'cpus': {
                     'description': 'CPU shares to allocate to each Discovery instance.',
                     'type': 'integer',
                     'readOnly': false,
                     'level': 1,
                     'title': 'CPU',
                     'default': 1
                  },
                  'mem': {
                     'description': 'Memory (MB) to allocate to each Bootstrap instance.',
                     'type': 'integer',
                     'readOnly': false,
                     'title': 'Memory (MB)',
                     'default': 2048
                  }
               },
               'required': [
                  'instances',
                  'cpus',
                  'mem'
               ]
            }
         },
         'required': [
            'serviceId'
         ]
      },
      'settings': {
         'type': 'object',
         'additionalProperties': false,
         'ui': {
            'component': 'standard'
         },
         'name': 'settings',
         'title': 'Settings',
         'description': '',
         'properties': {
            'jdbcParameters': {
               'description': 'An optional variable to append to the connection string additional JDBC configuration parameters',
               'type': 'string',
               'maxLength': 100,
               'minLength': 3,
               'readOnly': false,
               'title': 'Additional JDBC configuration parameters',
               'default': 'prepareThreshold=0'
            },
            'calico': {
               'type': 'object',
               'additionalProperties': false,
               'ui': {
                  'component': 'switch'
               },
               'name': 'calico',
               'title': 'Calico security',
               'description': 'Use Calico security to this Sparta instance',
               'properties': {
                  'calicoEnabled': {
                     'description': 'Whether or not enable the Calico security.',
                     'type': 'boolean',
                     'readOnly': false,
                     'ui': {
                        'name': 'scp-sc-sparta-andromeda-calicoenabled'
                     },
                     'title': 'Use calico',
                     'default': true
                  },
                  'networkName': {
                     'description': 'Docker user network name',
                     'type': 'string',
                     'readOnly': false,
                     'ui': {
                        'name': 'scp-sc-sparta-andromeda-networkname'
                     },
                     'title': 'Network name',
                     'enum': [
                        'stratio'
                     ]
                  },
                  'calicoNetwork': {
                     'description': 'Name of the calico network where sparta and the workflows' +
                     'are deployed if calico security is enabled. It uses the same value of Network name.',
                     'type': 'string',
                     'readOnly': false,
                     'ui': {
                        'name': 'scp-sc-sparta-andromeda-caliconetwork'
                     },
                     'title': 'Calico network'
                  }
               },
               'required': [
                  'networkName'
               ]
            },
            'init': {
               'type': 'object',
               'additionalProperties': false,
               'ui': {
                  'component': 'standard'
               },
               'name': 'init',
               'title': 'Admin user',
               'description': 'When installing discovery for the first time, It will create an admin user with this parameters',
               'properties': {
                  'mb-init-admin-user': {
                     'description': 'The name of the admin user created as admin when Discovery is deployed.',
                     'type': 'string',
                     'maxLength': 100,
                     'minLength': 3,
                     'readOnly': false,
                     'title': 'Name of the admin user',
                     'default': 'Demo'
                  },
                  'mb-init-admin-password': {
                     'description': 'The password of the admin user created as admin when Discovery is deployed.',
                     'type': 'integer',
                     'minimum': 1,
                     'readOnly': false,
                     'title': 'Password of the admin user',
                     'default': 123456
                  },
                  'mb-init-admin-mail': {
                     'description': 'The mail of the admin user created as admin when Discovery is deployed.',
                     'type': 'string',
                     'maxLength': 100,
                     'minLength': 3,
                     'readOnly': false,
                     'title': 'Mail of the admin user',
                     'default': 'demo@demo.com'
                  }
               },

               'required': []
            },
            'Login': {
               'type': 'object',
               'additionalProperties': false,
               'ui': {
                  'component': 'standard'
               },
               'name': 'Login',
               'title': 'Login by headers',
               'description': '',
               'properties': {
                  'mb-user-header': {
                     'description': '',
                     'type': 'string',
                     'readOnly': false,
                     'title': 'User'
                  },
                  'mb-group-header': {
                     'description': '',
                     'type': 'string',
                     'readOnly': false,
                     'title': 'Group'
                  },
                  'mb-admin-group-header': {
                     'description': '',
                     'type': 'string',
                     'readOnly': false,
                     'title': 'Admin groups'
                  }
               },
               'required': []
            }
         },
         'required': []
      },
      'environment': {
         'type': 'object',
         'additionalProperties': false,
         'ui': {
            'component': 'standard'
         },
         'name': 'environment',
         'title': 'Environment',
         'description': '',
         'properties': {
            'VAULT_HOST': {
               'type': 'string',
               'maxLength': 100,
               'minLength': 3,
               'readOnly': true,
               'title': 'Vault host',
               'default': 'vault.service.paas.labs.demo.com'
            },
            'VAULT_PORT': {
               'type': 'integer',
               'minimum': 1,
               'readOnly': true,
               'level': 1,
               'title': 'Vault port',
               'default': 8200
            }
         },
         'required': []
      }
   }
};
