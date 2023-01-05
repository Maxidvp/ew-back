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
        "openapi": "3.0.3",
        "info": {
            title: "API: E-Wallet",
            version: "1.0.0",
            description: "API for E-Wallet",
            "contact": {
                "name": "Alkemy",
                "email": "contacto@alkemy.org",
                "url": "https://www.alkemy.org"
            }
        },
        "servers": [
            {
                "description": "API Wallet",
                "url": "https://ew-api.onrender.com"
            }
        ],
        "tags": [
            {
                "name": "Auth",
                description: "Authentication and authorization methods"
            },
            {
                "name": "Users"
            },
            {
                "name": "Accounts"
            },
            {
                "name": "Transactions"
            },
            {
                "name": "FixedTermDeposits"
            }
        ],
        "paths": {
            /*-----------------------------------------------------------------
            |                             AUTH
            |-----------------------------------------------------------------*/
            "/auth/register": {
                post: {
                    tags: [
                        "Auth"
                    ],
                    summary: "Create user",
                    description: "Crear un usuario.",
                    operationId: "createUser",
                    requestBody: {
                        description: "Created user object",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/User"
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
                                        $ref: "#/components/schemas/RegisterResult"
                                    }
                                }
                            }
                        },
                        403: {
                            description: "Combinacion de usuario o contrasena no encontrada",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/auth/login": {
                post: {
                    tags: [
                        "Auth"
                    ],
                    description: "Obtener un token JWT para autenticarse en el sistema",
                    summary: "Iniciar una sesion",
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/LoginInput"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Sesion iniciada con exito",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/LoginResult"
                                    }
                                }
                            }
                        },
                        401: {
                            description: "Combinacion de usuario o contrasena no encontrada",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "TODO: /auth/me": {
                "get": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "auth"
                    ],
                    "summary": "Obtener informacion del usuario loggeado",
                    "description": "Obener la informacion del usuario que inicio la sesion",
                    "parameters": [""],
                    "responses": {
                        "200": {
                            "description": "Datos del usuario",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/User"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso (posible falta de token)",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "TODO: /users": {
                "post": {
                    "tags": [
                        "Users"
                    ],
                    "description": "Crear un usuario",
                    "summary": "Crear un usuario",
                    "parameters": [""],
                    "requestBody": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": {
                            "description": "Usuario creado exitosamente",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/User"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "500": {
                            "description": "Error de servidor",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                },
                "get": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "Users"
                    ],
                    "description": "Listar todos los usuarios",
                    "summary": "Listar todos los usuarios",
                    "parameters": [""],
                    "responses": {
                        "200": {
                            "description": "Operacion exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/User"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Sin acceso de administrador",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "TODO: /users/{id}": {
                "get": {
                    "tags": [
                        "Users"
                    ],
                    "description": "Ver detalle de un usuario",
                    "summary": "Ver detalle de un usuario",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "ID del usuario"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operacion exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/User"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "tags": [
                        "Users"
                    ],
                    "summary": "Modificar un usuario existente",
                    "description": "Modificar un usuario existente",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "ID del rol"
                        }
                    ],
                    "requestBody": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Operacion exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/User"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "summary": "Eliminar un usuario",
                    "tags": [
                        "Users"
                    ],
                    "description": "Elimina un usuario",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "ID del usuario"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Eliminacion exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/User"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "TODO: /users/block/{accountId}": {
                "patch": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "Users"
                    ],
                    "summary": "Bloquear una cuenta del usuario",
                    "description": "Bloquear una cuenta del usuario, evitando que sea utilizada",
                    "parameters": [
                        {
                            "name": "accountId",
                            "in": "path",
                            "required": true,
                            "type": "number"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Cuenta bloqueada satisfactoriamente",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/OK"
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "No se encuentra la cuenta que se quiere bloquear",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "TODO: /users/unblock/{accountId}": {
                "patch": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "Users"
                    ],
                    "summary": "Desbloquear una cuenta del usuario",
                    "description": "Desbloquear una cuenta del usuario, permitiendo que sea utilizada",
                    "parameters": [
                        {
                            "name": "accountId",
                            "in": "path",
                            "required": true,
                            "type": "number"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Cuenta desbloqueada satisfactoriamente",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/OK"
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "No se encuentra la cuenta que se quiere desbloquear",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "TODO: /users/resetPassword/{userId}": {
                "patch": {
                    "tags": [
                        "Users"
                    ],
                    "summary": "Resetear contraseña",
                    "description": "Resetear la contraseña del usuario",
                    "parameters": [
                        {
                            "name": "userId",
                            "required": true,
                            "in": "path",
                            "type": "number"
                        }
                    ],
                    "requestBody": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ChangePasswordInput"
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "La contraseña se reseteo satisfactoriamente",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/OK"
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "No se especifico el usuario a modificar",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Usuario inexistente",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "TODO: /users/product/{productId}": {
                "patch": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "Users"
                    ],
                    "summary": "Intercambiar puntos por un producto del catalogo",
                    "description": "Intercambiar puntos por un producto del catalogo",
                    "parameters": [
                        {
                            "name": "productId",
                            "required": true,
                            "in": "path",
                            "type": "number",
                            "description": "ID del producto que se desea intercambiar"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Puntos intercambiados exitosamente",
                            "content": {
                                "application/json": {
                                    "schemas": {
                                        "$ref": "#/components/schemas/OK"
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "Producto inexistente",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "No se dispone de suficientes puntos",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "TODO: /accounts": {
                "post": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "Accounts"
                    ],
                    "description": "Crear una cuenta",
                    "summary": "Crear una cuenta",
                    "parameters": [""],
                    "requestBody": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Account"
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": {
                            "description": "Cuenta creada exitosamente",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Account"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                },
                "get": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "Accounts"
                    ],
                    "description": "Listar todas las cuentas",
                    "summary": "Listar todas las cuentas",
                    "parameters": [""],
                    "responses": {
                        "200": {
                            "description": "Operacion exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Account"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "TODO: /accounts/me": {
                "get": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "Accounts"
                    ],
                    "description": "Listar todas las cuentas del usuario loggeado",
                    "summary": "Listar las cuentas del usuario loggeado",
                    "responses": {
                        "200": {
                            "description": "Lista de cuentas del usuario loggeado",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Account"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso (debe iniciar sesion)",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "TODO: /accounts/{id}": {
                "post": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "Accounts"
                    ],
                    "description": "Depositar o transferir dinero hacia una cuenta",
                    "summary": "Depositar o transferir",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "Cuenta hacia la que se va a depositar o transferir el dinero"
                        }
                    ],
                    "requestBody": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/DepositOrTransfer"
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Deposito o transferencia exitosos",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/OK"
                                    }
                                }
                            }
                        },
                        "400": {
                            "description": "La cuenta origen no tiene suficiente saldo / Tipo de transaccion no valido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Cuenta origen o destino bloqueada",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "No se encontro cuenta de origen o destino",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                },
                "get": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "Accounts"
                    ],
                    "description": "Ver detalle de una cuenta",
                    "summary": "Ver detalle de una cuenta",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "ID de la cuenta"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operacion exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Account"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "Accounts"
                    ],
                    "description": "Modificar una cuenta existente",
                    "summary": "Modificar una cuenta existente",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "ID de la cuenta"
                        }
                    ],
                    "requestBody": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Account"
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Operacion exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Role"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "Accounts"
                    ],
                    "description": "Eliminar una cuenta",
                    "summary": "Eliminar una cuenta",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "ID de la cuenta"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operacion exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Account"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "TODO: /fixeddeposits": {
                "post": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "FixedTermDeposits"
                    ],
                    "description": "Crear un deposito a plazo fijo",
                    "summary": "Crear un deposito a plazo fijo",
                    "parameters": [""],
                    "requestBody": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/FixedTermDeposit"
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": {
                            "description": "Deposito creado exitosamente",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/FixedTermDeposit"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                },
                "get": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "FixedTermDeposits"
                    ],
                    "description": "Listar todos depositos a plazo fijo del usuario",
                    "summary": "Listar depositos",
                    "parameters": [""],
                    "responses": {
                        "200": {
                            "description": "Operacion exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/FixedTermDeposit"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "TODO: /fixeddeposits/{id}": {
                "get": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "FixedTermDeposits"
                    ],
                    "description": "Ver detalle de un deposito",
                    "summary": "Ver detalle de un deposito",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "ID del deposito"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operacion exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/FixedTermDeposit"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "FixedTermDeposits"
                    ],
                    "description": "Modificar un deposito a plazo fijo existente",
                    "summary": "Modificar un deposito a plazo fijo existente",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "ID del plazo fijo"
                        }
                    ],
                    "requestBody": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/FixedTermDeposit"
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Operacion exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/FixedTermDeposit"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "FixedTermDeposits"
                    ],
                    "description": "Eliminar un deposito a plazo fijo",
                    "summary": "Eliminar un deposito a plazo fijo",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "ID del plazo fijo"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operacion exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/FixedTermDeposit"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "TODO: /transactions": {
                "post": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "Transactions"
                    ],
                    "description": "Crear una transaccion",
                    "summary": "Crear una transaccion",
                    "parameters": [""],
                    "requestBody": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Transaction"
                                }
                            }
                        }
                    },
                    "responses": {
                        "201": {
                            "description": "Transaccion creada exitosamente",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Transaction"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                },
                "get": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "Transactions"
                    ],
                    "description": "Listar todas las transacciones del usuario",
                    "summary": "Listar todas las transacciones del usuario",
                    "parameters": [""],
                    "responses": {
                        "200": {
                            "description": "Operacion exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Transaction"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "TODO: /transactions/{id}": {
                "get": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "Transactions"
                    ],
                    "description": "Ver detalle de una transaccion",
                    "summary": "Ver detalle de una transaccion",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "ID de la transaccion"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operacion exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Transaction"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                },
                "put": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "Transactions"
                    ],
                    "description": "Modificar una transaccion existente",
                    "summary": "Modificar una transaccion",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "ID de la transaccion"
                        }
                    ],
                    "requestBody": {
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Transaction"
                                }
                            }
                        }
                    },
                    "responses": {
                        "200": {
                            "description": "Operacion exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Transaction"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                },
                "delete": {
                    "security": [
                        {
                            "BearerAuth": [""]
                        }
                    ],
                    "tags": [
                        "Transactions"
                    ],
                    "description": "Eliminar una transaccion",
                    "summary": "Eliminar una transaccion",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "description": "ID de la transaccion"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operacion exitosa",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Transaction"
                                    }
                                }
                            }
                        },
                        "401": {
                            "description": "Sin acceso",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        },
                        "403": {
                            "description": "Acceso prohibido",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/Error"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        /*-----------------------------------------------------------------
        |
        |                             SCHEMAS
        |
        |-----------------------------------------------------------------*/
        "components": {
            "schemas": {
                User: {
                    type: "object",
                    properties: {
                        first_name: {
                            type: "string",
                            description: "Nombre del usuario",
                            example: "Juan"
                        },
                        last_name: {
                            type: "string",
                            description: "Apellido del usuario",
                            example: "Perez"
                        },
                        email: {
                            type: "string",
                            description: "Correo electronico del usuario (se usa al iniciar sesion)",
                            example: "juanperez@example.com"
                        },
                        password: {
                            type: "string",
                            description: "Contrasena del usuario (se usa al iniciar sesion)",
                            example: "abc123"
                        }
                    }
                },
                RegisterResult: {
                    type: "object",
                    properties: {
                        message: {
                            type: "string",
                            description: "Descripción",
                            example: "User registered successfully"
                        },
                        email: {
                            type: "string",
                            description: "Registered email",
                            example: "user@gmail.com"
                        },
                    }
                },
                LoginInput: {
                    type: "object",
                    properties: {
                        email: {
                            type: "string",
                            description: "Correo electronico del usuario que iniciara la sesion",
                            example: "juanperez@example.com"
                        },
                        password: {
                            type: "string",
                            description: "Contrasena del usuario que iniciara la sesion",
                            example: "abc123"
                        }
                    }
                },
                LoginResult: {
                    type: "object",
                    properties: {
                        message: {
                            type: "string",
                            description: "Descripción",
                            example: "User registered successfully"
                        },
                        accessToken: {
                            type: "string",
                            description: "El token JWT que debera enviarse posteriormente a los endpoints",
                            example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQi..."
                        }
                    }
                },
                "TODO: Account": {
                    "type": "object",
                    "properties": {
                        "creationDate": {
                            "type": "string",
                            "description": "Fecha de creacion de la cuenta",
                            "example": "2022-10-26 10:00:00"
                        },
                        "money": {
                            "type": "number",
                            "description": "Cantidad de dinero que la cuenta posee",
                            "example": 150
                        },
                        "isBlocked": {
                            "type": "boolean",
                            "description": "Determina si la cuenta esta bloqueada o no",
                            "example": false
                        },
                        "userId": {
                            "type": "number",
                            "description": "Es el usuario dueno de la cuenta",
                            "example": 1
                        }
                    }
                },
                "TODO: FixedTermDeposit": {
                    "type": "object",
                    "properties": {
                        "userId": {
                            "type": "number",
                            "description": "El ID del usuario al que pertenece el plazo fijo",
                            "example": 1
                        },
                        "accountId": {
                            "type": "number",
                            "description": "El ID de la cuenta donde se realiza el plazo fijo",
                            "example": 1
                        },
                        "amount": {
                            "type": "number",
                            "description": "La cantidad de dinero en el plazo fijo",
                            "example": 100
                        },
                        "creation_date": {
                            "type": "string",
                            "description": "La fecha de creacion del plazo fijo",
                            "example": "2022-10-26"
                        },
                        "closing_date": {
                            "type": "string",
                            "description": "La fecha de cierre del plazo fijo",
                            "example": "2022-11-26"
                        }
                    }
                },
                "TODO: Transaction": {
                    "type": "object",
                    "properties": {
                        "amount": {
                            "type": "number",
                            "description": "Cantidad de dinero correspondiente a la transaccion",
                            "example": 500
                        },
                        "concept": {
                            "type": "string",
                            "description": "Descripcion de la transaccion",
                            "example": "Pago de honorarios"
                        },
                        "date": {
                            "type": "string",
                            "description": "Fecha de la transaccion",
                            "example": "2022-10-26 15:00:00"
                        },
                        "type": {
                            "type": "string",
                            "description": "Tipo de transaccion ('topup' o 'payment')",
                            "example": "topup|payment"
                        },
                        "accountId": {
                            "type": "number",
                            "description": "Cuenta origen de la transaccion",
                            "example": 1
                        },
                        "userId": {
                            "type": "number",
                            "description": "Usuario originante de la transaccion",
                            "example": 4
                        },
                        "to_account_id": {
                            "type": "number",
                            "description": "Cuenta destino de la transaccion",
                            "example": 5
                        }
                    }
                },
                "Error": {
                    "type": "object",
                    "properties": {
                        "error": {
                            "type": "string",
                            "description": "Mensaje descriptivo del error que se produjo",
                            "example": "No autorizado"
                        },
                        "status": {
                            "type": "number",
                            "description": "Codigo de error HTTP",
                            "example": 401
                        }
                    }
                },
                "TODO: ChangePasswordInput": {
                    "type": "object",
                    "properties": {
                        "password": {
                            "type": "string",
                            "description": "La nueva contraseña que se quiere establecer",
                            "example": "abc123"
                        }
                    }
                },
                "TODO: OK": {
                    "type": "object",
                    "properties": {
                        "message": {
                            "type": "string",
                            "description": "Resultado de la operacion"
                        }
                    }
                },
                "TODO: DepositOrTransfer": {
                    "type": "object",
                    "properties": {
                        "type": {
                            "type": "string",
                            "description": "Tipo de operacion: 'topup' si se hace un deposito; 'payment' si se hace una transferencia",
                            "example": "topup | payment"
                        },
                        "concept": {
                            "type": "string",
                            "description": "Descripcion de la operacion"
                        },
                        "amount": {
                            "type": "number",
                            "description": "Cantidad de dinero a depositar o transferir"
                        }
                    }
                }
            },
            "securitySchemes": {
                "BearerAuth": {
                    "type": "http",
                    "scheme": "bearer"
                }
            }
        }
    },
    apis: ["./routes/*"]
};
// Docs in JSON format
exports.specs = (0, swagger_jsdoc_1.default)(options);
/*

a borrar

  //Definicion original
  /*definition: {
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
      "/plants/test":{
        get: {
          tags: [ "plant"],
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
  
  */ 
