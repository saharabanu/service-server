import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IService } from './service.interface';
import { ServiceServices } from './service.service';
import pick from '../../../shared/pick';
import { serviceFilterableFields } from './service.constant';
import { paginationFields } from '../../../constants/pagination';

const createService: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;

    const result = await ServiceServices.createService(data);

    sendResponse<IService>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service created successfully!',
      data: result,
    });
  }
);

const updateService: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;

    const result = await ServiceServices.updateService(id, data);

    sendResponse<IService>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service updated successfully!',
      data: result,
    });
  }
);

const getSingleService: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await ServiceServices.getSingleService(id);

    sendResponse<IService>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service fetched successfully!',
      data: result,
    });
  }
);

const deleteService: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await ServiceServices.deleteService(id);

    sendResponse<IService>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service deleted successfully!',
      data: result,
    });
  }
)

const getAllService = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, serviceFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await ServiceServices.getAllService(filters, paginationOptions);

  sendResponse<IService[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Services retrieved successfully !',
    meta: result.meta,
    data: result.data,
  });
});

export const ServiceControllers = {
  createService,
  updateService,
  getSingleService,
  deleteService,
  getAllService
};
