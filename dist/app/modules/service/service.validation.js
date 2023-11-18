"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidations = void 0;
const zod_1 = require("zod");
const weeklyScheduleSchema = zod_1.z.object({
    days: zod_1.z.array(zod_1.z.enum([
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ])),
    seats: zod_1.z.number().min(0),
    enrolled: zod_1.z.number().min(0),
    isAvailable: zod_1.z.boolean(),
    classtime: zod_1.z.string(),
});
const addServiceSchema = zod_1.z.object({
    body: zod_1.z.object({
        instructorId: zod_1.z.string({
            required_error: 'Instructor ID is required',
        }),
        subject: zod_1.z.string({
            required_error: 'Subject is required',
        }),
        description: zod_1.z.string({
            required_error: 'Description is required',
        }),
        image: zod_1.z.string({
            required_error: 'Image is required',
        }),
        price: zod_1.z
            .number({
            required_error: 'Price is required',
        })
            .min(0),
        level: zod_1.z.enum(['junior', 'secondary', 'higher-secondary']),
        startTime: zod_1.z.string({
            required_error: 'Start time is required',
        }),
        endTime: zod_1.z.string({
            required_error: 'End time is required',
        }),
        duratiorn: zod_1.z.string({
            required_error: 'Lesson time is required',
        }),
        rating: zod_1.z.number().optional(),
        location: zod_1.z.string({
            required_error: 'Location is required',
        }),
        weeklySchedules: weeklyScheduleSchema,
    }),
});
const updateServiceSchema = zod_1.z.object({
    body: zod_1.z.object({
        instructorId: zod_1.z.string().optional(),
        subject: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        price: zod_1.z.number().min(0).optional(),
        level: zod_1.z.enum(['junior', 'secondary', 'higher-secondary']).optional(),
        startTime: zod_1.z.string().optional(),
        endTime: zod_1.z.string().optional(),
        duration: zod_1.z.string().optional(),
        rating: zod_1.z.number().optional(),
        location: zod_1.z.string().optional(),
        weeklySchedules: weeklyScheduleSchema.optional(),
    }),
});
exports.ServiceValidations = {
    addServiceSchema,
    updateServiceSchema,
};
