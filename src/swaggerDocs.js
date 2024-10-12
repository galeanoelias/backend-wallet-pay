import swaggerJsDoc from "swagger-jsdoc";
import dotenv from "dotenv";
dotenv.config()

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API: Mercacopia",
            version: "1.0.0",
            description: "API OF THE PROJECT OF FINTECH MERCADO PAGO",
        },
        servers: [
            {
                url: "https://api-wallet.onrender.com",
                description: 'API Users for the ...'
            }
        ],
        tags: [
            {
                name: "User",
                description: "Operations about user"
            },
            {
                name: "Cards",
                description: "Operations about the cards of the users"
            },
            {
                name: "Activity",
                description: "Operations about activity of the users"
            },
            {
                name: "Qr",
                description: "QR operation"
            },
            {
                name: "Add",
                description: "ADD operation"
            },
            {
                name: "Repassword",
                description: "UPDATE password"
            }
        ],
        paths: {
            "/auth/user/": {
                get: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "User"
                    ],
                    summary: "GET all users in system",
                    responses: {
                        200: {
                            description: "Successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
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
                            userstore_auth: [
                                "write:user",
                                "read:user"
                            ]
                        }
                    ]
                }
            },
            "/auth/user/register": {
                post: {
                    tags: [
                        "User"
                    ],
                    summary: "Create user",
                    description: "Created user object",
                    operationId: "createUser",
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/user"
                                }
                            },
                            "multipart/form-data": {
                                schema: {
                                    $ref: "#/components/schemas/user"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/user"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/user"
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
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "multipart/form-data": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid username supplied"
                        },
                        404: {
                            description: "user not found"
                        }
                    }
                }
            },
            "/auth/user/login": {
                post: {
                    tags: [
                        "User"
                    ],
                    summary: "Login user",
                    description: "user Logued",
                    operationId: "loginUser",
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/user/properties/email",
                                    $ref1: "#/components/schemas/user/properties/password"
                                }
                            },
                            "multipart/form-data": {
                                schema: {
                                    $ref: "#/components/schemas/user/properties/email",
                                    $ref1: "#/components/schemas/user/properties/password"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/user/properties/email",
                                    $ref1: "#/components/schemas/user/properties/password"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/user/properties/email",
                                    $ref1: "#/components/schemas/user/properties/password"
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
                                        $ref: "#/components/schemas/user/properties/email",
                                        $ref1: "#/components/schemas/user/properties/password"
                                    }
                                },
                                "multipart/form-data": {
                                    schema: {
                                        $ref: "#/components/schemas/user/properties/email",
                                        $ref1: "#/components/schemas/user/properties/password"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/user/properties/email",
                                        $ref1: "#/components/schemas/user/properties/password"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid username supplied"
                        },
                        404: {
                            description: "user not found"
                        }
                    }
                }
            },
            "/auth/user/{id}": {
                get: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "User"
                    ],
                    summary: "Get user by user ID",
                    parameters: [
                        {
                            in: "path",
                            name: "id",
                            description: "The name that needs to be fetched. Use user1 for testing.",
                            required: true,
                            schema: {
                                type: String
                            }
                        },
                        {
                            name: "Authorization",
                            in: "header",
                            description: "Token",
                            required: true,
                            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        }
                    ],
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid username supplied"
                        },
                        404: {
                            description: "user not found"
                        }
                    }
                },
                patch: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "User"
                    ],
                    summary: "Update user",
                    description: "This can only be done by the logged in user.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The id that needs to be update",
                            required: true,
                            schema: {
                                type: String
                            }
                        },
                        {
                            name: "Authorization",
                            in: "header",
                            description: "Token",
                            required: true,
                            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        }
                    ],
                    requestBody: {
                        required: true,
                        description: "Update an existent user in the store",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/user"
                                }
                            },
                            "multipart/form-data": {
                                schema: {
                                    $ref: "#/components/schemas/user"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/user"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/user"
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
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "multipart/form-data": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "application/x-www-form-urlencoded": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                }
                            }
                        },
                        404: {
                            description: "user not found",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                }
                            }
                        }
                    }
                },
                delete: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "User"
                    ],
                    summary: "Delete user",
                    description: "This can only be done by the deletedd in user.",
                    operationId: "deleteUser",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The id that needs to be deleted",
                            required: true,
                            schema: {
                                type: String
                            }
                        },
                        {
                            name: "Authorization",
                            in: "header",
                            description: "Token",
                            required: true,
                            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        }
                    ],
                    requestBody: {
                        description: "Delete an existent user in the store",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/user/properties/username",
                                    $ref2: "#/components/schemas/user/properties/email",
                                    $ref3: "#/components/schemas/user/properties/password"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/user/properties/username",
                                    $ref2: "#/components/schemas/user/properties/email",
                                    $ref3: "#/components/schemas/user/properties/password"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/user/properties/username",
                                    $ref2: "#/components/schemas/user/properties/email",
                                    $ref3: "#/components/schemas/user/properties/password"
                                }
                            }
                        },
                        required: true
                    },
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid username supplied",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                }
                            }
                        },
                        404: {
                            description: "user not found",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/auth/user/updatepass/{id}": {
                patch: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "User"
                    ],
                    summary: "Update user",
                    description: "This can only be done by the logged in user.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The id that needs to be update",
                            required: true,
                            schema: {
                                type: String
                            }
                        },
                        {
                            name: "Authorization",
                            in: "header",
                            description: "Token",
                            required: true,
                            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        }
                    ],
                    requestBody: {
                        required: true,
                        description: "Update an existent user in the store",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/repassword"
                                }
                            },
                            "multipart/form-data": {
                                schema: {
                                    $ref: "#/components/schemas/repassword"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/repassword"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/repassword"
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
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "multipart/form-data": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                },
                                "application/x-www-form-urlencoded": {
                                    schema: {
                                        $ref: "#/components/schemas/user"
                                    }
                                }
                            }
                        },
                        404: {
                            description: "user not found"
                        }
                    }
                },
            },
            "/auth/card/{id}/{user_number}": {
                get: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "Cards"
                    ],
                    summary: "Get User cards by ID",
                    parameters: [
                        {
                            in: "path",
                            name: "id",
                            description: "The name that needs to be fetched. Use user for testing.",
                            required: true,
                            schema: {
                                type: String
                            }
                        },
                        {
                            in: "path",
                            name: "user_number",
                            description: "The name that needs to be fetched. Use user for testing.",
                            required: true,
                            schema: {
                                type: "number"
                            }
                        },
                        {
                            name: "Authorization",
                            in: "header",
                            description: "Token",
                            required: true,
                            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        }
                    ],
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid card supplied"
                        },
                        404: {
                            description: "card not found"
                        }
                    }
                }
            },
            "/auth/card/{id}": {
                post: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "Cards"
                    ],
                    summary: "Create card for the user",
                    parameters: [
                        {
                            name: "Authorization",
                            in: "header",
                            description: "Token",
                            required: true,
                            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        },
                        {
                            name: "id",
                            in: "path",
                            description: "USER's ID",
                            required: true,
                            schema: {
                                type: String
                            }
                        }
                    ],
                    description: "Created user card object",
                    operationId: "createCard",
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            },
                            "multipart/form-data": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/card"
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
                                        $ref: "#/components/schemas/card"
                                    }
                                },
                                "multipart/form-data": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid username supplied"
                        },
                        404: {
                            description: "user not found"
                        }
                    }
                },
                patch: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "Cards"
                    ],
                    summary: "Update  cards of user",
                    description: "This can only be done by the logged in user.",
                    parameters: [
                        {
                            name: "Authorization",
                            in: "header",
                            description: "Token",
                            required: true,
                            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        },
                        {
                            name: "id",
                            in: "path",
                            description: "The id that needs to be update",
                            required: true,
                            schema: {
                                type: String
                            }
                        }
                    ],
                    requestBody: {
                        required: true,
                        description: "Update an existent user in the store",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            },
                            "multipart/form-data": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/card"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/card"
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
                                        $ref: "#/components/schemas/card"
                                    }
                                },
                                "multipart/form-data": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                },
                                "application/x-www-form-urlencoded": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                }
                            }
                        },
                        404: {
                            description: "user not found",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                }
                            }
                        }
                    }
                },
                delete: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "Cards"
                    ],
                    summary: "Delete card of the user",
                    description: "This can only be done by the deletedd in cards of the users user.",
                    operationId: "deleteCard",
                    parameters: [
                        {
                            name: "Authorization",
                            in: "header",
                            description: "Token",
                            required: true,
                            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        },
                        {
                            name: "id",
                            in: "path",
                            description: "The id that needs to be deleted",
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
                                        $ref: "#/components/schemas/card"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid username supplied",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                }
                            }
                        },
                        404: {
                            description: "user not found",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/card"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/auth/activity/transfer": {
                post: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "Activity"
                    ],
                    summary: "POST transfer",
                    parameters: [
                        {
                            in: "path",
                            name: "id",
                            description: "The id that needs to be fetched. Use user1.alias1.pay1 for testing.",
                            required: true,
                            schema: {
                                type: String
                            }
                        },
                        {
                            name: "Authorization",
                            in: "header",
                            description: "Token",
                            required: true,
                            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        }
                    ],
                    requestBody: {
                        required: true,
                        description: "Update an existent user in the store",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/activity"
                                }
                            },
                            "multipart/form-data": {
                                schema: {
                                    $ref: "#/components/schemas/activity"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/activity"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/activity"
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
                                        $ref: "#/components/schemas/activity"
                                    }
                                },
                                "multipart/form-data": {
                                    schema: {
                                        $ref: "#/components/schemas/activity"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/activity"
                                    }
                                },
                                "application/x-www-form-urlencoded": {
                                    schema: {
                                        $ref: "#/components/schemas/activity"
                                    }
                                }
                            }
                        },
                        404: {
                            description: "user not found",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/activity"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/auth/activity/activities/{id}/{amount}": {
                get: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "Activity"
                    ],
                    summary: "GET activity of the user",
                    parameters: [
                        {
                            in: "path",
                            name: "id",
                            description: "The id that needs to be fetched. Use user1.alias1.pay1 for testing.",
                            required: true,
                            schema: {
                                type: String
                            }
                        },
                        {
                            name: "Authorization",
                            in: "header",
                            description: "Token",
                            required: true,
                            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        },
                        {
                            in: "path",
                            name: "amount",
                            description: "Amount of activity.",
                            required: false,
                            schema: {
                                type: "number"
                            }
                        }
                    ],
                    responses: {
                        200: {
                            description: "Successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/activity"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/activity"
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
            "/auth/activity/recent/{id}/{amount}": {
                get: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "Activity"
                    ],
                    summary: "GET activity of the user",
                    parameters: [
                        {
                            in: "path",
                            name: "id",
                            description: "The id that needs to be fetched. Use user1.alias1.pay1 for testing.",
                            required: true,
                            schema: {
                                type: String
                            }
                        },
                        {
                            name: "Authorization",
                            in: "header",
                            description: "Token",
                            required: true,
                            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        },
                        {
                            in: "path",
                            name: "amount",
                            description: "Amount of activity.",
                            required: false,
                            schema: {
                                type: "number"
                            }
                        }
                    ],
                    responses: {
                        200: {
                            description: "Successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/activity"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/activity"
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
            "/auth/qr/{alias}/{mount}": {
                get: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "Qr"
                    ],
                    summary: "GET amount to pay with QR",
                    parameters: [
                        {
                            name: "Authorization",
                            in: "header",
                            description: "Token",
                            required: true,
                            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        },
                        {
                            in: "path",
                            name: "alias",
                            description: "The alias that needs to be fetched. Use user1.alias1.pay1 for testing.",
                            required: true,
                            schema: {
                                type: String
                            }
                        },
                        {
                            name: "mount",
                            in: "query",
                            description: "Amount of money",
                            required: true,
                            schema: {
                                type: "number",
                                format: "float"
                            },
                            example: "1250.36"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/qr"
                                    }
                                },
                                "application/xml": {
                                    schema: {
                                        $ref: "#/components/schemas/qr"
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
            "/auth/addMoney/{id}": {
                post: {
                    security: [
                        {
                            api_key: [""]
                        }
                    ],
                    tags: [
                        "Add"
                    ],
                    summary: "POST transfer",
                    parameters: [
                        {
                            in: "path",
                            name: "id",
                            description: "The id that needs to be fetched. Use user1.alias1.pay1 for testing.",
                            required: true,
                            schema: {
                                type: String
                            }
                        },
                        {
                            name: "Authorization",
                            in: "header",
                            description: "Token",
                            required: true,
                            example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
                        }
                    ],
                    requestBody: {
                        description: "Delete an existent user in the store",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/addMoney"
                                }
                            },
                            "multipart/form-data": {
                                schema: {
                                    $ref: "#/components/schemas/addMoney"
                                }
                            },
                            "application/xml": {
                                schema: {
                                    $ref: "#/components/schemas/addMoney"
                                }
                            },
                            "application/x-www-form-urlencoded": {
                                schema: {
                                    $ref: "#/components/schemas/addMoney"
                                }
                            }
                        },
                        required: true
                    },
                    responses: {
                        200: {
                            description: "successful operation",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/addMoney"
                                    }
                                }
                            }
                        },
                        400: {
                            description: "Invalid username supplied",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/addMoney"
                                    }
                                }
                            }
                        },
                        404: {
                            description: "user not found",
                            content: {
                                "application/json": {
                                    schema: {
                                        $ref: "#/components/schemas/addMoney"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        components: {
            schemas: {
                order: {
                    type: "object",
                    properties: {
                        id: {
                            type: "String",
                            example: "638d039e8ce24f8a608e5a37"
                        },
                        userId: {
                            type: "String"
                        },
                        quantity: {
                            type: "String",
                            example: "638d039e8ce24f8a608e5a37"
                        },
                        shipDate: {
                            type: "String",
                            format: "date-time"
                        },
                        status: {
                            type: "String",
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
                repassword: {
                    type: "object",
                    required: [
                        "actualPass",
                        "newPass"
                    ],
                    properties: {
                        actualPass:{
                            type: String,
                            required: true,
                            $ref: "#/components/schemas/user/properties/password"
                        },
                        newPass:{
                            type: String,
                            required: true,
                            $ref: "#/components/schemas/user/properties/password"
                        }
                    },
                    xml: {
                        name: "repassword"
                    }
                },
                user: {
                    type: "object",
                    required: [
                        "email",
                        "password",
                        "dni",
                        "fullname",
                        "username"
                    ],
                    properties: {
                        username: {
                            type: "string",
                            required: true,
                            example: "Usuario"
                        },
                        alias: {
                            type: "string",
                            required: false,
                            example: "Nombre.de.alias"
                        },
                        cvu: {
                            type: "string",
                            required: false,
                            example: "00000062624512345678"
                        },
                        email: {
                            type: "string",
                            required: true,
                            example: "correo@correo.com"
                        },
                        password: {
                            type: "string",
                            required: true,
                            example: "12345aB!"
                        },
                        urlProfile: {
                            type: "string",
                            format: "binary",
                            description: "Archivo de carga para la foto de pefil del usuario"
                        },
                        dni: {
                            type: "number",
                            required: true,
                            description: "Dni of the user",
                            example: "00.000.000"
                        },
                        fullname: {
                            type: "string",
                            required: true,
                            example: "Unknown"
                        },
                        phone: {
                            type: "number",
                            required: false,
                            example: "011-0000-0000"
                        },
                        address: {
                            type: "string",
                            required: false,
                            example: "Av. calle falsa 123"
                        },
                        balance: {
                            type: "number",
                            required: false,
                            example: "50500"
                        }
                    },
                    xml: {
                        name: "user"
                    }
                },
                card: {
                    type: "object",
                    required: [
                        "type",
                        "bank_emisor",
                        "bank",
                        "expiration_date",
                        "user_card",
                        "user_number",
                        "cvv"
                    ],
                    properties: {
                        type: {
                            type: String,
                            required: true,
                            unique: false,
                            enum: ["credit", "debit"],
                        },
                        bank_emisor: {
                            type: String,
                            required: true,
                            unique: true,
                            example: "Patagonia"
                        },
                        bank: {
                            type: String,
                            required: true,
                            enum: ["mastercard", "visa"],
                            example: "visa"
                        },
                        expiration_date: {
                            type: String,
                            unique: false,
                            example: "02/30"
                        },
                        user_card: {
                            type: String,
                            required: true,
                            example: "NOMBRE DE TARJETA"
                        },
                        user_number: {
                            type: "number",
                            required: true,
                            example: "NUMERO DE TARJETA"
                        },
                        cvv: {
                            type: "number",
                            required: true,
                            example: "264"
                        }
                    },
                    xml: {
                        name: "card"
                    }
                },
                activity: {
                    type: "object",
                    required: [
                        "amount",
                        "description",
                        "UserAccountId"
                    ],
                    properties: {
                        UserAccountId: {
                            type: String,
                            example: "638d039e8ce24f8a608e5a37"
                        },
                        amount: {
                            type: "number",
                            example: "1250"
                        },
                        description: {
                            type: String,
                            required: true,
                            example: "Esta es la descripcion de tu pago..."
                        },
                        type: {
                            type: String,
                            enum:["pay","transfer", "Recharge"],
                            require: false
                        },
                        cvu: {
                            type: String,
                            require: false,
                            $ref: "#/components/schemas/user/properties/cvu",
                            example: "1234567891234567891234"
                        },
                        alias: {
                            type: String,
                            require: false,
                            $ref: "#/components/schemas/user/properties/alias",
                            example: "panza.vino.rock"
                        },
                        payment: {
                            method: {
                                type: String,
                                required: false,
                                enum: ["card", "balance"],
                                example: "Medio de transferencia"
                            },
                            cardId: {
                                type: String,
                                required: false,
                                example: "264"
                            }
                        }
                    },
                    xml: {
                        name: "activity"
                    }
                },
                qr: {
                    type: "object",
                    required: [
                        "mount",
                        "alias"
                    ],
                    properties: {
                        alias: {
                            $ref: "#/components/schemas/user/properties/alias"
                        },
                        mount: {
                            type: "number",
                            required: true,
                            example: "1200"
                        }
                    }
                },
                addMoney:{
                    type: "object",
                    required: [
                        "cardNumber",
                        "cvv",
                        "balance"
                    ],
                    properties: {
                        cardNumber: {
                            $ref: "#/components/schemas/card/properties/user_number"
                        },
                        cvv: {
                            $ref: "#/components/schemas/card/properties/cvv"
                        },
                        balance: {
                            $ref: "#/components/schemas/user/properties/balance"
                        }
                    }
                }
            },
            requestBodies: {
                UserArray: {
                    description: "List of users object",
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
                api_key: {
                    type: "apiKey",
                    name: "Authorization",
                    in: "header"
                }
            }
        }
    },
    apis: ["./routes/*.js"]
}

// Docs in JSON format
export const specs = swaggerJsDoc(options);