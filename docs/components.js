module.exports = {
    components: {
        schemas: {
            Task: {
                type: "object",
                properties: {
                    _id: {
                        type: "objectId",
                        description: "task identification number",
                        example: "6201064b0028de7866e2b2c4"
                    },
                    title: {
                        type: "string",
                        description: "title to the task to register",
                        example: "Make something to eat at dinner."
                    },
                    completed: {
                        type: "boolean",
                        description: "check if the task is completed or no",
                        exameple: "false",
                    },
                },
            },
            _id: {
                type: "objectId",
                description: "An id of a task",
                example: "6201064b0028de7866e2b2c4",
            },
        },
    },
};