"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const service_service_1 = require("./service.service");
const pick_1 = __importDefault(require("../../../shared/pick"));
const service_constant_1 = require("./service.constant");
const pagination_1 = require("../../../constants/pagination");
const createService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield service_service_1.ServiceServices.createService(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Service created successfully!',
        data: result,
    });
}));
const updateService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const result = yield service_service_1.ServiceServices.updateService(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Service updated successfully!',
        data: result,
    });
}));
const getSingleService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_service_1.ServiceServices.getSingleService(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Service fetched successfully!',
        data: result,
    });
}));
const deleteService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_service_1.ServiceServices.deleteService(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Service deleted successfully!',
        data: result,
    });
}));
const getAllService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, service_constant_1.serviceFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = yield service_service_1.ServiceServices.getAllService(filters, paginationOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Services retrieved successfully !',
        meta: result.meta,
        data: result.data,
    });
}));
exports.ServiceControllers = {
    createService,
    updateService,
    getSingleService,
    deleteService,
    getAllService
};
