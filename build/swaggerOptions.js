"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specs = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API: Plants of Nursery",
            version: "1.0.0",
            description: "A API OF PLANTS",
        },
        servers: [
            {
                url: process.env.ORIGIN1,
                description: 'API WikiPlants'
            },
        ],
        tags: [
            {
                name: "plant",
                description: "Everything about your nursery",
            },
            {
                name: "nursery",
                description: "Access to Plants orders",
            },
            {
                name: "user",
                description: "Operations about user"
            },
        ],
        paths: {
            "/plants/test": {
                get: {
                    tags: ["plant"],
                    summary: "Add a new plant to the nursery",
                    description: "test",
                    operationId: "addPlant",
                    responses: {
                        200: {
                            description: "Successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/Plant"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid ID supplied"
                        },
                        404: {
                            description: "Nursery not found"
                        },
                        405: {
                            description: "Validation exception"
                        }
                    },
                    security: [
                        {
                            plantstore_auth: [
                                "write:plant",
                                "read:plant"
                            ]
                        }
                    ]
                },
            },
            "/plants/new": {
                post: {
                    tags: [
                        "plant"
                    ],
                    summary: "Add a new plant to the nursery",
                    description: "Add a new plant to the nursery",
                    operationId: "addPlant",
                    requestBody: {
                        description: "Create a new plant in the nursery",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Plant"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/Plant"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/Plant"
                                }
                            }
                        },
                        required: true
                    },
                    responses: {
                        200: {
                            description: "Successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/Plant"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/Plant"
                                    }
                                }
                            }
                        },
                        405: {
                            description: "Invalid input"
                        }
                    },
                    security: [
                        {
                            plantstore_auth: [
                                "write:plant",
                                "read:plant"
                            ]
                        }
                    ]
                }
            },
            "/plants/{plantId}": {
                put: {
                    tags: [
                        "plant"
                    ],
                    summary: "Update an existing plant",
                    description: "Update an existing plant by Id",
                    operationId: "updatePlant",
                    parameters: [
                        {
                            name: "plantId",
                            in: "path",
                            description: "ID of plant that needs to be updated",
                            required: true,
                            schema: {
                                type: String
                            }
                        }
                    ],
                    requestBody: {
                        description: "Update an existent plant in the store",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Plant"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/Plant"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                "schema": {
                                    $ref: "#/components/schemas/Plant"
                                }
                            }
                        },
                        required: true
                    },
                    responses: {
                        200: {
                            description: "Successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/Plant"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid ID supplied"
                        },
                        404: {
                            description: "Nursery not found"
                        },
                        405: {
                            description: "Validation exception"
                        }
                    },
                    security: [
                        {
                            plantstore_auth: [
                                "write:plant",
                                "read:plant"
                            ]
                        }
                    ]
                },
                get: {
                    tags: [
                        "plant"
                    ],
                    summary: "Find plant by ID",
                    description: "Returns a single plant",
                    operationId: "getPlantById",
                    parameters: [
                        {
                            name: "plantId",
                            in: "path",
                            description: "ID of plant to return",
                            required: true,
                            schema: {
                                type: String
                            }
                        }
                    ],
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/Plant"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/Plant"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid ID supplied"
                        },
                        404: {
                            description: "Plant not found"
                        }
                    },
                    security: [
                        {
                            api_key: [""]
                        },
                        {
                            plantstore_auth: [
                                "write:plant",
                                "read:plant"
                            ]
                        }
                    ]
                },
                delete: {
                    tags: [
                        "plant"
                    ],
                    summary: "Deletes a plant",
                    description: "delete a plant",
                    operationId: "deletePlant",
                    parameters: [
                        {
                            name: "plantId",
                            in: "path",
                            description: "Plant id to delete",
                            required: true,
                            schema: {
                                type: String
                            }
                        }
                    ],
                    responses: {
                        200: {
                            description: "successful operation"
                        },
                        400: {
                            description: "Invalid plant value"
                        },
                        404: {
                            description: "Plant not found"
                        }
                    },
                    security: [
                        {
                            plantstore_auth: [
                                "write:plant",
                                "read:plant"
                            ]
                        }
                    ]
                }
            },
            "/nursery/inventory": {
                get: {
                    tags: [
                        "nursery"
                    ],
                    summary: "Returns plant inventories by status",
                    description: "Returns a map of status codes to quantities",
                    operationId: "getInventory",
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        additionalProperties: {
                                            type: "integer",
                                            format: "int32"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    security: [
                        {
                            api_key: [""]
                        }
                    ]
                }
            },
            "/nursery/order": {
                post: {
                    tags: [
                        "nursery"
                    ],
                    summary: "Place an order for a plant",
                    description: "Place a new order in the inventory",
                    operationId: "placeOrder",
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Nursery"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/Nursery"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/Nursery"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/Nursery"
                                    }
                                }
                            }
                        },
                        405: {
                            description: "Invalid input"
                        }
                    }
                }
            },
            "/nursery/plant/{plantId}": {
                get: {
                    tags: [
                        "nursery"
                    ],
                    summary: "Find purchase order by ID",
                    description: "For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.",
                    operationId: "getOrderById",
                    parameters: [
                        {
                            name: "orderId",
                            in: "path",
                            description: "ID of order that needs to be fetched",
                            required: true,
                            schema: {
                                type: "integer",
                                format: "int64"
                            }
                        }
                    ],
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/Nursery"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/Nursery"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid ID supplied"
                        },
                        404: {
                            description: "Order not found"
                        }
                    }
                },
                delete: {
                    tags: [
                        "nursery"
                    ],
                    summary: "Delete purchase order by ID",
                    description: "For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors",
                    operationId: "deleteOrder",
                    parameters: [
                        {
                            name: "orderId",
                            in: "path",
                            description: "ID of the order that needs to be deleted",
                            required: true,
                            schema: {
                                type: "integer",
                                format: "int64"
                            }
                        }
                    ],
                    responses: {
                        400: {
                            description: "Invalid ID supplied"
                        },
                        404: {
                            description: "Order not found"
                        }
                    }
                }
            },
            "/auth/user/register": {
                post: {
                    security: {
                        securestoreAuth: [""]
                    },
                    tags: [
                        "user"
                    ],
                    summary: "Create user",
                    description: "This can only be done by the logged in user.",
                    operationId: "createUser",
                    requestBody: {
                        description: "Created user object",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/User"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/User"
                                }
                            }
                        }
                    },
                    responses: {
                        default: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/User"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/User"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/auth/user/{username}": {
                get: {
                    security: {
                        securestoreAuth: [""]
                    },
                    tags: [
                        "user"
                    ],
                    summary: "Get user by user username",
                    description: "",
                    operationId: "getUserByName",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The name that needs to be fetched. Use user1 for testing. ",
                            required: true,
                            schema: {
                                type: String
                            }
                        }
                    ],
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/User"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/User"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid username supplied"
                        },
                        404: {
                            description: "User not found"
                        }
                    }
                },
                put: {
                    security: {
                        securestoreAuth: [""]
                    },
                    tags: [
                        "user"
                    ],
                    summary: "Update user",
                    description: "This can only be done by the logged in user.",
                    operationId: "updateUser",
                    parameters: [
                        {
                            name: "ID",
                            in: "path",
                            description: "ID that need to be update",
                            required: true,
                            schema: {
                                type: String
                            }
                        }
                    ],
                    requestBody: {
                        description: "Update an existent user in the store",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/User"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/User"
                                }
                            }
                        }
                    },
                    responses: {
                        default: {
                            description: "successful operation"
                        }
                    }
                },
                delete: {
                    tags: [
                        "user"
                    ],
                    summary: "Delete user",
                    description: "This can only be done by the logged in user.",
                    operationId: "deleteUser",
                    parameters: [
                        {
                            name: "id",
                            in: "query",
                            description: "The id that needs to be deleted",
                            required: true,
                            schema: {
                                type: String
                            }
                        }
                    ],
                    requestBody: {
                        description: "Update an existent user in the store",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/User"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/User"
                                }
                            }
                        }
                    },
                    responses: {
                        400: {
                            description: "Invalid username supplied"
                        },
                        404: {
                            description: "User not found"
                        }
                    }
                }
            }
        },
        components: {
            schemas: {
                Order: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                            example: 10
                        },
                        plantId: {
                            type: String
                        },
                        quantity: {
                            type: "integer",
                            format: "int32",
                            example: 7
                        },
                        shipDate: {
                            type: String,
                            format: "date-time"
                        },
                        status: {
                            type: String,
                            description: "Order Status",
                            example: "approved",
                            enum: [
                                "placed",
                                "approved",
                                "delivered"
                            ]
                        },
                        complete: {
                            type: "boolean"
                        }
                    },
                    xml: {
                        name: "order"
                    }
                },
                Customer: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                            example: 100000
                        },
                        username: {
                            type: "string",
                            example: "fehguy"
                        },
                        address: {
                            type: "array",
                            xml: {
                                name: "addresses",
                                wrapped: true
                            },
                            items: {
                                $ref: "#/components/schemas/Address"
                            }
                        }
                    },
                    xml: {
                        name: "customer"
                    }
                },
                Address: {
                    type: "object",
                    properties: {
                        street: {
                            type: "string",
                            example: "437 Lytton"
                        },
                        city: {
                            type: "string",
                            example: "Palo Alto"
                        },
                        state: {
                            type: "string",
                            example: "CA"
                        },
                        zip: {
                            type: "string",
                            example: "94301"
                        }
                    },
                    xml: {
                        name: "address"
                    }
                },
                Category: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                            example: 1
                        },
                        name: {
                            type: "string",
                            example: "Petuña"
                        }
                    },
                    xml: {
                        name: "category"
                    }
                },
                User: {
                    type: "object",
                    properties: {
                        username: {
                            type: String,
                            require: true,
                            example: "the new user"
                        },
                        birthdate: {
                            type: Date,
                            require: true,
                            example: "12/12/1990"
                        },
                        imgs: {
                            type: "array",
                            required: true,
                            xml: {
                                wrapped: true
                            },
                            items: {
                                type: "string",
                                xml: {
                                    name: "imgs"
                                }
                            }
                        },
                        social: {
                            type: String,
                            require: false,
                            example: "www.google.com"
                        },
                        email: {
                            type: String,
                            require: true,
                            example: "johndoe@email.com"
                        },
                        password: {
                            type: String,
                            require: true,
                            example: "12345aB!"
                        }
                    },
                    xml: {
                        name: "user"
                    }
                },
                Tag: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64"
                        },
                        name: {
                            type: "string"
                        }
                    },
                    xml: {
                        name: "tag"
                    }
                },
                Plant: {
                    required: [
                        "title",
                        "info",
                        "imgs",
                        "location"
                    ],
                    type: "object",
                    properties: {
                        title: {
                            type: String,
                            example: "petuña"
                        },
                        info: {
                            type: String,
                            example: "petuña que crece en la tierra"
                        },
                        category: {
                            $ref: "#/components/schemas/Category"
                        },
                        imgs: {
                            type: "array",
                            xml: {
                                wrapped: true
                            },
                            items: {
                                type: "string",
                                xml: {
                                    name: "imgs"
                                }
                            }
                        },
                        location: {
                            type: String,
                            maxlength: 15,
                            example: "Mendoza"
                        },
                        tags: {
                            type: "array",
                            xml: {
                                wrapped: true
                            },
                            items: {
                                $ref: "#/components/schemas/Tag"
                            }
                        },
                        status: {
                            type: String,
                            description: "plant status in the store",
                            enum: [
                                "available",
                                "pending",
                                "sold"
                            ]
                        }
                    },
                    xml: {
                        name: "plant"
                    }
                },
                ApiResponse: {
                    type: "object",
                    properties: {
                        code: {
                            type: "integer",
                            format: "int32"
                        },
                        type: {
                            type: String
                        },
                        message: {
                            type: String
                        }
                    },
                    xml: {
                        name: "##default"
                    }
                }
            },
            requestBodies: {
                Plant: {
                    description: "Plant object that needs to be added to the store",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Plant"
                            }
                        },
                        "application/xml": {
                            schema: {
                                $ref: "#/components/schemas/Plant"
                            }
                        }
                    }
                },
                UserArray: {
                    description: "List of user object",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/User"
                                }
                            }
                        }
                    }
                }
            },
            securitySchemes: {
                securestoreAuth: {
                    bearerAuth: {
                        type: "http",
                        scheme: "bearer",
                        bearerFormat: "JWT"
                    }
                },
                api_key: {
                    type: "apiKey",
                    name: "api_key",
                    in: "header"
                }
            }
        }
    },
    apis: ["./routes/*"]
};
// Docs in JSON format
exports.specs = (0, swagger_jsdoc_1.default)(options);
/* components: {
      schemas: {
        Nursery: {
          type: 'object',
          required: ['username', 'email', 'password', 'birthday', 'province', 'city', 'addres'],
          properties: {
            username: {
              type: 'string',
              description: 'The manager of nursery'
            },
            email: {
              type: 'string',
              description: 'The nursery email'
            },
            password: {
                type: 'string',
                description: 'The nursery password'
            },
            birthday: {
              type: 'string',
              description: 'The nursery birthday'
            },
            province: {
              type: 'string',
              description: 'The nursery province'
            },
            city: {
              type: 'string',
              description: 'The nursery city'
            },
            addres: {
              type: 'string',
              description: 'The nursery addres'
            },
            example: {
                username: 'John Doe',
                email: 'blabla@plantas.com',
                password: 'This is a password',
                birthday: 1995,
                prince: 'bs as',
                city: 'avellaneda',
                addres: 'calle falsa 123'
            }
          }
        }
      }
    }
  },
  apis: ["./routes/nursery.routes"] */
/*
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Bookstore CRUD REST API",
        version: "1.0.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger"
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: 'Development server'
        },
      ],
      components: {
        schemas: {
            Book: {
                type: 'object',
                required: ['title', 'author', 'price', 'year_published'],
                properties: {
                    author: {
                        type: 'string',
                        description: 'The author of the book'
                    },
                    price: {
                        type: 'integer',
                        description: 'The price of the book'
                    },
                    description: {
                        type: 'string',
                        description: 'The description of the book'
                    },
                    year_published: {
                        type: 'string',
                        description: 'The year the book was published'
                    }
                },
                example: {
                    author: 'John Doe',
                    price: 199,
                    description: 'This is a description of a book',
                    year_published: 2022
                }
            }
        },
        responses : {
            400: {
                description: 'Missing API key - include it in the Authorization header',
                contents: 'application/json'
            },
            401: {
                description: 'Unauthorized - incorrect API key or incorrect format',
                contents: 'application/json'
            },
            404: {
                description: 'Not found - the book was not found',
                contents: 'application/json'
            }
        },
        securitySchemes: {
            ApiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization'
            }
          }
      },
      security: [{
        ApiKeyAuth: []
      }]

    },
    apis: ["./app/routes/book.js"],
}

module.exports = options */ 
