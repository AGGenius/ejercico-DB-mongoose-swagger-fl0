module.exports = {
    paths: {
        "/create": {
            post: {
                tags: {
                    Tasks: "Create a task",
                },
                description: "Create Task",
                operationId: "createTask",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task",
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Taks created successfully",
                    },
                    500: {
                        description: "Server error",
                    },
                },
            },
        },
        "/": {
            get: {
                tags: {
                    Tasks: "Get all tasks",
                },
                description: "Get all Taks",
                operationId: "getAllTask",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Task"},
                        },
                    },
                },
                responses: {
                    500: {
                        description: "Server error",
                    },
                },
            },
        },
        "/id/{_id}": {
            put: {
                tags: {
                    Tasks: "Update a task",
                },
                description: "Update Taks",
                operationId: "updateTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                            $ref: "#/components/schemas/_id",
                        },
                        description: "Id of a Task to be updated",
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Task"},
                        },
                    },
                },
                responses: {
                    500: {
                        description: "Server error",
                    },
                },
            },
            delete: {
                tags: {
                    Tasks: "Delete a task",
                },
                description: "Delete Taks",
                operationId: "deleteTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                            $ref: "#/components/schemas/_id",
                        },
                        description: "Id of a Task to be deleted",
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Task"},
                        },
                    },
                },
                responses: {
                    500: {
                        description: "Server error",
                    },
                },
            },
        },
    },
};