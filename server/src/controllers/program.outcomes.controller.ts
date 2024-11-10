/* eslint-disable consistent-return */
import express from 'express';
import ApiError from '../util/apiError.ts';
import StatusCode from '../util/statusCode.ts';
import { IProgramOutcomes } from '../models/program.outcomes.model.ts';
import {
  getOneProgramOutcomes,
  getAllProgramOutcomesByYear,
  addProgramOutcomes,
  getAllProgramOutcomesByOrg,
  deleteProgramOutcomeById,
} from '../services/program.outcomes.service.ts';

const getOneProgramOutcomesController = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { year, orgId } = req.params;
  if (!year || !orgId) {
    next(ApiError.missingFields(['year', 'orgId']));
    return;
  }
  const yearDate = new Date(year);
  return getOneProgramOutcomes(yearDate, orgId)
    .then((kitchenOutcomes: unknown) => {
      res.status(StatusCode.OK).send(kitchenOutcomes);
    })
    .catch(() => {
      next(
        ApiError.internal(
          'Unable to retrieve program outcomes by year and orgId',
        ),
      );
    });
};
const addProgramOutcomesController = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const programOutcomes: IProgramOutcomes = req.body;
  return addProgramOutcomes(programOutcomes)
    .then((newProgramOutcomes: IProgramOutcomes) => {
      res.status(StatusCode.OK).send(newProgramOutcomes);
    })
    .catch(() => {
      next(ApiError.internal('Unable to add program outcomes'));
    });
};
const getAllProgramOutcomesByYearController = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { year } = req.params;
  if (!year) {
    next(ApiError.missingFields(['year']));
    return;
  }
  const yearDate = new Date(year);
  return getAllProgramOutcomesByYear(yearDate)
    .then((programOutcomes: IProgramOutcomes[]) => {
      res.status(StatusCode.OK).send(programOutcomes);
    })
    .catch(() => {
      next(ApiError.internal('Unable to retrieve program outcomes by year'));
    });
};

const getAllProgramOutcomesByOrgController = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { orgId } = req.params;
  if (!orgId) {
    next(ApiError.missingFields(['orgId']));
  }
  return getAllProgramOutcomesByOrg(orgId)
    .then((programOutcomes: unknown) => {
      res.status(StatusCode.OK).send(programOutcomes);
    })
    .catch(() => {
      next(
        ApiError.internal(
          'Unable to retrieve program outcomes for specific org Id',
        ),
      );
    });
};

const deleteProgramOutcomeByIdController = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { id } = req.params;
  if (!id) {
    next(ApiError.missingFields(['id']));
    return;
  }

  try {
    const result = await deleteProgramOutcomeById(id);
    res.status(StatusCode.OK).json(result);
  } catch (error) {
    next(error);
  }
};

export {
  getOneProgramOutcomesController,
  getAllProgramOutcomesByYearController,
  addProgramOutcomesController,
  getAllProgramOutcomesByOrgController,
  deleteProgramOutcomeByIdController,
};
