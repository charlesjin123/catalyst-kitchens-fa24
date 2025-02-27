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
  getDistinctYearsByOrgId,
  getNetworkAverage,
  getFieldValuesByYear,
} from '../services/program.outcomes.service.ts';

const getOneProgramOutcomesController = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { year, orgId } = req.params;
  console.log('Received request for program outcomes:', { year, orgId });

  if (!year || !orgId) {
    next(ApiError.missingFields(['year', 'orgId']));
    return;
  }

  try {
    // this is what was changed
    const adjustedYear = parseInt(year, 10) + 1;
    const yearDate = new Date(Date.UTC(adjustedYear, 0, 1));

    const outcomes = await getOneProgramOutcomes(yearDate, orgId);

    if (!outcomes) {
      res.status(StatusCode.OK).send(null);
      return;
    }

    res.status(StatusCode.OK).send(outcomes);
  } catch (error) {
    console.error('Error in getOneProgramOutcomesController:', error);
    next(
      ApiError.internal(
        'Unable to retrieve program outcomes by year and orgId',
      ),
    );
  }
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
  const numericalYear = Number(year);
  return getAllProgramOutcomesByYear(numericalYear)
    .then((programOutcomes: any[]) => {
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

const getDistinctYearsByOrgIdController = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { orgId } = req.params;
  if (!orgId) {
    next(ApiError.missingFields(['orgId']));
    return;
  }
  try {
    const years = await getDistinctYearsByOrgId(orgId); // Fetch unique years
    res.status(StatusCode.OK).send(years); // Send the years as response
  } catch (error) {
    next(ApiError.internal('Unable to retrieve years for the organization'));
  }
};

const getNetworkAverageController = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const {
    field,
    year,
    endYear,
    adultProgramSize,
    youthProgramSize,
    barrierHomelessness,
    barrierReturningCitizens,
    barrierInRecovery,
    compareModelOrganization,
  } = req.params;

  if (
    !field ||
    !year ||
    !endYear ||
    !adultProgramSize ||
    !youthProgramSize ||
    !barrierHomelessness ||
    !barrierInRecovery ||
    !barrierReturningCitizens ||
    !compareModelOrganization
  ) {
    next(
      ApiError.missingFields([
        'field',
        'year',
        'endYear',
        'adultProgramSize',
        'youthProgramSize',
        'barrierHomelessness',
        'barrierInRecovery',
        'barrierReturningCitizens',
        'compareModelOrganization',
      ]),
    );
    return;
  }

  try {
    const yearNum = parseInt(year, 10);
    const endYearNum = parseInt(endYear, 10);
    if (Number.isNaN(yearNum)) {
      next(ApiError.badRequest('Invalid start year format'));
      return;
    }
    if (Number.isNaN(endYearNum)) {
      next(ApiError.badRequest('Invalid end year format'));
      return;
    }

    const createProgramSize = (
      value: string,
    ): 'All' | '1-19' | '20-49' | '50-99' | '100+' => {
      if (['All', '1-19', '20-49', '50-99', '100+'].includes(value)) {
        return value as 'All' | '1-19' | '20-49' | '50-99' | '100+';
      }
      return 'All';
    };

    const createBarrierOptions = (
      value: string,
    ): 'All' | '0-25%' | '26-50%' | '51-75%' | '76-100%' => {
      if (['All', '0-25%', '26-50%', '51-75%', '76-100%'].includes(value)) {
        return value as 'All' | '0-25%' | '26-50%' | '51-75%' | '76-100%';
      }
      return 'All';
    };
    const average = await getNetworkAverage(
      field,
      yearNum,
      endYearNum,
      createProgramSize(adultProgramSize),
      createProgramSize(youthProgramSize),
      createBarrierOptions(barrierHomelessness),
      createBarrierOptions(barrierInRecovery),
      createBarrierOptions(barrierReturningCitizens),
      compareModelOrganization as 'true' | 'false',
    );

    res.status(StatusCode.OK).json({
      field,
      year: yearNum,
      average: average ?? null,
    });
  } catch (error) {
    next(ApiError.internal(`Unable to calculate network average for ${field}`));
  }
};

const getFieldValuesByYearController = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const { orgId, field } = req.params;

  if (!orgId || !field) {
    next(ApiError.missingFields(['orgId', 'field']));
    return;
  }

  try {
    const valuesByYear = await getFieldValuesByYear(
      orgId,
      field as keyof IProgramOutcomes,
    );

    // Convert Map to object for JSON response
    const response = Object.fromEntries(valuesByYear);

    res.status(StatusCode.OK).json(response);
  } catch (error) {
    next(ApiError.internal(`Unable to get ${field} values by year`));
  }
};

export {
  getDistinctYearsByOrgIdController,
  getOneProgramOutcomesController,
  getAllProgramOutcomesByYearController,
  addProgramOutcomesController,
  getAllProgramOutcomesByOrgController,
  deleteProgramOutcomeByIdController,
  getNetworkAverageController,
  getFieldValuesByYearController,
};
